import React from 'react';
import * as BooksAPI from './BooksAPI';
import BookSearch from './components/BookSearch';
import BooksList from './components/BooksList';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <BooksList books={this.state.books} />}
        />
        <Route
          path="/search"
          render={() => <BookSearch books={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
