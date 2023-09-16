/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import giphy from "giphy-api";
import SearchBar from './searchbar';
import Gif from './gif';
import GifList from './gif_list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    };

    this.search("rick and morty");
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    giphy("bxgjnaQ5BtrHk3oa8OSRD36XNBdyREYU").search({
      q: query,
      rating: 'g'
    }, (error, results) => {
      this.setState({
        gifs: results.data.slice(0, 20) // Limit the results to 20
      });
    });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
