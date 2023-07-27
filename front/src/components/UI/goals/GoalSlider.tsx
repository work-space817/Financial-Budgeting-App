import React, { useEffect, useState } from "react";
import ArrowsSVG from "../../../helpers/selectorsSVG/UI/ArrowsSVG";
import { IGoalOperation } from "../../operations/types";
import http from "../../../api/http";
import { IGoal } from "./types";
import Goal from "./Goal";

const GoalSlider: React.FC = () => {
  const [goalsList, setGoalsList] = useState<IGoalOperation[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    console.log("Working useEffect");
    // http.get<IGoal[]>(`api/goals/list`).then((resp) => {
    http.get<IGoal[]>("api/categories/list").then((resp) => {
      console.log("Server responce", resp.data);
      // const { data } = resp;
      // setGoalsList(data);
      // getVisibleItems();
    });
  }, []);

  const handlePreviousGoal = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + goalsList.length) % goalsList.length
    );
  };
  const handleNextGoal = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % goalsList.length);
  };

  function getVisibleItems() {
    const visibleItems = [];
    const itemsToShow = Math.min(goalsList.length, 3);

    for (let i = 0; i < itemsToShow; i++) {
      const itemIndex =
        currentIndex + i >= goalsList.length
          ? currentIndex + i - goalsList.length
          : currentIndex + i;
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
