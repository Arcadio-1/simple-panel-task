import React from "react";
import { NavLink } from "../../../util/types";
interface Props {
  item: NavLink;
}
const NavItem = ({ item }: Props) => {
  return (
    <li key={item.id} className="flex gap-2 px-2 py-2">
      <img src={item.icon} alt={item.icon} />
      <span>{item.label}</span>
    </li>
  );
};

export default NavItem;
