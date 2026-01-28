import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-30 bg-blue-50">
        <Outlet />
      </main>
      {/* footer */}
    </div>
  );
};

export default Layout;
