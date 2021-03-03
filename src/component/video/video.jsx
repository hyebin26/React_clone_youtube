import React from "react";

const Video = ({ video }) => {
  console.log(video);
  const { title, channelTitle, description } = video.snippet;
  const { thumbnail } = video.snippet.thumbnails.medium.url;
  return <h1>{title}</h1>;
};

export default Video;
