import {
  FaHome,
  FaMoneyCheckAlt,
  FaChartLine,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Sidebar = ({ setActiveSection }) => {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  return (

    <>

      {/* Mobile Topbar */}

      <div className="md:hidden fixed top-0 left-0 w-full flex justify-between items-center px-4 py-5 bg-slate-900 text-white z-50">

        <h1 className="text-2xl font-bold text-cyan-400">
          SmartBank
        </h1>

        <button onClick={() => setOpen(true)}>

          <FaBars size={24} />

        </button>

      </div>

      {/* Mobile Sidebar */}

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-slate-900 text-white p-6 z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex justify-between items-center mb-10">

          

          <button onClick={() => setOpen(false)}>

            <FaTimes size={24} />

          </button>

        </div>

        <div className="space-y-8 text-lg">

          <div
            onClick={() => {
              navigate("/dashboard");
              setActiveSection("dashboard");
              setOpen(false);
            }}
            className="flex items-center gap-4 cursor-pointer hover:text-cyan-400 transition duration-300"
          >

            <FaHome />

            <p>Dashboard</p>

          </div>

          <button
            onClick={() => {
              setActiveSection("transactions");
              setOpen(false);
            }}
            className="flex items-center gap-4 text-lg hover:text-cyan-400 transition duration-300"
          >

            <FaMoneyCheckAlt />

            Transactions

          </button>

          <button
            onClick={() => {
              setActiveSection("analytics");
              setOpen(false);
            }}
            className="flex items-center gap-4 text-lg hover:text-cyan-400 transition duration-300"
          >

            <FaChartLine />

            Analytics

          </button>

          <button
            onClick={() => {
              setActiveSection("settings");
              setOpen(false);
            }}
            className="flex items-center gap-4 text-lg hover:text-cyan-400 transition duration-300"
          >

            <FaCog />

            Settings

          </button>

        </div>

        <button
          onClick={handleLogout}
          className="mt-12 bg-red-500 hover:bg-red-400 transition px-6 py-3 rounded-2xl w-full"
        >

          Logout

        </button>

      </div>

      {/* Desktop Sidebar */}

      <div className="hidden md:block w-72 min-h-screen bg-slate-900 border-r border-white/10 text-white p-6">

       

        <div className="space-y-8 text-lg">

          <div
            onClick={() => {
              navigate("/dashboard");
              setActiveSection("dashboard");
            }}
            className="flex items-center gap-4 cursor-pointer hover:text-cyan-400 transition duration-300"
          >

            <FaHome />

            <p>Dashboard</p>

          </div>

          <button
            onClick={() => setActiveSection("transactions")}
            className="flex items-center gap-4 text-lg hover:text-cyan-400 transition duration-300"
          >

            <FaMoneyCheckAlt />

            Transactions

          </button>

          <button
            onClick={() => setActiveSection("analytics")}
            className="flex items-center gap-4 text-lg hover:text-cyan-400 transition duration-300"
          >

            <FaChartLine />

            Analytics

          </button>

          <button
            onClick={() => setActiveSection("settings")}
            className="flex items-center gap-4 text-lg hover:text-cyan-400 transition duration-300"
          >

            <FaCog />

            Settings

          </button>

        </div>

        <button
          onClick={handleLogout}
          className="mt-12 bg-red-500 hover:bg-red-400 transition px-6 py-3 rounded-2xl w-full"
        >

          Logout

        </button>

      </div>

    </>

  );
};

export default Sidebar;