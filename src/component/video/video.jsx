import React from "react";
import styles from "./video.module.css";

const Video = ({ video, onClickVideo }) => {
  const { title, channelTitle } = video.snippet;
  const thumbnail = video.snippet.thumbnails.medium.url;
  const clickVideo = () => {
    onClickVideo(video);
  };

  return (
    <li className={styles.box} onClick={clickVideo}>
      <div className={styles.imgBox}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{title}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
      </div>
    </li>
  );
};

export default Video;
