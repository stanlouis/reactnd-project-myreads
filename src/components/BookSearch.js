import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Books from './Books';
import * as BooksAPI from '.././BooksAPI';

export default class BookSearch extends Component {
  state = {
    books: [],
    searchField: ''
  };
  onSearchChange = event => {
    const searchField = event.target.value;
    this.setState(() => ({
      searchField
    }));

    if (searchField.length === 0) {
      this.setState(() => ({
        books: []
      }));
    } else {
      BooksAPI.search(searchField)
        .then(res => {
          if (res.length > 0) {
            this.setState(() => ({
              books: res
            }));
          } else {
            this.setState(() => ({
              books: []
            }));
          }
        })
        .catch(() => {
          this.setState(() => ({
            books: []
          }));
        });
    }
  };
  render() {
    const shelvedBooks = this.props.books;
    const booksResultWithShelf = this.state.books.map(book => {
      // Find shelved books in the search result
      let duplicateBooks = shelvedBooks.filter(
        shelvedBook => shelvedBook.id === book.id
      );
      // Match Shelf value
      if (duplicateBooks.length > 0) {
        book.shelf = duplicateBooks[0].shelf;
      }
      return book;
    });
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.onSearchChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            {this.state.books.length > 0 && (
              <ol className="books-grid">
                <Books
                  booksList={booksResultWithShelf}
                  onShelfChange={this.props.onShelfChange}
                />
              </ol>
            )}{' '}
            {this.state.books.length === 0 && (
              <ol className="books-grid">
                <h2>No Books found as yet</h2>
              </ol>
            )}
          </div>
        </div>
      </div>
    );
  }
}
