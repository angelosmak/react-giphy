import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  handleChange = (event) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.search(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-controll form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
