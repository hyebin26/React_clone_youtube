import React from "react";
import styles from "./detail_relateVideo.module.css";

const DetailRelateVideo = ({ video, onClickVideo }) => {
  const { title, channelTitle } = video.snippet;
  const thumbnail = video.snippet.thumbnails.medium.url;
  const clickVideo = () => {
    onClickVideo(video);
  };
  return (
    <li className={styles.box} onClick={clickVideo}>
      <div className={styles.imgBox}>
        <img src={thumbnail} alt="thumbnail img" />
      </div>
      <div className={styles.textBox}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.chaTitle}>{channelTitle}</p>
      </div>
    </li>
  );
};

export default DetailRelateVideo;
