'use client';
import React, { useEffect, useRef, useState } from 'react';

type IProps = {
  min: number;
  max: number;
};

export default function CounterItem({ min, max }: IProps) {
  const [count, setCount] = useState(min);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = (max - min) / steps;
          let current = min;

          const timer = setInterval(() => {
            current += increment;
            if (current >= max) {
              setCount(max);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [min, max, hasAnimated]);

  return <span ref={counterRef}>{count}</span>;
}
