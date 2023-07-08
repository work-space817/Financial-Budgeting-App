import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthUserActionType, IAuthUser } from "../../store/reducers/types";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);
  return (
    <div>
      {isAuth ? (
        <>
          <button>
            <Link
              to="/auth"
              onClick={(e) => {
                // e.preventDefault();
                localStorage.removeItem("token");
                dispatch({ type: AuthUserActionType.LOGOUT_USER });
                // navigate("/auth");
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
    </div>
  );
};

export default HomePage;
