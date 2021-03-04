import React, { useEffect, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import DetailRelateVideo from "../detail_relateVideo/detail_relateVideo";
import styles from "./detail_videoList.module.css";

const DetailVideoList = ({ youtube, video, onClickVideo }) => {
  const [relatedVideo, setRelatedVideo] = useState([]);

  useDeepCompareEffect(() => {
    youtube
      .relate(video.id.kind ? video.id.videoId : video.id)
      .then((res) => setRelatedVideo(res.items))
      .catch((err) => console.log(err));
  }, [video]);
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
