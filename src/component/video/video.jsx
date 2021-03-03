import React from "react";
import styles from "./video.module.css";

const Video = ({ video }) => {
  const { title, channelTitle } = video.snippet;
  const thumbnail = video.snippet.thumbnails.medium.url;
  return (
    <li className={styles.box}>
      <div className={styles.imgBox}>
        <img src={thumbnail} alt="image" />
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
      </div>
    </li>
  );
};

export default Video;
