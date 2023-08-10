import { useEffect, useState } from "react";
import { quotes } from "../../constants";
import styles from '../../styles/Quote/Quote.module.css';
const Quote = () => {
  const [selectedQuote , setSelectedQuote] = useState({});
  useEffect ( () => {
    const index = Math.floor(Math.random() * 21)
    setSelectedQuote(quotes[index]);
    
  } , [])
  return (
    <div className="u-column">
      <h2>Quote</h2>
      <p>Author</p>
    </div>
  );
};

export default Quote;
