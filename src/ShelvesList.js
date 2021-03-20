import React from "react";
import Shelf from "./Shelf";
import PropTypes from 'prop-types';
const ShelvesList = props => {
  const { books, shelves, moveShelf } = props;

  return (
    <div className="list-books-content">
      <div>
        {shelves.map(shelf => (
          <Shelf key={shelf.title} shelf={shelf} books={books} moveShelf={moveShelf} />
        ))}
      </div>
    </div>
  );
};
ShelvesList.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired,
  moveShelf: PropTypes.func.isRequired
}
export default ShelvesList;
