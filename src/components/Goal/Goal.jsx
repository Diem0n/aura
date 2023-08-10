
import styles from '../../styles/Goal/Goal.module.css';
const Goal = () => {
    return (
       <div className="u-center">
        <h1 className={styles.label}>What is your main focus for today?</h1>
       <input className={styles.goal}  />
       </div>
    )
}

export default Goal;