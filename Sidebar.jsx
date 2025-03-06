import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import SidebarItem from "./SidebarItem";
import { useSidebar } from "../../hooks/useSidebar";

const Sidebar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const [activeModule, setActiveModule] = useState(null);

  // Example navigation data
  const navigation = [
    {
      id: "dashboard",
      title: "Dashboard",
      path: "/",
      icon: "FiHome",
    },
    {
      id: "finance",
      title: "Finance",
      icon: "FiDollarSign",
      subModules: [
        {
          id: "transactions",
          title: "Transactions",
          path: "/finance/transactions",
        },
        { id: "reports", title: "Reports", path: "/finance/reports" },
        { id: "invoices", title: "Invoices", path: "/finance/invoices" },
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      icon: "FiPieChart",
      subModules: [
        { id: "overview", title: "Overview", path: "/analytics/overview" },
        {
          id: "performance",
          title: "Performance",
          path: "/analytics/performance",
        },
      ],
    },
  ];

  const toggleModule = (moduleId) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  return (
    <div
      className={`sidebar fixed h-screen bg-gray-900 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>
          HT Insights
        </h1>
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-800"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <nav className="mt-4">
        {navigation.map((item) => (
          <div key={item.id}>
            {item.subModules ? (
              <div>
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-800"
                  onClick={() => toggleModule(item.id)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    {isOpen && <span>{item.title}</span>}
                  </div>
                  {isOpen &&
                    (activeModule === item.id ? (
                      <FiChevronDown />
                    ) : (
                      <FiChevronRight />
                    ))}
                </div>

                {isOpen && activeModule === item.id && (
                  <div className="pl-8 bg-gray-800">
                    {item.subModules.map((subModule) => (
                      <Link
                        key={subModule.id}
                        to={subModule.path}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        {subModule.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link to={item.path}>
                <SidebarItem
                  title={item.title}
                  icon={item.icon}
                  isOpen={isOpen}
                />
              </Link>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
