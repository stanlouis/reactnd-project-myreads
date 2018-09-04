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

  handleShelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(prevState => {
        let nonSelectedBooks = prevState.books.filter(
          bookPrevState => bookPrevState.id !== book.id
        );
        book.shelf = shelf;
        nonSelectedBooks.push(book);
        return {
          books: nonSelectedBooks
        };
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksList
              books={this.state.books}
              onShelfChange={this.handleShelfUpdate}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <BookSearch
              books={this.state.books}
              onShelfChange={this.handleShelfUpdate}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
