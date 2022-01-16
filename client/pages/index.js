import { useEffect } from "react";
import PostCard from "../components/home/PostCard";

import SideNav from "../components/home/SideNav";
import Layout from "../components/main/Layout";
import { navBar } from "../components/main/style";
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
        <div className={home_styles.content}>
          {/* reply input */}
          <div className={home_styles.content_wrapper}>
            <div className={home_styles.reply}>
              <div className={`${navBar.logo} ${navBar.profile}`}>M</div>

              <input
                type="text"
                className={home_styles.reply_input}
                placeholder="What is your question?"
              />
            </div>
            <div className={home_styles.posts}>
              {/* title */}
              <div className={home_styles.title}>
                <div className="h5">
                  <i className="fas fa-fire text-xl mr-1 text-yellow-500"></i>
                  Best answers
                </div>
              </div>

              {/* post card */}
              <PostCard styles={home_styles} />
              <PostCard styles={home_styles} />
            </div>
          </div>

          {/* quiz posts: */}
        </div>
      </div>
    </Layout>
  );
}
