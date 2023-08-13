import styles from "../../styles/Clock/Clock.module.css";
import {useState , useEffect} from 'react' 
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = time.toLocaleString("en-GB" , {
    hour : '2-digit',
    minute : '2-digit'
  });

  return (
    <div>
      <h1 className={styles.time}>{formattedTime}</h1>
    </div>
  );
};

export default Clock;
