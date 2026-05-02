import { Outlet, useNavigation } from "react-router-dom";
import NaveBar from "../pages/NaveBar";
import Footer from "../pages/Footer";
import SideBar from "../pages/SideBar";

const Root = () => {

  const navigation  = useNavigation();
  const isNavigation = Boolean(navigation.location)
  return (
    <div className="min-h-screen bg-base-100">
      {/* Navbar */}
      <NaveBar />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex gap-6 px-4 py-6">

        {/* Sidebar */}
        <div className="w-72 sticky top-24 h-fit">
          <SideBar />
        </div>

        {
            isNavigation && <span className="loading loading-infinity loading-xl"></span>
        }


        {/* Main Content */}
        <div className="flex-1 bg-base-100 rounded-2xl shadow-md p-6 border">
          <Outlet />
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Root;