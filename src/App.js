import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BookList from "./BookList";
import SearchBooks from "./SearchBooks";
import Footer from './Footer'
class BooksApp extends React.Component {
  shelves = [
    { title: "currentlyReading", name: "Currently Reading" },
    { title: "wantToRead", name: "Want to Read" },
    { title: "read", name: "Read" }
  ];
  state = {
    books: []
  };
  getData = async () => {
    const books = await BooksAPI.getAll();
    this.setState({ books })
  };
  componentDidMount() {
    this.getData();
    //console.log(this.getData)
  }
  handleShelfMove = (book, shelf) => {
    let updateInfo = [];
    BooksAPI.update(book, shelf);
    updateInfo = this.state.books.filter(c => c.id !== book.id)
    if (shelf !== 'none') {
      book.shelf = shelf;
      updateInfo = updateInfo.concat(book)
    }
    this.setState({
      books: updateInfo,
    })
  }
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <BookList shelves={this.shelves} books={this.state.books} moveShelf={this.handleShelfMove} />}
        />
        <Route path='/search'>
          <SearchBooks books={this.state.books} moveShelf={this.handleShelfMove} />
        </Route>        <Footer />
      </div>
    );
  }
}
export default BooksApp;
