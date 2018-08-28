import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookSearch from './components/BookSearch'
import BooksList from './components/BooksList'
import { Route } from 'react-router-dom';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
       <Route exact path="/" component={BooksList}/>
       <Route path="/search" component={BookSearch} />
      </div>
    )
  }
}

export default BooksApp
