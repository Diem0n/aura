import styles from "../../styles/Goal/Goal.module.css";
const Goal = () => {
  return (
    <form className="u-center">
      <h1 className={styles.label}>What is your main focus for today?</h1>
      <input aria-label="goal-input" className={styles.goal} />
    </form>
  );
};

export default Goal;
