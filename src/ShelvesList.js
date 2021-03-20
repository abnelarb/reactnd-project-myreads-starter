import React from "react";
import Shelf from "./Shelf";

const ShelvesList = props => {
  const { books, shelves, moveShelf } = props;
  return (
    <div className="list-books-content">
      <div>
        {shelves.map(shelf => (
          <Shelf key={shelf.title} shelf={shelf} books={books} moveShelf={moveShelf}/>
        ))}
      </div>
    </div>
  );
};
export default ShelvesList;
