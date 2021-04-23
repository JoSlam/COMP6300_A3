import "./App.css";
import { Component, React } from "react";

import appsettings from "./appsettings.json";
import totoro from "./static/totoro.png";
import { Search } from "./components/search/search-component.jsx";
import { CardList } from "./components/card-list/card-list-component.jsx";

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
      .then((searchResult) =>
        this.setState({ anime: searchResult.results })
/*         this.setState({ anime: searchResult.results }, () =>
          console.log(this.state.anime)
        ) */
      );
  }

  render() {
    // add validation to input
    return (
      <div className="App">
        <img src={totoro} className="App-logo" alt="logo" />
        <h1 className="title">Anime Search</h1>

        <Search placeholder="Search Anime" handler={this.handler} />
        <CardList anime={this.state.anime}/>
      </div>
    );
  }
  // add button and place event on button click

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
