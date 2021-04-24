import { Card } from "../card/card";
import "./card-list.styles.css"

export const CardList = (props) => (
  <div className="card-list">
    {console.log(props)}
    {props.anime.map((anime) => (
      <Card key={anime.mal_id} anime={anime} />
    ))}
  </div>
);

// TODO: Include null checks for list
