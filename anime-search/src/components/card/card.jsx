import "./card-styles.css";
import { ReusableLink } from "../reusable-link/reusable-link";

export const Card = ({ anime }) => (
  <div className="card-container">
    <h2 className="anime-title">{anime.title}</h2>
    <hr className="divider"></hr>
    <img className="cover-pic" src={anime.image_url} alt="cover-pic" />
    <p className="synopsis">{anime.synopsis}</p>
    <ReusableLink
      placeholder="Learn more ..."
      handler={() => console.log("potato")}
    />
  </div>

  // TODO: Handle event
);
