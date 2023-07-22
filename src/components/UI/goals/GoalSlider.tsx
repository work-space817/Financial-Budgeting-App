import React, { useEffect, useState } from "react";
import ArrowsSVG from "../../../helpers/selectorsSVG/UI/ArrowsSVG";
import { IGoalOperation } from "../../operations/types";
import http from "../../../api/http";
import { IGoal } from "./types";
import Goal from "./Goal";

const items = ["item_1", "item_2", "item_3", "item_4"];

const GoalSlider: React.FC = () => {
  const [goalsList, setGoalsList] = useState<IGoalOperation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log("Working useEffect");
    http.get<IGoal[]>(`api/goals/list`).then((resp) => {
      console.log("Server responce", resp.data);
      const { data } = resp;
      setGoalsList(data);
      getVisibleItems();
    });
  }, []);

  const handlePreviousGoal = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };
  const handleNextGoal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % goalsList.length);
  };

  function getVisibleItems() {
    const visibleItems = [];
    for (let i = currentIndex; i < currentIndex + 3; i++) {
      const itemIndex = i >= goalsList.length ? i - goalsList.length : i;
      visibleItems.push(goalsList[itemIndex]);
    }
    return visibleItems;
  }

  const goalViewList = getVisibleItems().map((goal, index) => (
    <Goal
      key={index}
      cash={goal?.name}
      date={goal?.text}
      title={goal?.dateTimePublish}
      id={""}
    />
  ));
  return (
    <div className="col ">
      <div className="d-flex justify-content-evenly align-items-center">
        <button
          onClick={handlePreviousGoal}
          className="bg-transparent border-0"
        >
          <ArrowsSVG id="ArrowLeft" />
        </button>
        {goalViewList}
        <button onClick={handleNextGoal} className="bg-transparent border-0">
          <ArrowsSVG id="ArrowRight" />
        </button>
      </div>
    </div>
  );
};

export default GoalSlider;
