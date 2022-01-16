import React from "react";
import { navBar } from "../main/style";

const PostCard = ({ styles }) => {
  return (
    <div className={styles.postcard}>
      {/* brief description */}
      <p className={styles.postcard_description}>
        Asked on Adonis js by Eric Pekmah
      </p>

      {/* title */}
      <h4 className={styles.postcard_title}>When was Adonis js created?</h4>

      {/* user */}
      <div className={styles.postcard_user}>
        {/* icon  */}
        <div className={`${navBar.logo} ${styles.postcard_user_profile}`}>
          M
        </div>
        <div className={styles.postcard_user_details}>
          {/* firstName */}
          <span>Eric</span>
          {/* time posted */}
          <span>Posted 2 days ago</span>
        </div>
      </div>

      {/* content */}
      <p className={styles.postcard_content} style={{ height: "100px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quo
        architecto vero excepturi illum autem numquam fugit in, modi, est sed
        harum vitae. Voluptates autem laborum magni minima sint! Iusto.
      </p>

      {/* postcard footer */}
      <div className={styles.postcard_footer}>
        <div className={styles.postcard_footer_replies}>11 replies</div>

        <button className={styles.postcard_footer_button}>
          reply &nbsp;
          <i className="fas fa-comment-dots"></i>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
