export const Card = (anime) => (
  <div className="cardContainer">
    {
      // console.log(Object.keys(anime))
    }

    <h2 className="anime-title">{anime.title}</h2>
    <img
      src={anime.image_url}
      alt="display-image"
      height="180px"
      width="180px"
    />
    <p className="synopsis">{anime.synopsis}</p>
  </div>
);
