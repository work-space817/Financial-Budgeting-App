import React from "react";
import Goal from "./Goal";

const GoalLits = () => {
  return (
    <>
      {<Goal cash={"500"} date={"19.07.2023"} />}
      {<Goal cash={"1000"} date={"29.05.2023"} />}
    </>
  );
};

export default GoalLits;
