"use client";

import { useEffect, useState } from "react";

const VideoLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader ${isLoading ? "show" : "hide"} z-50`}>
      {/* Your video element */}
      <video src="/videos/intro.mp4" autoPlay muted loop />
    </div>
  );
};

export default VideoLoader;
