import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../header/header";
import Video from "../video/video";
import styles from "./contents.module.css";

const Contents = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const location = useLocation();
  const history = useHistory();

  const onClickVideo = (video) => {
    history.push({
      pathname: "/react_clone_youtube/detail",
      state: { video },
    });
  };

  useEffect(() => {
    if (location.state) {
      setVideos(location.state.video.items);
    } else {
      youtube.mostPopular().then((res) => setVideos(res));
    }
  }, [location.state]);
  return (
    <>
      <Header youtube={youtube} />
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
