import settings from "../../assets/icons/settings.svg";
import { IconContainer } from "../index";
const Settings = () => {
  const handlePress = () => {
    console.log("Handle Press Settings");
  };
  return (
    <div className="">
      <IconContainer
        handlePress={handlePress}
        icon={settings}
        tooltip={"settings"}
      />
      {/* <p className="u-absolute"> Lorem, Ipsum</p> */}
    </div>
  );
};

export default Settings;
