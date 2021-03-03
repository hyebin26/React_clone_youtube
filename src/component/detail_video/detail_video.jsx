import React from "react";
import styles from "./detail_video.module.css";

const DetailVideo = ({ video }) => {
  const { title, description, publishedAt, channelTitle } = video.snippet;
  return (
    <div className={styles.box}>
      <div className={styles.videoContainer}>
        <iframe
          id="ytplayer"
          type="text/html"
          width="580"
          height="360"
          src={`https://www.youtube.com/embed/${
            video.id.kind ? video.id.videoId : video.id
          }`}
        ></iframe>
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.publishedAt}>{publishedAt}</p>
        <p className={styles.chaTitle}>{channelTitle}</p>
        <p className={styles.des}>{description}</p>
      </div>
    </div>
  );
};

export default DetailVideo;
