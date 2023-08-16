import bing from "../assets/icons/bing.svg";
import bingActive from "../assets/icons/bing-active.svg";
import google from "../assets/icons/google.svg";
import googleActive from "../assets/icons/google-active.svg";
import duckduckgo from "../assets/icons/duckduckgo.svg";
import duckduckgoActive from "../assets/icons/duckduckgo-active.svg";

const quotes = [
  {
    author: "Steve Jobs",
    quote: "The only way to do great work is to love what you do.",
  },
  {
    author: "Theodore Roosevelt",
    quote: "Believe you can and you're halfway there.",
  },
  {
    author: "Winston Churchill",
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "The future depends on what you do today.",
  },
  {
    author: "Franklin D. Roosevelt",
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
  },
  {
    author: "Wayne Gretzky",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Steve Jobs",
    quote: "Your time is limited, don't waste it living someone else's life.",
  },
  {
    author: "Ralph Waldo Emerson",
    quote:
      "The only person you are destined to become is the person you decide to be.",
  },
  {
    author: "Albert Einstein",
    quote: "In the middle of every difficulty lies opportunity.",
  },
  {
    author: "Sam Levenson",
    quote: "Don't watch the clock; do what it does. Keep going.",
  },
  {
    author: "Abraham Lincoln",
    quote: "The best way to predict the future is to create it.",
  },
  {
    author: "Winston Churchill",
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
  },
  {
    author: "Lao Tzu",
    quote: "The journey of a thousand miles begins with one step.",
  },
  {
    author: "Charles R. Swindoll",
    quote: "Life is 10% what happens to us and 90% how we react to it.",
  },
  {
    author: "Joel Brown",
    quote:
      "The only thing standing between you and your dream is the will to try and the belief that it is actually possible.",
  },
  {
    author: "Joshua J. Marine",
    quote:
      "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
  },
  {
    author: "Anonymous",
    quote:
      "The harder you work for something, the greater you'll feel when you achieve it.",
  },
  {
    author: "Roy T. Bennett",
    quote:
      "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  },
  {
    author: "C.S. Lewis",
    quote: "You are never too old to set another goal or to dream a new dream.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    author: "Jim Rohn",
    quote: "Your life does not get better by chance, it gets better by change.",
  },
];

const searchEngines = [
  {
    id: "se1",
    label: "Bing",
    icon: bing,
    active: bingActive,
    query: "https://www.bing.com/search?q=",
  },
  {
    id: "se2",
    label: "Google",
    icon: google,
    active: googleActive,
    query: "https://www.google.com/search?q=",
  },
  {
    id: "se3",
    label: "DuckDuck Go",
    icon: duckduckgo,
    active: duckduckgoActive,
    query: "https://duckduckgo.com/?q=",
  },
];

export { quotes , searchEngines };
