import React from 'react';
import Books from './Books';

const BookShelf = (props) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Books booksList={props.selectBooks} />
      </ol>
    </div>
  );
};

export default BookShelf;
