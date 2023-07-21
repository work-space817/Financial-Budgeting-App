import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AuthUserActionType, IAuthUser } from "../../store/reducers/types";
import ModalWindow from "../../components/modal/ModalWindow";
import AuthModal from "../../components/auth/AuthModal";
import Card from "../../components/UI/Card";
import TransactionHistory from "../../components/UI/TransactionHistory";
import GoalSlider from "../../components/UI/goals/GoalSlider";
import OperationMenu from "../../components/UI/OperationMenu";

const Overview: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);
  const date = new Date().getHours();
  console.log("date: ", typeof date);

  return (
    <>
      <div className="d-flex mb-5 gap-3">
        <Card />
        <div className="col-6 ">
          <OperationMenu />

          {/* <ModalWindow title="welcome" buttonText={"AuthModal"}>
            <AuthModal />
          </ModalWindow> */}
          {/* <Goal /> */}
          <GoalSlider />
        </div>
      </div>
      <TransactionHistory />

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
