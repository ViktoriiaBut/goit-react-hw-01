import React from "react";
import styles from "./Profile.module.css";

const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={styles.card}>
    <div className={styles.cardProfile}>
    <img src={image} alt="User avatar" className={styles.avatar} />
    <p className={styles.userName}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
     </div>

     <ul className={styles.stats}>
      <li>
        <span className={styles.item}>Followers</span>
        <span className={styles.total}>{stats.followers}</span>
      </li>
      <li>
      <span className={styles.item}>Views</span>
      <span className={styles.total}>{stats.views}</span>
      </li>
      <li>
      <span className={styles.item}>Likes</span>
      <span className={styles.total}>{stats.likes}</span>
      </li>
     </ul>

    </div>
  );
};

export default Profile;