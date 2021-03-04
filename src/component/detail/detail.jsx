import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import DetailVideo from "../detail_video/detail_video";
import Header from "../header/header";
import styles from "./detail.module.css";
import DetailVideoList from "../detail_videoList/detail_videoList";

const Detail = ({ youtube }) => {
  const location = useLocation();
  const history = useHistory();
  const video = location.state.video;

  const onClickVideo = (video) => {
    history.push({
      pathname: "/react_clone_youtube/detail",
      state: { video: video },
    });
  };

  return (
    <section className={styles.container}>
      <Header youtube={youtube} />
      <div className={styles.detailCotaniner}>
        <DetailVideo video={video} />
        <DetailVideoList
          video={video}
          onClickVideo={onClickVideo}
          youtube={youtube}
        />
      </div>
    </section>
  );
};
export default Detail;
