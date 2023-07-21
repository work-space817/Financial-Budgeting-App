import React, { FC } from "react";
import GoalSVG from "../../../helpers/selectorsSVG/UI/GoalSVG";

interface IGoal {
  cash: string;
  date: string;
  title: string;
  id: string;
}

const Goal: FC<IGoal> = ({ cash, date, title, id }) => {
  return (
    <div className="col-3  d-flex flex-column gap-3 rounded-5 shadow">
      <div className="p-3">
        <h4>{cash}</h4>
        <span>{date}</span>
      </div>
      <div className="p-3 d-flex flex-column">
        {/* <GoalSVG id="Holidays" /> */}
        <GoalSVG id="Holidays" />
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Goal;
