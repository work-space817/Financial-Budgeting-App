import React, { ChangeEvent, useState } from "react";
import { IGoalOperation } from "./types";
import { useNavigate } from "react-router-dom";
import http from "../../api/http";
import InputComponent from "../common/input/Input";

const NewGoalOperation = () => {
  const init: IGoalOperation = {
    name: "",
    text: "",
    image: "",
    dateTimePublish: "",
  };

  const [data, setData] = useState<IGoalOperation>(init);
  const navigator = useNavigate();

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    console.log("Ми відправляємо на сервер", data);
    try {
      const result = await http.post("api/goals/add", data);
      console.log("result: ", result);
    } catch (err: any) {
      console.log("Bad request", err);
    }
  };
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmitHandler} className="col">
      {/* {!!error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )} */}
      <InputComponent
        label="Enter your title"
        field="name"
        value={data.name}
        onChange={onChangeHandler}
      />
      <InputComponent
        label="Enter goals' cost"
        field="text"
        value={data.text}
        onChange={onChangeHandler}
      />
      <InputComponent
        label="Expire date (dd/mm/yyyy)"
        field="dateTimePublish"
        value={data.dateTimePublish}
        onChange={onChangeHandler}
      />

      <button type="submit" className="btn btn-primary">
        Вхід
      </button>
    </form>
  );
};

export default NewGoalOperation;
