import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../shadcn_components/ui/sheet";
import Sidebar from "./Sidebar";
import Menuicon from "../../util/ui/icons/util/Menu_icon";

const SidebarModal = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-red-600">
          <Menuicon className="w-5 h-5" />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white rounded-xl">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default SidebarModal;
