import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AuthUserActionType, IAuthUser } from "../../store/reducers/types";
import ModalWindow from "../../components/modal/ModalWindow";
import AuthModal from "../../components/auth/AuthModal";
import Card from "../../components/UI/Card";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  return (
    <>
      <Card />
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

export default HomePage;
