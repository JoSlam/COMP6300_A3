import "./card-styles.css";
import { ReusableLink } from "../reusable-link/reusable-link";

export const Card = ({ anime, clickHandler }) => (
  <div className="card-container" onClick={clickHandler}>
    <h2 className="anime-title">{anime.title}</h2>
    <hr className="divider"></hr>
    <img className="cover-pic" src={anime.image_url} alt="cover-pic" />
    <p className="synopsis">{anime.synopsis}</p>

    <ReusableLink placeholder="Click to learn more..." />
  </div>
);
