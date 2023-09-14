import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = (event) => {
    console.log(event.target.src);
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
