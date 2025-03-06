import React from "react";

const SidebarItem = ({ title, icon, isOpen }) => {
  return (
    <div className="flex items-center px-4 py-3 hover:bg-gray-800 cursor-pointer">
      <span className="mr-3">{icon}</span>
      {isOpen && <span>{title}</span>}
    </div>
  );
};

export default SidebarItem;
