import { useState, useContext, useEffect, useRef } from "react";

import search from "../../assets/icons/search.svg";

import bing from "../../assets/icons/bing.svg";
import bingActive from "../../assets/icons/bing-active.svg";
import google from "../../assets/icons/google.svg";
import googleActive from "../../assets/icons/google-active.svg";
import duckduckgo from "../../assets/icons/duckduckgo.svg";
import duckduckgoActive from "../../assets/icons/duckduckgo-active.svg";
import chevron from "../../assets/icons/chevron.svg";
import IconContainer from "../IconContainer/IconContainer";
import styles from "../../styles/Search/Search.module.css";
import { AppContext } from "../../context/AppContext";

const Search = () => {
  const searchEngines = [
    {
      id: "se1",
      label: "Bing",
      icon: bing,
      active: bingActive,
      query: "https://www.bing.com/search?q=",
    },
    {
      id: "se2",
      label: "Google",
      icon: google,
      active: googleActive,
      query: "https://www.google.com/search?q=",
    },
    {
      id: "se3",
      label: "DuckDuck Go",
      icon: duckduckgo,
      active: duckduckgoActive,
      query: "https://duckduckgo.com/?q=",
    },
  ];
  const [selectedItem, setSelectedItem] = useState(searchEngines[0]);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const { toggleOverlay, setToggleOverlay } = useContext(AppContext);
  const searcBarRef = useRef();

  useEffect(() => {
    if (!toggleOverlay && toggleDropdown === true) {
      setToggleDropdown(false);
    }
  }, [toggleOverlay]);

  // handlers
  const handleSelectEngine = (key) => {
    const engine = searchEngines.find(
      (searchEngine) => searchEngine.id === key
    );
    setSelectedItem(engine);
  };

  const handleDropdownToggle = () => {
    setToggleDropdown((prev) => {
      if (prev === false) {
        setToggleOverlay(true);
      } else {
        setToggleOverlay(false);
      }
      return !prev;
    });
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      const encodedQuery = encodeURI(searcBarRef.current.value);
      searcBarRef.current.value = "";
      window.open(selectedItem.query + encodedQuery, "_self");
    }
  };

  //render lists
  const renderSearchEngines = () => {
    return searchEngines.map((searchEngine) => {
      return (
        <button
          onClick={() => handleSelectEngine(searchEngine.id)}
          key={searchEngine.id}
          className={
            selectedItem.id !== searchEngine.id
              ? styles.dropdownItem
              : styles.dropdownItemActive
          }
        >
          <div className={styles.contentWrapper}>
            <IconContainer icon={searchEngine.icon} />
            <p> {searchEngine.label}</p>
          </div>
        </button>
      );
    });
  };

  return (
    <div className={styles.container_searchbar}>
      <IconContainer
        handlePress={() => {
          console.log("pressed");
        }}
        icon={search}
        tooltip={"Search"}
      />
      <input
        className={styles.searchBar}
        placeholder="what are you looking for?"
        type="text"
        onKeyDown={handleSearch}
        ref={searcBarRef}
      />
      <div className={styles.dropdownContainer}>
        <div className={styles.selectedItem} onClick={handleDropdownToggle}>
          <IconContainer icon={selectedItem?.active} />
          <div className={styles.dropdownIcon}>
            <IconContainer icon={chevron} />
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
