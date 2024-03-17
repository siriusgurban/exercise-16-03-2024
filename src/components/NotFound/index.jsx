import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div>Nothing Found</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </>
  );
}

export default NotFound;
