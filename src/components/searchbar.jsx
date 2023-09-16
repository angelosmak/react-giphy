import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class SearchBar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  handleChange = (event) => {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.searchFunction(event.target.value);

    this.setState({
      term: event.target.value
    });
  }

  render() {
    return (
      <input
        // eslint-disable-next-line react/destructuring-assignment
        value={this.state.term}
        type="text"
        className="form-controll form-search"
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
