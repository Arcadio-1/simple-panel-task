import React from "react";
import { NavLink } from "../../../util/types";
import NavItem from "./NavItem";
import Divider from "../../../util/ui/Divider";
interface Props {
  topLinks: NavLink[];
  subLinks: NavLink[];
}
const NavList = ({ subLinks, topLinks }: Props) => {
  return (
    <div>
      <nav className="font-iranansans text-sm">
        <ul className="">
          {topLinks.map((link) => {
            return <NavItem key={link.id} item={link} />;
          })}
        </ul>
        <Divider className="my-3" />
        <ul>
          {subLinks.map((link) => {
            return <NavItem key={link.id} item={link} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavList;
