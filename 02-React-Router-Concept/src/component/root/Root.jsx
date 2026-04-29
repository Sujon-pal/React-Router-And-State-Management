
import { Outlet } from "react-router";
import NaveBar from "../pages/NaveBar";

const Root = () => {
  return (
    <div>
      <NaveBar />
      <Outlet></Outlet>
    </div>
  );
};

export default Root;