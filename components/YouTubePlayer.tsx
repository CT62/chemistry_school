'use client'
import YouTube from "react-youtube";

interface Props{
  videoId: string;
}

export default function({ videoId }:Props){
  // Set up event handlers
  const onReady = (event) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
    />
  );
};
