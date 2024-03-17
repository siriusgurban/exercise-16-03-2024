import { useState, useEffect } from "react";
import axios from "axios";

function GithubCard() {
  const [dataGit, setDataGit] = useState([]);

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
      <div>
        <h1>Git Hub Users</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 + "px" }}>
          {dataGit?.data?.map((item, index) => (
            <div style={{ border: 1 + "px solid white" }} key={index}>
              <h2>{item.login}</h2>
              <p>{item.type}</p>
              <img src={item.avatar_url} alt={item} width={150} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default GithubCard;
