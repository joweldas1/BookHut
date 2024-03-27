import { Outlet } from "react-router-dom";
import Navbar from "../../Component/Navbar";

const MainPage = () => {
    return (
        <div className=" max-w-7xl  mx-auto">
            <div className="mx-3 md:mx-0">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainPage;