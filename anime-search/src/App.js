import "./App.css";
import { Component, React } from "react";

import appsettings from "./appsettings.json";
import totoro from "./static/totoro.png";
import { Search } from "./components/search/search.jsx";
import { CardList } from "./components/card-list/card-list.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      anime: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    let searchUrl = this.getSearchUrl();

    fetch(searchUrl)
      .then((data) => data.json())
      .then((searchResult) => this.setState({ anime: searchResult.results }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={totoro} className="App-logo" alt="logo" />
          <h1 className="title">Anime Search</h1>

          <Search placeholder="Search Anime" handler={this.handler} />
          {this.renderCardList(this.state.anime)}
        </div>
      </div>
    );
  }
  // add button and place event on button click

  renderCardList(anime) {
    if (anime !== undefined && anime.length > 0) {
      return <CardList anime={anime} />;
    }
  }

  handler = (evt) => {
    let searchBox = document.getElementById("search-input");
    this.setState({ searchValue: searchBox.value });
  };

  getSearchUrl(searchValue) {
    let base = `${appsettings.baseURL}/${appsettings.search}?`;

    if (searchValue) {
      base += `q=${searchValue}&rated=${appsettings.rated}`;
    } else {
      base += `rated=${appsettings.rated}`;
    }

    return base;
  }
}

export default App;
