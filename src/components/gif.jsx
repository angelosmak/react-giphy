/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  };

  render() {
    if (!this.props.id) {
      return null;
    }
    // eslint-disable-next-line react/destructuring-assignment
    const src = `https://media4.giphy.com/media/${this.props.id}/200.gif`;
    return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
