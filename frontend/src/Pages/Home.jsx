import React from 'react'
import clientviewlogo from '../assets/clinetviewlogo.jpg';
import { NavLink, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const username = localStorage.getItem('username') || 'Guest';
    const isActive = (path) => location.pathname === path;
    return (
        <div className="flex bg-gray-100">
          {/* Sidebar */}
          <div className=" sticky top-0 h-screen w-64 bg-white shadow-md">
            <div className="flex flex-row p-6">
                <img className="w-7 h-auto sm:w-10" src={clientviewlogo} alt="" />
              <h1 className="p-2 text-2xl font-bold text-gray-800">Dashboard</h1>
            </div>
            <nav className="mt-10">
        <NavLink
          to="/home"
          className={`block py-2.5 px-4 rounded-lg m-1 ${
            isActive("/home") ? "bg-amber-500 text-white" : "text-gray-700"
          } hover:bg-amber-500 hover:text-white`}
        >
          Home
        </NavLink>
        <NavLink
          to="#"
          className={`block py-2.5 px-4 rounded-lg m-1 ${
            isActive("/status") ? "bg-amber-500 text-white" : "text-gray-700"
          } hover:bg-amber-500 hover:text-white`}
        >
          Status
        </NavLink>
        <NavLink
          to="#"
          className={`block py-2.5 px-4 rounded-lg m-1 ${
            isActive("/notifications") ? "bg-amber-500 text-white" : "text-gray-700"
          } hover:bg-amber-500 hover:text-white`}
        >
          Notifications
        </NavLink>
        <NavLink
          to="#"
          className={`block py-2.5 px-4 rounded-lg m-1 ${
            isActive("/settings") ? "bg-amber-500 text-white" : "text-gray-700"
          } hover:bg-amber-500 hover:text-white`}
        >
          Settings
        </NavLink>
      </nav>
          </div>
    
          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Status Section */}
            <div className="mb-6">
                <div className='flex justify-between mb-2'>
                <h2 className="text-xl font-bold text-gray-800">Status</h2>
                <button className=" py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Logout
             </button>
                </div>
                <div className="flex flex-col w-full space-y-6">
  {/* Status Card */}
  <div className="bg-white p-6 rounded-lg shadow-md w-full">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Status</h3>
    <iframe
      src="http://localhost:3000/d-solo/be3vydbc1xm9sd/client-application-monitoring?from=1731551068494&to=now&timezone=browser&orgId=1&panelId=1&__feature.dashboardSceneSolo"
      frameBorder="0"
      className="w-full h-64 rounded-lg"
    ></iframe>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md w-full">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">SSL</h3>
    <iframe
      src="http://localhost:3000/d-solo/be3vydbc1xm9sd/client-application-monitoring?from=1731979495928&to=now&timezone=browser&orgId=1&theme=light&panelId=2&__feature.dashboardSceneSolo" width="450" height="200" frameborder="0"
      frameBorder="0"
      className="w-full h-64 rounded-lg"
    ></iframe>
  </div>

</div>
</div>
    
            {/* Notifications Section */}
            <div className='mb-10'>
              <h2 className="text-xl font-bold text-gray-800">Notifications</h2>
              <div className="mt-4 space-y-4">
                {/* Notification Items */}
                <div className="bg-white p-4 rounded-lg shadow-md flex items-start">
                  {/* <span className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold mr-4">
                    1
                  </span> */}
                  <p className="text-gray-700">
                    You don't have any notifications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default Home
