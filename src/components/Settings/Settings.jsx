
import IconContainer from "../IconContainer/IconContainer";
import settings from '../../assets/icons/settings.svg';

const Settings = () => {
    const handlePress = () => {
        console.log('Handle Press Settings')
    }
    return (
       <div className="u-row" >
            <IconContainer handlePress={handlePress} icon={settings} tooltip={'settings'}/>
            {/* <p className="u-absolute"> Lorem, Ipsum</p> */}
       </div>
    )
}


export default Settings;