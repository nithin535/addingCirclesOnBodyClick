import { useState } from "react";
import "./styles.css";

export default function App() {
  const [points, setPoints] = useState([]);
  const capture = (e) => {
    const { clientX, clientY } = e;
    setPoints([
      ...points,
      {
        x: clientX,
        y: clientY
      }
    ]);
    console.log(e);
  };

  return (
    <div className="App" onClick={capture}>
      {points.map((point, i) => (
        <div
          key={i}
          className="points"
          style={{
            left: point.x - 5 + "px",
            top: point.y - 5 + "px",
            border: " 1px solid black",
            width: "10px",
            height: "10px",
            borderRadius: "50%"
          }}
        ></div>
      ))}
    </div>
  );
}
