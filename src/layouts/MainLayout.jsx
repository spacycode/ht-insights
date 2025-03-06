import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import { SidebarProvider } from "../hooks/useSidebar";
import { useSidebar } from "../hooks/useSidebar";

const MainContent = ({ children }) => {
  const { isOpen } = useSidebar();

  return (
    <main
      className={`flex-1 p-6 transition-all duration-300 ${
        isOpen ? "ml-64" : "ml-20"
      }`}
    >
      {children}
    </main>
  );
};

const MainLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        <Sidebar />
        <MainContent>{children}</MainContent>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
