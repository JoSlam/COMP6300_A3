
import "./card-styles.css";

export const Card = ({ anime }) => {
  return (
    <a className="card-container" href={anime.url} target="_blank">
      <h2 className="anime-title">{anime.title}</h2>
      <hr className="divider"></hr>
      <img className="cover-pic" src={anime.image_url} alt="cover-pic" />
      <p className="synopsis">{anime.synopsis}</p>
    </a>
  );
};
