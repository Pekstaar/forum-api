import React from "react";
import { navBar } from "./style";

const Navbar = () => {
  return (
    <div className={navBar.main}>
      <div className={navBar.container}>
        {/* logo */}
        <div className={navBar.logo}>Q</div>
        {/* search-bar &&  navlist */}
        <div className={navBar.nav}>
          {/* search */}
          <div className={navBar.nav_search}>
            <i className={navBar.nav_search_icon}></i>

            <input
              type="text"
              className={navBar.nav_search_input}
              placeholder="Search . . ."
            />
          </div>

          {/* list */}
          <ul className={navBar.list}>
            <li>Home</li>

            <li>Tags</li>

            <li>Notifications</li>
          </ul>
        </div>
        {/* profile */}
        <div className={`${navBar.logo} ${navBar.profile}`}>M</div>
      </div>
    </div>
  );
};

export default Navbar;
