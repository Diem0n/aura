import styles from "../../../styles/Settings/Settings.module.css"
const Modal = ()=>{
    const navigationLabels = ['General' , 'Todo' , 'Mantras' , 'Photos' , 'Quotes' , 'Links & Booksmarks' , 'Balance']
    return (
        <div className={styles.settingsModal}>
            <div className={styles.navigator}>
               {
                navigationLabels.map((label , index)=>{
                    return (
                        <button key={index}>{label}</button>
                    )
                })
               }
               
            </div>
            <div className={styles.navigatorContent}><button>Mantras</button>
                <button>Mantras</button>
                <button>Mantras</button>
                <button>Mantras</button>
                <button>Mantras</button></div>
        </div>
    )
}

export default Modal;