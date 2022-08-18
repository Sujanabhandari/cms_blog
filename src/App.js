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
  const [newArticles, setNewArticles] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    client.getEntries().then(function (entries) {
      setArticles(entries.items);
      setNewArticles(entries.items);
    });
  
  }, [])

  useEffect(() => {
    const array = [];
    articles.filter(post => {
      if (query === "") {
        //if query is empty
        console.log("empty")
        return setNewArticles(articles)
      } else if(post.fields.name.toLowerCase().includes(query.toLowerCase()) || post.fields.author.toLowerCase().includes(query.toLowerCase())){
        array.push(post);
        return setNewArticles(array)
      }
    });
  }, [query])

  return (
    <div className="App">
      <header className='mb-3'>
        <NavLink to="/" className="link"><h1>Contentful Blog</h1></NavLink>
        <p>Welcome to our blog</p>
        <input placeholder="Search" onChange={event => setQuery(event.target.value)} />
        {/* <Nav /> */}
      </header>

      <Routes>
        <Route path='/' element={<Articles articles={newArticles}/>} /> 
        <Route path=':id' element={<Article articles={newArticles}/>} /> 
        <Route path='Author/Christian' element={<Author articles={newArticles} author='Christian'/>} /> 
        <Route path='Author/Sujana' element={<Author articles={newArticles} author='Sujana Bhandari'/>} /> 
        <Route path='Author/Robert' element={<Author articles={newArticles} author='Robert'/>} /> 
      </Routes>

    </div>
  );
}

export default App;
