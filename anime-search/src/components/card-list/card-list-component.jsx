import { Card } from "../card/card-component";

export const CardList = (props) => (
  <div className="card-list">
    {console.log(props.anime[0])}
    {props.anime.map((anime) => (
      <Card key={anime.mal_id} anime={anime} />
    ))}
  </div>
);

// TODO: Include null checks for list
