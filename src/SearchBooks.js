import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css"
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import PropTypes from 'prop-types';
class SearchBooks extends Component {
  state = {
    query: '',
    results: []
  };

  updateQuery = (query) => {
    let trimmQuery = query.replace(/^\s+/, '')
    this.setState({ query: trimmQuery })
    this.handleSearchResults(query);
  }
  clearQuery = () => {
    this.setState({ results: [] })
  }
  handleSearchResults = (query) => {
    if (query.length !== 0) {
      BooksAPI.search(query).then((results) => {
        if (results.error) {
          this.clearQuery();
        } else {
          this.setState({ results: results })
          // console.log(results)
        }
      })
    } else {
      this.clearQuery();
    }
  }
  render() {
    const { moveShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.results.map(result => {
              let shelf = "none"
              this.props.books.forEach(book => {
                if (book.id !== result.id) {
                } else {
                  shelf = book.shelf
                }
              })
              return (
                <div key={result.id} className="book">
                  <Book
                    key={result.id}
                    shelf={shelf}
                    book={result}
                    moveShelf={moveShelf} />

                </div>
              )
            }
            )
            }
          </ol>
        </div>
      </div>
    );
  }
}
SearchBooks.protoTypes = {
  moveShelf: PropTypes.func.isRequired,
}
export default SearchBooks;
