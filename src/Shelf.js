import React from "react";
import Book from "./Book";
const Shelf = props => {
  const { books, shelf, moveShelf } = props;
  const shelfBooks = books.filter(book => book.shelf === shelf.title);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map(book => (
            <Book key={book.id} shelf={shelf.title} book={book} moveShelf={moveShelf}/>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Shelf;
