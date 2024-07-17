import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const DashboardLayout = () => {

  // todo: get isOrganizer value from the database;
  const [isAdmin] = useAdmin();

  return (
    <div className="flex ">
      {/* sidebar */}
      <div className="drawer  w-1/5 lg:drawer-open mt-20">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center absolute lg:static top-0 m-10 ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn  bg-gradient-to-r from-sky-600 via-cyan-400 to-sky-700 rounded-lg  drawer-button lg:hidden"
          >
            Open Sidebar
          </label>
        </div>
        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 pt-10  space-y-2 lg:w-80 min-h-screen bg-cyan-100 text-base-content">

            {/* Sidebar content here */}
            {
              isAdmin?<>
              <li>
              <NavLink to="userManagement">User Management</NavLink>
            </li>
            <li>
            <NavLink to="systemMonitoring">System Monitoring</NavLink>
            </li>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
              </>
              :<>
              <li>
              <NavLink to="registration">Registration</NavLink>
            </li>
            <li>
            <NavLink to="transactionManagement">Transaction Management</NavLink>
            </li>
            <li>
            <NavLink to="balanceInquiry">Balance Inquiry</NavLink>
            </li>
            <li>
            <NavLink to="transactionsHistory">Transactions History</NavLink>
            </li>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
              </>
            }
          </ul>
        </div>
      </div>
                    {/* content */}
        <div className="flex-1 bg-blue-100 mt-20 w-full mx-auto border">
            <Outlet></Outlet>
        </div>
    </div>
  );
};

export default DashboardLayout;