import { useState } from "react";

function MovieCard() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");

  async function handleSearch() {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=a407a7b3&s=${count}`
    );
    const data = await res.json();

    console.log(data.Search, "data");
    setData(data.Search);
  }
  return (
    <>
      <h1>Movie Card</h1>
      <input
        type="text"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 + "px" }}>
        {data?.map((item, index) => (
          <div style={{ border: 1 + "px solid white" }} key={index}>
            <h2>{item.Title}</h2>
            <p>{item.Year}</p>
            <img src={item.Poster} alt={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieCard;
