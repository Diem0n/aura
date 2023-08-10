import styles from "../../styles/Clock/Clock.module.css";
import moment from "moment";
const Clock = () => {
  const time = moment();

  return (
    <div>
      <h1 className={styles.time}>{`${time.format("HH")}:${time.format(
        "MM"
      )}`}</h1>
    </div>
  );
};

export default Clock;
