import logo from './logo.svg';
import Article from './Components/Article';
import Articles from './Components/Articles';
import './App.css';
import { client } from './main';
import Nav from './Components/Nav';
import { NavLink, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  // console.log(process.env.REACT_APP_SPACE_ID)

  // client.getEntries(({ content_type : 'blogpost'})).then(function (entries) {
  //   // log the title for all the entries that have it
  //   entries.items.forEach(function (entry) {
  //     if (entry.fields.productName) {
  //       console.log(entry.fields.productName);
  //     }
  //   });
  // });

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    client.getEntries().then(function (entries) {
      // console.log(entries.items[0]);
      entries.items.forEach(function (entry) {
        if (entry.fields) {
          console.log(entry.fields)
          setArticles(prev => [...prev, entry.fields]);
          console.log(articles)
          // console.log(entry.fields.productName);
        }
      });
    });
  
  }, [])
  // console.log(articles)
  // client.getEntry('7kYGt3NwQAzh5qW1B4jkfZ').then(function (entry) {
  //   // logs the entry metadata
  //   console.log(entry.sys);
  
  //   // logs the field with ID title
  //   console.log(entry.fields.productName);
  // });

  return (
    <div className="App">

      <Nav />
      
      <h1>Hello All </h1>
{/* 
      {articles.map((article) => {
        <ul>
          <li>{article}</li>
        </ul>
      })} */}
      {/* {articles.map((article, index) =>
        <p key={index}>{article.name}</p>
       
      )} */}
      <Articles articles={articles}/>
      

      {/* <Routes>
        <Route path="articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/author/:id" element={<Article />} />
      </Routes> */}

    </div>
  );
}

export default App;
