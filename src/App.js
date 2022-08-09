import logo from './logo.svg';
import Article from './Components/Article';
import Articles from './Components/Articles';
import './App.css';
import { client } from './main';
import Nav from './Components/Nav';
import { NavLink, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../src/styles/main.css'

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client.getEntries().then(function (entries) {
      console.log("From useEffect",entries.items);
      console.log(entries)
      setArticles(entries.items);
    });
  
  }, [])

  return (
    <div className="App">
      <header className='mb-3'>
        <h1>Contentful Blog </h1>
        <p>Welcome to our blog</p>
      </header>
      {/* <Nav /> */}
      <main>
        <Articles articles={articles}/>
      </main>

    </div>
  );
}

export default App;
