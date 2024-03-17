import { useState } from "react";
import chips from "../../assets/images/lays-logo-1.svg";
import { useNavigate } from "react-router-dom";

function Chips() {
  const [count, setCount] = useState(0);
  const [imga, setImga] = useState([]);

  const navigate = useNavigate();

  function handleClick() {
    setCount((prev) => prev + 1);
    const rndL = Math.floor(Math.random() * 1000);
    const rndT = Math.floor(Math.random() * 400);
    setImga([...imga, { rndL: rndL, rndT: rndT }]);
    console.log(imga, "imga");
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          width: "1200px",
          height: "400px",
          backgroundColor: "purple",

          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, .2)",
              margin: "10px",
              padding: "10px",
            }}
          >
            {count}
          </div>
          <button onClick={handleClick}>Nyam nyam</button>
          <button
            onClick={() => {
              navigate("/vendingmachine");
            }}
          >
            Back Vending Machine
          </button>
        </div>
        <div>
          {console.log(count, "count")}
          {console.log(imga, "imga")}

          {imga?.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  position: "absolute",
                  left: item.rndL,
                  top: item.rndT,
                }}
              >
                <img src={chips} width={50} alt="chips" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Chips;
