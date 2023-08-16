import { useState, useEffect, useRef } from "react";
import { IconContainer } from "../index";
import { searchEngines } from "../../constants";
import { fetchUserData } from "../../utils/fetchUserData";
import { storeUserData } from "../../utils/storeUserData";


import search from "../../assets/icons/search.svg";
import chevron from "../../assets/icons/chevron.svg";
import styles from "../../styles/Search/Search.module.css";

const Search = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  
  const searcBarRef = useRef();

  useEffect(() => {
    const preference = fetchUserData("sengine");
    if (preference !== null) {
      setSelectedItem(preference);
    } else {
      setSelectedItem(searchEngines[0]);
    }
  }, []);

  // handlers
  const handleSelectEngine = (key) => {
    const engine = searchEngines.find(
      (searchEngine) => searchEngine.id === key
    );
    setSelectedItem(engine);
    storeUserData({ key: "sengine", data: engine });
    storeUserData({ key: "sengine", data: engine });
  };

  const handleToggleSearch = () => {
    setToggleSearch((prev) => {
      return !prev;
    });
  };

  const handleDropdownToggle = () => {
    setToggleDropdown((prev) => {
      return !prev;
    });
    if (!toggleSearch) {
      setToggleSearch(true);
    }
  };

  const handleInputChange = () => {
    if (searcBarRef.current.value !== "" && toggleSearch === false) {
      console.log(searcBarRef);
      setToggleSearch(true);
    }
    if (searcBarRef.onFocus && toggleSearch === false) {
    }
  };

  const handleMouseLeave = () => {
    if (toggleDropdown) {
      return;
    }
    if (toggleSearch) {
      if (
        searcBarRef.current.value === "" &&
        searcBarRef.current !== document.activeElement
      ) {
        setToggleSearch(false);
      }
    }
  };


  const handleFocusChange = (event)=>{
    if (event.currentTarget === event.target && toggleSearch === false) {
      setToggleSearch(true)
 }
  }


  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const encodedQuery = encodeURI(searcBarRef.current.value);
      searcBarRef.current.value = "";
      window.open(selectedItem.query + encodedQuery, "_self");
    }
  };

  //render lists
  const renderSearchEngines = () => {
    return searchEngines.map((engine) => {
      return (
        <button
          onClick={() => handleSelectEngine(engine?.id)}
          key={engine?.id}
          className={
            engine?.id !== selectedItem?.id
              ? styles.dropdownItem
              : styles.dropdownItemActive
          }
        >
          <div className={styles.contentWrapper}>
            <IconContainer alt={engine?.label} icon={engine?.icon} />
            <p> {engine?.label}</p>
          </div>
        </button>
      );
    });
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className={
        toggleSearch
          ? styles.containerSearchBarActive
          : styles.containerSearchBar
      }
    >
      <IconContainer icon={search} tooltip={"Search"} alt={"Search"} />
      <input
        className={styles.searchBar}
        onChange={handleInputChange}
        onClick={() => {
          if (!toggleSearch) {
            setToggleSearch(true);
          }
        }}
        onBlur={() => {
          if (toggleSearch && searcBarRef.current.value === "") {
            setToggleSearch(false);
          }
        }}
        placeholder="what are you looking for?"
        type="text"
        onKeyDown={handleSearch}
        ref={searcBarRef}
      />
      <div className={styles.dropdownContainer}>
        <div className={styles.selectedItem} onClick={handleDropdownToggle}>
          <IconContainer
            alt={selectedItem?.label}
            icon={selectedItem?.active}
          />
          <div className={styles.dropdownIcon}>
            <IconContainer alt={"Dropdown Icon"} icon={chevron} />
          </div>
        </div>
        <div
          className={
            toggleDropdown ? styles.dropdownItemsActive : styles.dropdownItems
          }
        >
          <p className={styles.label}>search with : </p>
          {renderSearchEngines()}
        </div>
      </div>
    </div>
  );
};

export default Search;
