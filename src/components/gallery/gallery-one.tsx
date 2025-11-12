'use client';
import React, { CSSProperties, useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';

// videos
const gallery_videos = [
  '/assets/videos/gal-1.mp4',
  '/assets/videos/gal-2.mp4',
  '/assets/videos/gal-3.mp4',
  '/assets/videos/gal-4.mp4',
  '/assets/videos/gal-5.mp4'
]

const imgStyle:CSSProperties = {height: "auto"};

// Komponen video yang dioptimasi dengan lazy loading
const OptimizedVideo = ({ src, index }: { src: string; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Auto play video when it becomes visible
    if (isVisible && videoRef.current) {
      const video = videoRef.current;
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Auto-play was prevented by browser policy
        });
      }
    }
  }, [isVisible]);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div 
      className="tp-gallery-item" 
      ref={containerRef}
      style={{ 
        margin: 0, 
        padding: 0, 
        display: 'inline-block',
        verticalAlign: 'top',
        lineHeight: 0
      }}
    >
      {isVisible ? (
        <video 
          ref={videoRef}
          src={src}
          autoPlay
          loop 
          muted 
          playsInline
          preload="auto"
          onEnded={handleVideoEnded}
          style={{
            display: 'block',
            height: '400px',
            width: 'auto',
            objectFit: 'cover',
            margin: 0,
            padding: 0
          }}
        />
      ) : (
        <div style={{ 
          height: '400px', 
          width: '300px', 
          display: 'inline-block',
          margin: 0,
          padding: 0,
          backgroundColor: 'transparent'
        }}></div>
      )}
    </div>
  );
};

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative" style={{paddingTop: '40px'}}>
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap" style={{ overflow: 'hidden', margin: 0, padding: 0 }}>
              <div className="swiper-container tp-gallery-slider-active" style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
                <Marquee 
                  className="tp-gallery-titming" 
                  speed={70} 
                  direction='left'
                  gradient={false}
                  pauseOnHover={false}
                  loop={0}
                  delay={0}
                  style={{ overflow: 'hidden', display: 'flex', gap: 0 }}
                >
                  {gallery_videos.map((g, i) => (
                    <OptimizedVideo key={`set1-${i}`} src={g} index={i} />
                  ))}
                  {gallery_videos.map((g, i) => (
                    <OptimizedVideo key={`set2-${i}`} src={g} index={i} />
                  ))}
                  {gallery_videos.map((g, i) => (
                    <OptimizedVideo key={`set3-${i}`} src={g} index={i} />
                  ))}
                  {gallery_videos.map((g, i) => (
                    <OptimizedVideo key={`set4-${i}`} src={g} index={i} />
                  ))}
                  {gallery_videos.map((g, i) => (
                    <OptimizedVideo key={`set5-${i}`} src={g} index={i} />
                  ))}
                  {gallery_videos.map((g, i) => (
                    <OptimizedVideo key={`set6-${i}`} src={g} index={i} />
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
