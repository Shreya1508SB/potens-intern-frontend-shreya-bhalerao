import { FaHome, FaTasks, FaExclamationTriangle, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-6 sticky top-0">

      <h1 className="text-2xl font-bold mb-10">
        OPS Dashboard
      </h1>

      <nav className="space-y-5">

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
          <FaHome />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
          <FaTasks />
          <span>Today's Actions</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
          <FaExclamationTriangle />
          <span>Anomalies</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400 transition">
          <FaCog />
          <span>Settings</span>
        </div>

      </nav>

    </div>
  );
}

export default Sidebar;