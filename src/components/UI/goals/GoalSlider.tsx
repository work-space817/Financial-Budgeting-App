import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import Goal from "./Goal";

const items = ["item_1", "item_2", "item_3", "item_4"];

const GoalSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      const itemIndex = i >= items.length ? i - items.length : i;
      visibleItems.push(items[itemIndex]);
    }
    return visibleItems;
  };

  return (
    <div className="col">
      <div className="row">
        {getVisibleItems().map((item, index) => (
          <div className="col" key={index}>
            {" "}
          </div>
        ))}
      </div>
      <Button onClick={handleNextClick}>Наступний</Button>
    </div>
  );
};

export default GoalSlider;
