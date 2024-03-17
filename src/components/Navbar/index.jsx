import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav>
      {/* <Link className=""  to="/"> Home</Link> */}

      <ul style={{ cursor: "pointer" }}>
        <li
          onClick={() => navigate("/")}
          style={{
            color: `${location.pathname == "/" ? "yellow" : ""}`,
          }}
        >
          MovieCard
        </li>
        <li
          onClick={() => navigate("/githubcard")}
          style={{
            color: `${location.pathname == "/githubcard" ? "yellow" : ""}`,
          }}
        >
          GithubCard
        </li>
        <li
          onClick={() => navigate("/sildercard")}
          style={{
            color: `${location.pathname == "/sildercard" ? "yellow" : ""}`,
          }}
        >
          SilderCard
        </li>
        <li
          onClick={() => navigate("/vendingmachine")}
          style={{
            color: `${location.pathname == "/vendingmachine" ? "yellow" : ""}`,
          }}
        >
          Vending Machine
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
