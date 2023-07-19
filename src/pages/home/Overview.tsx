import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AuthUserActionType, IAuthUser } from "../../store/reducers/types";
import ModalWindow from "../../components/modal/ModalWindow";
import AuthModal from "../../components/auth/AuthModal";
import Card from "../../components/UI/Card";
import TransactionHistory from "../../components/UI/TransactionHistory";
import GoalSlider from "../../components/UI/goals/GoalSlider";

const Overview: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return (
    <>
      <div className="d-flex mb-5 gap-3">
        <Card />
        <div className="col-6">
          <h4>Goals</h4>
          <ModalWindow title="welcome">
            <AuthModal />
          </ModalWindow>
          {/* <Goal /> */}
        </div>
      </div>
      <TransactionHistory />
      <GoalSlider />
      {/* <div>
        <ModalWindow>
          <AuthModal />
        </ModalWindow>
        {isAuth ? (
          <>
            <button>
              <Link
                to="/auth"
                onClick={(e) => {
                  localStorage.removeItem("token");
                  dispatch({ type: AuthUserActionType.LOGOUT_USER });
                }}
              >
                Вихід
              </Link>
            </button>
          </>
        ) : (
          <>
            <button>
              <Link to="/auth">Вхід</Link>
            </button>
            <button>
              <Link to="/auth">Реєстрація</Link>
            </button>
          </>
        )}
      </div> */}
    </>
  );
};

export default Overview;
