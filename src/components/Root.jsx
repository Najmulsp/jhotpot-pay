import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default Root;