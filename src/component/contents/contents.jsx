import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../header/header";
import Video from "../video/video";
import styles from "./contents.module.css";

const Contents = () => {
  const [videos, setVideos] = useState([]);
  const [hello, setHello] = useState([]);

  const history = useHistory();

  const loadData = async () => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json())
      .then((result) => setVideos(result.items))
      .catch((err) => console.log(err));
  };
  const onClickVideo = (video) => {
    history.push({
      pathname: "/detail",
      state: { video },
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <Header />
      <section className={styles.container}>
        <ul className={styles.contentContainer}>
          {videos.length === 0
            ? false
            : videos.map((video, index) => (
                <Video video={video} key={index} onClickVideo={onClickVideo} />
              ))}
        </ul>
      </section>
    </>
  );
};

export default Contents;
