import { useLocation, useNavigate } from "react-router-dom";
import vendingmachine from "../../assets/images/vendingmachine.jpg";
function VendingMachine() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname, "loca");

  return (
    <div>
      <h1>Vending Machine</h1>

      <div
        style={{
          backgroundImage: `url(${vendingmachine})`,
          width: "100%",
          maxWidth: 1200 + "px",
          height: "100vh",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, .8)",
              width: "25%",
              padding: "10px",
              margin: "10px",
            }}
          >
            <p>Hello, I am vending machine. What would you like to get?</p>
          </div>
          <div
            style={{
              position: "relative",
              backgroundColor: "rgba(0, 0, 0, .8)",
              padding: "10px",
              margin: "10px",
            }}
          >
            <ul style={{ cursor: "pointer" }}>
              <li onClick={() => navigate("/vendingmachine/soda")}>Soda</li>
              <li onClick={() => navigate("/vendingmachine/chips")}>Chips</li>
              <li onClick={() => navigate("/vendingmachine/fish")}>Fish</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendingMachine;
