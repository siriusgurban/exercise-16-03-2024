import { useNavigate } from "react-router-dom";
import pepsi from "../../assets/images/pepsi-water-drop.jpg";
import pepsican from "../../assets/images/Pepsican.png";
import style from "./Soda.module.css";

function Soda() {
  const navigate = useNavigate();
  return (
    <div style={{ width: 100 + "%" }}>
      {/* <div
        style={{
          backgroundImage: `url(${pepsi})`,
          height: "100vh",
          width: 1000 + "px",
          objectFit: "cover",
        }}
      ></div> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img className={style.myDIV} src={pepsican} alt="pepsi" />
        </div>
        <div>
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, .2)",
              margin: "10px",
              padding: "10px",
            }}
          >
            We need zero sugar!
          </div>
          <button
            onClick={() => {
              navigate("/vendingmachine");
            }}
          >
            Back Vending Machine
          </button>
        </div>
        <div>
          <img className={style.myDIV} src={pepsican} alt="pepsi" />
        </div>
      </div>
    </div>
  );
}

export default Soda;
