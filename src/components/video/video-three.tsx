'use client';
import React, { useRef, useEffect, useState } from "react";

export default function VideoThree() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            // User masuk ke section - add reveal animation
            setIsVisible(true);
            wrap.classList.remove('fade-out');
            wrap.classList.add('fade-in');
            
            // Delay untuk magical smooth animation
            setTimeout(async () => {
              try {
                video.muted = false;
                video.volume = 0.5; // Set volume 50% untuk lebih subtle
                await video.play();
              } catch (err) {
                // Fallback: play muted if browser blocks
                video.muted = true;
                await video.play();
              }
            }, 400);
          } else {
            // User keluar dari section - add hide animation
            setIsVisible(false);
            wrap.classList.remove('fade-in');
            wrap.classList.add('fade-out');
            
            // Smooth fade out audio
            const fadeAudio = setInterval(() => {
              if (video.volume > 0.05) {
                video.volume = Math.max(0, video.volume - 0.05);
              } else {
                clearInterval(fadeAudio);
                video.pause();
                video.muted = true;
                video.volume = 0.5; // Reset volume for next time
              }
            }, 40);
          }
        });
      },
      {
        threshold: 0.3, // Trigger lebih awal untuk seamless transition
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="tp-video-3-area">
      <div ref={wrapRef} className="tp-video-3-wrap">
        <video
          ref={videoRef}
          className="play-video"
          loop={true}
          muted={true}
          playsInline={true}
          preload="auto"
        >
          <source
            src="/assets/videos/oura-promos.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
