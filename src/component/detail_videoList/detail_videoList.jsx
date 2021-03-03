import React, { useEffect, useState } from "react";
import DetailRelateVideo from "../detail_relateVideo/detail_relateVideo";
import styles from "./detail_videoList.module.css";

const DetailVideoList = ({ video, onClickVideo }) => {
  const [relatedVideo, setRelatedVideo] = useState([]);
  const loadRelatedVideo = async () => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${video.id}&type=video&maxResults=10&key=${process.env.REACT_APP_KEY}`
    ) //
      .then((res) => res.json())
      .then((result) => setRelatedVideo(result.items))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadRelatedVideo();
  }, []);
  return (
    <ul className={styles.box}>
      {relatedVideo.map((video, index) => (
        <DetailRelateVideo
          video={video}
          onClickVideo={onClickVideo}
          key={index}
        />
      ))}
    </ul>
  );
};

export default DetailVideoList;
