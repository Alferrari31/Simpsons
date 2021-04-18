import React, { useState } from "react";
import './App.css';
import Cards from './components/quoteCard';

function App() {

  const [giveQuote, setGiveQuote] = useState ([])
  const simpleQuote = () => {
   
    fetch ('https://simpsons-quotes-api.herokuapp.com/quotes')
     
      .then((response) => response.json())
      .then((data) => {
       setGiveQuote(data)
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={simpleQuote}>APPUYER</button>
        {giveQuote.map ((quote,index)  => {
          return (
            <Cards key={index} character= {quote.characater} 
            image={quote.image}
            quote={quote.quote}/>
  )})}
      </header>
    </div>
  );
}

export default App;
