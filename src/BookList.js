import React, { Component } from "react";
import ShelvesList from "./ShelvesList";
import Search from "./Search";
import PropTypes from 'prop-types';
class BookList extends Component {
  render() {
    const { books, shelves, moveShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <ShelvesList shelves={shelves} books={books} moveShelf={moveShelf} />

        <Search />
      </div>
    );
  }
}
BookList.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  moveShelf: PropTypes.func.isRequired,
}
export default BookList;
