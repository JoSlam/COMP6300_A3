import { React } from "react";
import "./search-styles.css";

export const Search = ({ placeholder, handler }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handler}
  />
);
