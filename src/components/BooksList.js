import React, { Component } from 'react'
import AppTitle from './AppTitle'
import { Link } from 'react-router-dom';

export default class BooksList extends Component {
  render() {
    console.log(this.props.books)
    
    return (
      <div className="list-books">
            <AppTitle title="MyReads" />
            
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  {/* bookshelf */}
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  {/* bookshelf */}
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  {/* bookshelf */}
                </div>
              </div>
            </div>
            <div className="open-search">
            <Link to="/search" className="add-contact">
            Book Search
          </Link>
            </div>
          </div>
    )
  }
}
