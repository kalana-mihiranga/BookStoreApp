
import React from 'react';
import './App.css';
import About from './component/About'
import Home from './component/Home'
import Addbook from './component/Addbook'
import Header from './component/Header';
import Books from './component/Book/Books';
import BookDetail from './component/BookDetail';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <React.Fragment>
    <header>
      <Header/>

    </header>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/add" element={<Addbook/>} exact/>
        <Route path="/books" element={<Books/>} exact/>
        <Route path="/about" element={<About/>} exact/>
        <Route path="/books/:id" element={<BookDetail/>} exact/>
      </Routes>

    </main>
  </React.Fragment>
  )
}

export default App;
