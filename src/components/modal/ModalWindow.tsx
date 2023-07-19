import { FC, useRef } from "react";
import { Modal } from "bootstrap";
import React from "react";

interface IModalProps {
  children: React.ReactNode;
  title: string;
}

const ModalWindow: FC<IModalProps> = ({ children, title }) => {
  const modalRef = useRef(null);
  const showModal = () => {
    const modal = modalRef.current;
    if (modal != null) {
      const bsModal = new Modal(modal, {});
      bsModal.show();
    }
  };
  return (
    <>
      <button className="btn btn-danger" onClick={showModal}>
        Delete
      </button>
      <div className="modal fade" tabIndex={-1} ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalWindow;
