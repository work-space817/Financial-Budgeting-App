import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IAuthUser, IHeaderTitle } from "../../../store/reducers/types";
import HeaderSVG from "../../../helpers/selectorsSVG/HeaderSVG";
import CurrentPage from "../../../helpers/CurrentPage";

const DefaultHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth, user } = useSelector((store: any) => store.auth as IAuthUser);
  return (
    <>
      <header>
        <nav className="navbar border">
          <div className="container-fluid border">
            <p className="m-0 fs-1 "></p>
            <Link to="/settings" className="text-dark">
              {/* {user?.name} */}
              example@gmail.com
              <HeaderSVG id="defaultUserIcon"></HeaderSVG>
            </Link>
          </div>
          <p className="text-black-50 fs-5 ps-2">
            Get summary of your weekly online transactions here.
          </p>
        </nav>
      </header>
    </>
  );
};

export default DefaultHeader;
