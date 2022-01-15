import { useEffect } from "react";

import SideNav from "../components/home/SideNav";
import Layout from "../components/main/Layout";
import { home_styles } from "../styles/Home";

export default function Home() {
  return (
    <Layout>
      <div className={home_styles.main}>
        {/* side nav */}
        <div className={home_styles.side_nav}>
          <SideNav />
        </div>

        {/* body content */}
        <div className={home_styles.content}>body content</div>
      </div>
    </Layout>
  );
}
