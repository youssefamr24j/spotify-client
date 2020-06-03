import React, { Component } from "react";
import "./LikedSongsPage.css";
import LikedSongList from "./LikedSongList";

class LikedSongsPage extends Component {
  constructor() {
    super();
    this.state = {
      Songs: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/likedSong")
      .then((response) => response.json())
      .then((users) => this.setState({ Songs: users }));
  }
  render() {
    console.warn(this.state.Songs);
    return (
      <div className="LikedSongsPage-page">
        <div className="col-xs-12 col-lg-3 col-xl-4">
          <div class="container">
            <img
              src="https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png"
              alt="like-image"
            />
            <button className="imageBtn">
              <i className="far fa-play-circle"></i>
            </button>
          </div>
          <h3 className="label">Liked Songs</h3>
          <button className="plyBtn">Play</button>
        </div>
        <div className="col-xs-12 col-lg-9 col-xl-8">
          <LikedSongList Songs={this.state.Songs} />
        </div>
      </div>
    );
  }
}
export default LikedSongsPage;