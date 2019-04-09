import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onSearchTermSubmit = searchTerm => {
    youtube.get("/search", {
      params: {
        q: searchTerm
      }
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
      </div>
    );
  }
}

export default App;
