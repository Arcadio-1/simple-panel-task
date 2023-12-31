import React from "react";
import Settingicon from "../../../util/ui/icons/util/Setting_icon";
import Calendericon from "../../../util/ui/icons/util/Calender_icon";
import EventsMenu from "./EventsMenu";

const Navbar = () => {
  const navList = [
    { id: "0", label: "تنظیمات", icon: <Settingicon className="h-6 w-6" /> },
    { id: "1", label: "تقویم", icon: <Calendericon className="h-6 w-6" /> },
  ];
  return (
    <div className="bg-red-100 w-full flex justify-end items-center px-4">
      <ul className="flex gap-2">
        {navList.map((item) => {
          return <li key={item.id}>{item.icon}</li>;
        })}
      </ul>
      <EventsMenu />
    </div>
  );
};

export default Navbar;
