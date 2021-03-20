import React, { Component } from "react";
import ShelvesList from "./ShelvesList";
import Search from "./Search";

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
export default BookList;
