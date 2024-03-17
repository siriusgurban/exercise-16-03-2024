import { useNavigate } from "react-router-dom";
import LennyOscar from "../../assets/images/LennyOscar.jpg";

function Fish() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${LennyOscar})`,
          width: 600,
          height: 800,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, .2)",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3 style={{ color: "red" }}>
            You don't eat sharks, sharks eat you!
          </h3>
        </div>
        <button
          onClick={() => {
            navigate("/vendingmachine");
          }}
        >
          Back Vending Machine
        </button>
      </div>
    </div>
  );
}

export default Fish;
