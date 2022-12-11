import React, { useState } from "react";
import arrowdown from "../../../assets/icon-arrow-down.svg";
import arrowup from "../../../assets/icon-arrow-up.svg";
import "./HeaderDropdown.scss";
function HeaderDropdown({ dname, inputArray }) {
  const [activedropdown, setActiveDropdown] = useState(false);
  return (
    <div className="headerDropdownWrapper">
      <div className="headerDropdownNameWrapper" onClick={(e)=>setActiveDropdown(!activedropdown)}>
        <span>{dname}</span>
        {activedropdown ? (<img src={arrowup} alt =""/>):(<img src={arrowdown} alt="" />)}
      </div>
      {activedropdown && (
        <div className="headerDropdownAbsolute">
          <ul>
            {inputArray.map((ip) => (
              <li>
                {ip.icon && <img src={ip.icon} alt="" srcset="" />}
                <span>{ip.featurename}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderDropdown;
