import React, { Component } from 'react';
import AppTitle from './AppTitle';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

export default class BooksList extends Component {
  render() {

    return (
      <div className="list-books">
        <AppTitle title="MyReads" />

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              {/* bookshelf */}
              <BookShelf
                selectBooks={this.props.books.filter(
                  book => book.shelf === 'currentlyReading'
                )}
                onShelfChange={this.props.onShelfChange}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              {/* bookshelf */}
              <BookShelf
                selectBooks={this.props.books.filter(
                  book => book.shelf === 'wantToRead'
                )}
                onShelfChange={this.props.onShelfChange}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              {/* bookshelf */}
              <BookShelf
                selectBooks={this.props.books.filter(
                  book => book.shelf === 'read'
                )}
                onShelfChange={this.props.onShelfChange}
              />
            </div>
          </div>
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
