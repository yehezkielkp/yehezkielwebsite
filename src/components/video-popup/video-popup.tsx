'use client';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

export default function VideoPopup({ isOpen, onClose, videoSrc }: VideoPopupProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div 
      ref={overlayRef}
      className="video-popup-overlay"
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
    >
      <div 
        className="video-popup-content"
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: '100%',
          aspectRatio: '16/9'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-40px',
            right: '0',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 10000,
            padding: '5px 10px'
          }}
          aria-label="Close video"
        >
          ✕
        </button>
        <video
          ref={videoRef}
          src={videoSrc}
          controls
          autoPlay
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
          onEnded={onClose}
        />
      </div>
    </div>,
    document.body
  );
}
