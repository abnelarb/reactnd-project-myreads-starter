import React, { Component } from "react";
import { Link } from "react-router-dom";
class Search extends Component {
    render() {
        return (
            <div className="open-search">
                <Link to="/search">
                    <button>Add a book</button>
                </Link>
            </div>
        );
    }
}
export default Search;
