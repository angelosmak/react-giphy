/* eslint-disable react/destructuring-assignment */
import React, { Component } from "react";
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map((gif) => {
          return <Gif id={gif.id} key={gif.id} />;
        })}
      </div>
    );
  }
}

export default GifList;
