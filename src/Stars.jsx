import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./App.css";
function Stars() {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);

  function handleClick(index) {
    setrating(index);
  }
  function handleEnter(index) {
    sethover(index);
  }
  function handleLeave() {
    sethover(rating);
  }
  return (
    <div className="star-container">
      {[...Array(10)].map((_, i) => {
        i += 1;
        return (
          <FaStar
            className={i <= (rating || hover) ? "active" : "inactive"}
            key={i}
            size={40}
            onClick={() => handleClick(i)}
            onMouseMove={() => handleEnter(i)}
            onMouseLeave={handleLeave}
          />
        );
      })}
    </div>
  );
}

export default Stars;
