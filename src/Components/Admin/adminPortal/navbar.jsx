import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { sideBarMenuItems } from "../../../constants/staticData";

import { userAuthContext } from "../../../Contexts/UserAuthContext";

const Navbar = () => {
  const { logOut } = useContext(userAuthContext);
  const { pathname } = useLocation();

  return (
    <nav>
      <div class="logo-name">
        <div class="logo-image">
          <img src="/images/Logo.png" alt="" />
        </div>
        <span class="logo_name">Gujarat Police</span>
      </div>

      <div class="menu-items">
        <ul class="nav-links">
          {sideBarMenuItems.map(({ id, icon, label, path }) => (
            <li key={id}>
              <Link
                to={path}
                onClick={async () => path === "#" && (await logOut())}
              >
                <i
                  className={`${icon} ${
                    pathname === path ? "active-menu" : ""
                  }`}
                />
                <span
                  className={`link-name ${
                    pathname === path ? "active-menu" : ""
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
