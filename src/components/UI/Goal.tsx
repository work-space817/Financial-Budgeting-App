import React from "react";
import GoalSVG from "../../helpers/selectorsSVG/UI/GoalSVG";

const Goal = () => {
  return (
    <>
      <div className="col-3  d-flex flex-column gap-3 rounded-5 mt-3 shadow">
        <div className="p-3">
          <h4>$550</h4>
          <span>12/20/20</span>
        </div>
        <div className="p-3 d-flex flex-column">
          <GoalSVG id="Holidays" />
          <span>Holidays</span>
        </div>
      </div>
    </>
  );
};

export default Goal;
