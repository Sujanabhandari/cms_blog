import logo from './logo.svg';
import Article from './Components/Article';
import Articles from './Components/Articles';
import Author from './Components/Author';
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
      setArticles(entries.items);
    });
  
  }, [])

  return (
    <div className="App">
      <header className='mb-3'>
        <NavLink to="/" className="link"><h1>Contentful Blog</h1></NavLink>
        <p>Welcome to our blog</p>
        <Nav />
      </header>

      <Routes>
        <Route path='/' element={<Articles articles={articles}/>} /> 
        <Route path=':id' element={<Article articles={articles}/>} /> 
        <Route path='Author/Christian' element={<Author articles={articles} author='Christian'/>} /> 
        <Route path='Author/Sujana' element={<Author articles={articles} author='Sujana Bhandari'/>} /> 
        <Route path='Author/Robert' element={<Author articles={articles} author='Robert'/>} /> 
      </Routes>

    </div>
  );
}

export default App;
