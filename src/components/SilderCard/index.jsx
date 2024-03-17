import { useState, useEffect } from "react";
import axios from "axios";

function SliderCard() {
  const [dataSlider, setDataSlider] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios({
      url: "https://api.unsplash.com/photos?per_page=15",
      method: "GET",
      params: {
        client_id: "KSMpObLAVnBDfRo-HcbTxWznzPr_IlKfJhOAJ1bKZq0",
      },
    })
      .then((res) => {
        setDataSlider(res.data[count].urls.small);
        console.log(res.data[0].urls.small, "res");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [count]);

  function prevFn() {
    setCount((prev) => prev - 1);
  }

  function nextFn() {
    setCount((prev) => prev + 1);
  }
  return (
    <>
      <div>
        {console.log(dataSlider, "dataSlider")}
        <h1>Slider</h1>
        <div style={{}}>
          <div>
            <img src={dataSlider} alt="dataslider" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <button onClick={prevFn} disabled={count <= 0 ? true : false}>
              Prev
            </button>
            <h3>{count + 1}</h3>
            <button onClick={nextFn} disabled={count >= 14 ? true : false}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SliderCard;
