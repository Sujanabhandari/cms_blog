import logo from './logo.svg';
import Article from './Components/Article';
import Articles from './Components/Articles';
import './App.css';
import { client } from './main';
import Nav from './Components/Nav';
import { NavLink, Routes, Route } from "react-router-dom";

function App() {
  console.log(process.env.REACT_APP_SPACE_ID)

  client.getEntries(({ content_type : 'blogpost'})).then(function (entries) {
    // log the title for all the entries that have it
    entries.items.forEach(function (entry) {
      if (entry.fields.productName) {
        console.log(entry.fields.productName);
      }
    });
  });

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

      <Routes>
        <Route path="articles" element={<Articles />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/author/:id" element={<Article />} />
      </Routes>

    </div>
  );
}

export default App;
