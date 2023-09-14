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
      selectedGifId: "BBkKEBJkmFbTG"
    };

    this.search("rick and morty");
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

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
            {/* <Gif selectGif={this.select} /> */}
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
