import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthUserActionType, IAuthUser } from "../../../store/reducers/types";

const DefaultHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuth } = useSelector((store: any) => store.auth as IAuthUser);
  return (
    <>
      <header>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand">Navbar</a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default DefaultHeader;
