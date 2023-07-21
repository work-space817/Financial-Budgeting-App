import React, { useState } from "react";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";
import Goal from "./Goal";
import ArrowsSVG from "../../../helpers/selectorsSVG/UI/ArrowsSVG";

const items = ["item_1", "item_2", "item_3", "item_4"];

const GoalSlider: React.FC = () => {
  const [goals, setGoals] = useState([
    { cash: "$ 500", date: "21/07/2023", title: "something" },
    { cash: "$ 1000", date: "13/06/2023", title: "Games" },
    { cash: "$ 750", date: "07/10/2023", title: "food" },
    { cash: "$ 7350", date: "27/10/2023", title: "Entertainment" },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreviousGoal = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  const handleNextGoal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % goals.length);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      const itemIndex = i >= goals.length ? i - goals.length : i;

      visibleItems.push(goals[itemIndex]);
    }
    return visibleItems;
  };

  return (
    <div className="col ">
      <div className="d-flex justify-content-evenly align-items-center">
        <button
          onClick={handlePreviousGoal}
          className="bg-transparent border-0"
        >
          <ArrowsSVG id="ArrowLeft" />
        </button>

        {getVisibleItems().map((goal, index) => (
          <Goal
            key={index}
            cash={goal.cash}
            date={goal.date}
            title={goal.title}
            id={""}
          />
        ))}
        <button onClick={handleNextGoal} className="bg-transparent border-0">
          <ArrowsSVG id="ArrowRight" />
        </button>
      </div>
    </div>
  );
};

export default GoalSlider;
