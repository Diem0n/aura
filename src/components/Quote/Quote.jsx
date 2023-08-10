import React, { useEffect, useState } from "react";
import { quotes } from "../../constants";
import styles from '../../styles/Quote/Quote.module.css';
const Quote = () => {
  const [selectedQuote , setSelectedQuote] = useState({});
  useEffect ( () => {
    const index = Math.floor(Math.random() * 21)
    setSelectedQuote(quotes[index]);
    
  } , [])
  return (
    <div className={
      styles.container
    }>
      <h2 className={styles.quote}>{selectedQuote.quote}</h2>
      <p  className={styles.author}>{selectedQuote.author} </p>
    </div>
  );
};

export default Quote;
