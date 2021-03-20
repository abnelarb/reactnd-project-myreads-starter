import React, { Component } from "react";
class ShelfMove extends Component {
  state = { value: this.props.shelf }
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
            this.props.moveShelf(this.props.book, event.target.value)
          }}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}
export default ShelfMove;
