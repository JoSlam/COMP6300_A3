import "./App.css";
import { Component, React } from "react";

import appsettings from "./appsettings.json";
import totoro from "./static/totoro.png";
import { Search } from "./components/search/search.jsx";
import { CardList } from "./components/card-list/card-list.jsx";
import { ErrorMessage } from "./components/error-message/error-message";

class App extends Component {
  constructor() {
    super();

    this.state = {
      animeList: [],
      error: "",
    };
  }

  componentDidMount() {
    this.searchByName();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={totoro} className="App-logo" alt="logo" />
          <h1 className="title">Anime Search</h1>

          <Search placeholder="Search Anime" handler={this.searchHandler} />
          {this.renderError(this.state.error)}
          {this.renderCardList(this.state.animeList)}
        </div>
      </div>
    );
  }

  renderError(message) {
    if (message) {
      return <ErrorMessage message={this.state.error} />;
    }
  }

  renderCardList(anime) {
    if (anime !== undefined && anime.length > 0) {
      return <CardList anime={anime} />;
    } else {
      return <ErrorMessage message={"No results found..."} />;
    }
  }

  searchHandler = (evt) => {
    let searchBox = document.getElementById("search-input");
    this.updateListData(searchBox.value);
  };

  updateListData(searchValue) {
    if (searchValue && searchValue.length >= 3) {
      this.searchByName(searchValue);
    } else {
      this.setState({ error: "Atleast 3 characters required." });
    }
  }

  // Searches and updates the anime list
  searchByName(searchValue) {
    let searchUrl = this.getSearchUrl(searchValue);

    fetch(searchUrl)
      .then((data) => data.json())
      .then((searchResult) =>
        this.setState({ animeList: searchResult.results, error: "" }, () =>
          console.log(this.state.animeList.length)
        )
      );
  }

  // Builds request URL
  getSearchUrl(searchValue) {
    let base = `${appsettings.baseURL}/${appsettings.search}?`;
    let otherParams = this.getOtherParameters();

    if (searchValue) {
      base += `q=${searchValue}&${otherParams}`;
    } else {
      base += otherParams;
    }

    return base;
  }

  getOtherParameters() {
    return `rated=${appsettings.rated}&limit=${appsettings.limit}`;
  }
}

export default App;
