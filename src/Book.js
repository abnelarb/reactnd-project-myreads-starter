import React ,{ Component } from "react";
import ShelfMove from "./ShelfMove";
class Book extends Component {
  render() {
  const { shelf, book, moveShelf } = this.props;
  let hasThumbnail
  if (this.props.book.imageLinks) {
      hasThumbnail = this.props.book.imageLinks.thumbnail
  } else {
      hasThumbnail = ''
  }
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${hasThumbnail}")`
            }}
          />
          <ShelfMove book={book} shelf={shelf} moveShelf={moveShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ')}
        </div>
      </div>
    </li>
  );
};
}
export default Book;
