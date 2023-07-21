import { Modal } from "bootstrap";
import ModalWindow from "../modal/ModalWindow";

const OperationMenu = () => {
  return (
    <div className="d-flex align-items-center justify-content-around gap-5  mb-3">
      <div className="d-flex gap-3 align-items-center">
        <h4 className="m-0">Goals</h4>
        <ModalWindow
          children={undefined}
          title={"New income"}
          buttonText={"New"}
        ></ModalWindow>
      </div>
      <div className="d-flex gap-3">
        <button className="bg-custom rounded-4 px-2 py-2">
          <span className=" text-white">New income</span>
        </button>
        <button className="bg-custom rounded-4 px-2 py-2">
          <span className=" text-white">New outcome</span>
        </button>
      </div>
    </div>
  );
};

export default OperationMenu;
