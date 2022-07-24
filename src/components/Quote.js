import React from "react";
import { useEffect, useState } from "react";

function Quote() {
  // quote
  const api_url = "https://quotes.rest/qod?language=en";

  async function getapi(url) {
    const response = await fetch(url);
    let data = await response.json();
    setQuote(data.contents.quotes[0].quote);
  }

  useEffect(() => {
    getapi(api_url);
  });

  const [quote, setQuote] = useState("");

  return (
    <h2 className="text-white text-2xl text-center backdrop-blur-sm">
      {" "}
      {quote}{" "}
    </h2>
  );
}

export default Quote;
