import { React } from "react";
import "./search-styles.css";

export const Search = ({ placeholder, handler }) => (
  <div>
    <input
      id="search-input"
      className="search"
      type="search"
      placeholder={placeholder}
    />
    <button className="search-btn" onClick={handler}>
      Search
    </button>
  </div>
);
