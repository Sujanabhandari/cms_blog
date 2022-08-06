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
      console.log(entries);
      setArticles(prev => [...prev, ...entries.items]);

      // const startTime = performance.now();
      // entries.items.forEach(function (entry) {
      //   if (entry.fields) {
      //     console.log(entry.fields)
      //     setArticles(prev => [...prev, entry.fields]);
      //     console.log(articles)
      //     // console.log(entry.fields.productName);
      //   }
      // });
      // const endTime = performance.now();
      // console.log(endTime-startTime);
    });
  
  }, [])

  return (
    <div className="App">

      <header>
        <h1>Contentful Blog </h1>
        <p>Welcome to our blog</p>
      </header>
      {/* <Nav /> */}
      <main>
        <Articles articles={articles}/>
      </main>
      
      

      {/* <Routes>
        <Route path="articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/author/:id" element={<Article />} />
      </Routes> */}

    </div>
  );
}

export default App;
