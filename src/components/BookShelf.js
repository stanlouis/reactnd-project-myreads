import React from 'react';
import Books from './Books';
import { PropTypes } from 'prop-types';

const BookShelf = props => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Books
          booksList={props.selectBooks}
          onShelfChange={props.onShelfChange}
        />
      </ol>
    </div>
  );
};

BookShelf.propTypes = {
  selectBooks: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
};

export default BookShelf;
