import HomeIcon from "../../assets/icons/nav/Home.svg";
import Calender from "../../assets/icons/nav/calender.svg";
import Analyze from "../../assets/icons/nav/analyze.svg";
import Atp from "../../assets/icons/nav/atp.svg";
import Users from "../../assets/icons/nav/users.svg";
import Exercises from "../../assets/icons/nav/exercises.svg";
import Strategy from "../../assets/icons/nav/Strategy.svg";
import Settings from "../../assets/icons/nav/Settings.svg";
import Bell from "../../assets/icons/nav/bell.svg";
import NavList from "./components/NavList";
import { NavLink } from "../../util/types";
const Sidebar = () => {
  const top_inks: NavLink[] = [
    { id: "0", label: "خانه", icon: HomeIcon, url: "/" },
    { id: "1", label: "تقویم", icon: Calender, url: "/" },
    { id: "2", label: "آنالیز", icon: Analyze, url: "/" },
    { id: "3", label: "ATP", icon: Atp, url: "/" },
    { id: "4", label: "مدیریت ورزشکاران", icon: Users, url: "/" },
  ];
  const sub_inks: NavLink[] = [
    { id: "0", label: "مخزن تمرین ها", icon: Exercises, url: "/" },
    { id: "1", label: "استراتژی", icon: Strategy, url: "/" },
    { id: "2", label: "تنظیمات", icon: Settings, url: "/" },
    { id: "3", label: "آخرین فعالیت ها", icon: Bell, url: "/" },
  ];
  return (
    <aside>
      <NavList topLinks={top_inks} subLinks={sub_inks} />
    </aside>
  );
};

export default Sidebar;
