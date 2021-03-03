import React, { useEffect, useState } from "react";
import Video from "../video/video";
import styles from "./contents.module.css";

const Contents = () => {
  const [videos, setVideos] = useState([]);

  const loadData = async () => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json())
      .then((result) => setVideos(result.items))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <section className={styles.container}>
      <ul>
        {videos.length === 0
          ? false
          : videos.map((video, index) => <Video video={video} key={index} />)}
      </ul>
    </section>
  );
};

export default Contents;
