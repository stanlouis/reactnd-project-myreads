import React from 'react';

const Books = ({ booksList, onShelfChange }) => {
  return booksList.map(book => {
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  book.imageLinks && book.imageLinks.thumbnail
                    ? `url(${book.imageLinks.thumbnail})`
                    : `url(noCover)`
              }}
            />
            <div className="book-shelf-changer">
              <select
                onChange={e => onShelfChange(book, e.target.value)}
                value={book.shelf ? book.shelf : 'none'}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
      </li>
    );
  });
};

export default Books;
