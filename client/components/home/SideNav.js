import React from "react";
import { sidenav } from "./styles";

const SideNav = () => {
  return (
    <div>
      {/* title */}
      <div className="py-4">
        <h5 className={sidenav.title}>Feeds</h5>

        <hr className={sidenav.hr} />
      </div>

      {/* list */}
      <ul className={sidenav.list}>
        <li className={sidenav.list_item}>All</li>

        <li className={sidenav.list_item}>Adonis js</li>

        <li className={sidenav.list_item}>React js</li>

        <li className={sidenav.list_item}>Next js</li>

        <li className={sidenav.list_item}>Vue js</li>

        <li className={sidenav.list_item}>Svtell</li>

        <li className={sidenav.list_item}>Angular js</li>

        <li className={sidenav.list_item}>Node js</li>
      </ul>
    </div>
  );
};

export default SideNav;
