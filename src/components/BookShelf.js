import React from 'react';
import Books from './Books';

const BookShelf = ({ books }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Books booksList={books} />
      </ol>
    </div>
  );
};

export default BookShelf;
