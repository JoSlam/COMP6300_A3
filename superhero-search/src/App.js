import "./App.css";
import { Component, React } from "react";

import appsettings from "./appsettings.json";
import avengers_pixelated from "./static/avengers_pixelated.png";
import { Search } from "./components/search/search-component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
      searchValue: "",
    };
  }

  componentDidMount() {
    let endpointURL = `${appsettings.baseURL}/${appsettings.apiKey}`;
    fetch(`${endpointURL}/${appsettings.search}/batman`)
      .then((data) => data.json())
      .then(console.log);
  }

  render() {
    return (
      <div className="App">
        <img src={avengers_pixelated} className="App-logo" alt="logo" />
        <h1>Superhero Search</h1>

        <Search placeholder="Search heroes" handler={this.handler} />
      </div>
    );
  }

  handler = (evt) => {
    this.setState({ searchValue: evt.target.value });
  };
}

export default App;
