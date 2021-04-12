/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [

  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    source: "Nelson Mandela",
    tag: "inspirational"
  },
  {
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
    tag: "deep"
  },
  {
    quote: "The best way to predict the future is to create it.",
    source: "Peter Drucker",
    tag: "deep"
  },
  {
    quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
    source: "Paulo Coelho",
    citation: "The Alchemist",
    year: 1988,
    tag: "inspirational"
  },
  {
    quote: "The two most powerful warriors are patience and time.",
    source: "Leo Tolstoy",
    citation: "War and Peace",
    year: 1869,
    tag: "deep"
  },
  {
    quote: "All that we are is the result of what we have thought.",
    source: "Budhha",
    tag: "deep"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt",
    tag: "inspirational"

  },
  {
    quote: "If you think you are too small to make a difference, try sleeping with a mosquito.",
    source: "The Dalai Lama",
    tag: "inspirational"
  },
  {
    quote: "People say nothing is impossible, but I do nothing every day.",
    source: "A. A. Milne",
    tag: "Humor"
  }
  
];

//function returns randomly selected quote from quotes array
const getRandomQuote = array => array[Math.floor(Math.random() * quotes.length)];

//function that generates random RGB value
const generateRandomRGBValue = () => Math.floor(Math.random() *256);

//function that takes 3 randomly generated RGB values from generateRandomRGBValue, combine them and return a randomly generated RGB color

const generateRandomColor = value => {
  const color = `rgb(${value()}, ${value()}, ${value()})`;
  return color;
};

//function calls two other functions - getRandomQuote and generateRandomColor to simultanoiusly return quote object and display a random quote in a browser and change the background color randomly. 
function printQuote(){

  const randomQuote = getRandomQuote(quotes);
  const quoteBox = document.querySelector('#quote-box');
  let html = `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;
  
  if(randomQuote.citation){
      html += `<span class="citation">${randomQuote.citation}</span>`
    }

  if(randomQuote.year){
    html += `<span class="year">${randomQuote.year}</span>`
    }

  if(randomQuote.tag){
    html += `<span class="tag">${randomQuote.tag}</span>`
    }

  html += `</p>`

  quoteBox.innerHTML = html;
  document.body.style.background = generateRandomColor(generateRandomRGBValue);
};

//timing function that prints random quote after every 10 seconds.
 setInterval(function (){
  printQuote();
}, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

