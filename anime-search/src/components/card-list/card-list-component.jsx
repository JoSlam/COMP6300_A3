import { Card } from "../card/card-component";

export const CardList = props => (
  <div className="card-list">
    {props.anime.map((anime) => (
      <Card key={anime.mal_id} anime={anime} />
    ))}
  </div>
);
