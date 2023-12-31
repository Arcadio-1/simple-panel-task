import React from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import SidebarModal from "../aside/SidebarModal";

const Header = () => {
  return (
    <header className="flex flex-col w-full bg-yellow-200">
      <div className="flex justify-between">
        <Logo />
        <SidebarModal />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
