import React, { useState } from "react";
import "./Header.scss";
import HeaderDropdown from "./HeaderDropdown/HeaderDropdown";
import todoicon from "../../assets/icon-todo.svg";
import calendericon from "../../assets/icon-calendar.svg";
import remaindericon from "../../assets/icon-reminders.svg";
import planningicon from "../../assets/icon-planning.svg";
import menu from "../../assets/icon-menu.svg";
import close from '../../assets/icon-close-menu.svg'
import logo from '../../assets/logo.svg'

const featureArray = [
  {
    featurename: "Todo List",
    icon: todoicon,
  },
  {
    featurename: "Calender",
    icon: calendericon,
  },
  {
    featurename: "Remainders",
    icon: remaindericon,
  },
  {
    featurename: "Planning",
    icon: planningicon,
  },
];
const companyArray = [
  {
    featurename: "History",
  },
  {
    featurename: "Our Team",
  },
  {
    featurename: "Blog",
  },
];
function Header() {
const [hamburger,setHamburger] = useState(false);
const menuToggle = ()=>{
  setHamburger(!hamburger);
}

  return (
    <header className="header">
      <img src={logo} alt="" />
      <div className={`headerNavWrapper ` + (hamburger?`headerNavWrapperCollapsed`:``)}>
        <img src={close} alt="" className="closeIcon" onClick={menuToggle}/>
        <ul>
          <li>
            <HeaderDropdown dname="Features" inputArray={featureArray} />
          </li>
          <li>
            <HeaderDropdown dname="Company" inputArray={companyArray} />
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div>
          <button className="loginButton">Login</button>
          <button className="registerButton">Register</button>
        </div>
      </div>
      <img src={menu} alt="" srcset="" className="menuIcon" onClick={menuToggle}/>
    </header>
  );
}

export default Header;
