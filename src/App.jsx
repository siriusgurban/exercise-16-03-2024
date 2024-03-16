import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [data, setData] = useState([]);
  const [dataGit, setDataGit] = useState([]);

  async function handleSearch() {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=a407a7b3&s=${count}`
    );
    const data = await res.json();

    console.log(data.Search, "data");
    setData(data.Search);
  }

  useEffect(() => {
    axios({
      url: "https://api.github.com/users",
      method: "GET",
    })
      .then((res) => {
        setDataGit(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <input
        type="text"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
      <button onClick={handleSearch}>Search</button>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 + "px" }}>
        {data.map((item, index) => (
          <div style={{ border: 1 + "px solid white" }} key={index}>
            <h2>{item.Title}</h2>
            <p>{item.Year}</p>
            <img src={item.Poster} alt={item} />
          </div>
        ))}
      </div>

      <hr />

      <div>
        {console.log(dataGit, "dataGit")}
        <h1>Git Hub Users</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 + "px" }}>
          {dataGit?.data?.map((item, index) => (
            <div style={{ border: 1 + "px solid white" }} key={index}>
              <h2>{item.login}</h2>
              <p>{item.type}</p>
              <img src={item.avatar_url} alt={item} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
