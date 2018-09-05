import React, { Component } from 'react';
import AppTitle from './AppTitle';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

export default class BooksList extends Component {
  render() {

    const shelves = {
      currentlyReading: ['Currently Reading', 'currentlyReading'],
      wantToRead: ['Want to Read', 'wantToRead'],
      read: ['Read', 'read']
    }

    return (
      <div className="list-books">
        <AppTitle title="MyReads" />

        <div className="list-books-content">
          { Object.keys(shelves).map((shelf) =>
            <div className="bookshelf" key={shelf}>
              <h2 className="bookshelf-title">{shelves[shelf][0]}</h2>
              <BookShelf
                selectBooks={this.props.books.filter(book => book.shelf === shelves[shelf][1])}
                onShelfChange={this.props.onShelfChange}
              />
            </div>
          )}
        </div>
        <div className="open-search">
          <Link to="/search" className="add-contact">
            Book Search
          </Link>
        </div>
      </div>
    );
  }
}