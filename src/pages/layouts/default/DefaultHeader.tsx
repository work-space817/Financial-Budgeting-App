import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IAuthUser } from "../../../store/reducers/types";
import HeaderSVG from "../../../helpers/selectorsSVG/HeaderSVG";

const DefaultHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPage = location.pathname;

  let splitCurrentPage =
    currentPage.slice(1).charAt(0).toUpperCase() + currentPage.slice(2);
  if (splitCurrentPage == "") {
    splitCurrentPage = "Overview";
  }

  const { isAuth, user } = useSelector((store: any) => store.auth as IAuthUser);
  return (
    <>
      <header>
        <nav className="navbar ">
          <div className="container-fluid">
            <p className="m-0 fs-1 ">{splitCurrentPage}</p>
            <Link to="/settings" className="text-danger d-none d-md-inline">
              {/* {user?.name} */}
              example@gmail.com
              <HeaderSVG id="defaultUserIcon"></HeaderSVG>
            </Link>
          </div>
          <p className="text-black-50 fs-5 ps-2 d-none d-sm-inline">
            Get summary of your weekly online transactions here.
          </p>
        </nav>
      </header>
    </>
  );
};

export default DefaultHeader;
