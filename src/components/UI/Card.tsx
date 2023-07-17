import React from "react";
import CardSVG from "../../helpers/selectorsSVG/UI/CardSVG";

const Card = () => {
  return (
    <>
      <div className="col-6 border rounded-5 bg-light-subtle ">
        <div className="p-3">
          <h4 className="text-dark mb-3 ms-2">Cards</h4>
          <div>
            <div className="col-8 border-end d-flex align-items-center gap-2">
              <CardSVG id="ArrowLeft" />
              <div className="card rounded-5 h-50 text-white">
                <div className="p-4">
                  <h5 className="mb-0">cloudcash</h5>

                  <p style={{ fontSize: "10px" }} className="text-white-50">
                    RPEMIUM ACCOUNT
                  </p>

                  <p className="py-3 fs-5 ">5789 **** **** 2857</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">
                      <span style={{ fontSize: "10px" }}>Card holder</span>
                      <span>Name UserName</span>
                    </div>
                    <div className="d-flex flex-column">
                      <span style={{ fontSize: "10px" }}>Expire date</span>
                      <span>06/23</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardSVG id="ArrowRight" />
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
