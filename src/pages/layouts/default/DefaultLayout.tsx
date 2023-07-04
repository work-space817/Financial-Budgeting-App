import { Outlet } from "react-router-dom";
import DefaultSidebar from "./DefaultSIdebar";

const DefaultLayout = () => {
  return (
    <>
      {/* <DefaultHeader /> */}
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <DefaultSidebar />

          <div className="col py-3">
            {/* Сюди підставляється компонет один із групи комеонетів, які відносяться до даного Layout */}
            {<Outlet />}
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
