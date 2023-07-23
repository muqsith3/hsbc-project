import React from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function StoryVideo() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const videoElement = document.getElementById("video");
    if (videoElement) {
      videoElement.onplaying = () => setIsVideoPlaying(true);
      videoElement.onpause = () => setIsVideoPlaying(false);
    }
  }, []);

  const handleVideoClick = () => {
    const videoElement = document.getElementById("video");
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    }
  };

  return (
    <>
      <div className="mx-auto w-full">
        <div className="max-w-7xl h-[750px] w-full relative mx-auto">
          <video
            id="video"
            src="https://assets.mixkit.co/videos/preview/mixkit-serving-a-sparkling-cappuccino-in-a-cup-41859-large.mp4"
            loop
            muted></video>
          {!isVideoPlaying && (
            <div
              className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center cursor-pointer"
              onClick={handleVideoClick}>
              <div className="text-white text-2xl tracking-widest">
                SEE OUR STORY
              </div>
              <AiFillPlayCircle className="text-6xl text-white" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
