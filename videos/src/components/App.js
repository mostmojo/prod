import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchTermSubmit = async searchTerm => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    console.log("From the app", video);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
