"use client";
import { useState, useEffect } from 'react';

export const useScrollVisibility = (targetId) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5  
      }
    );

    const timeout = setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        observer.observe(target);
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [targetId]);

  return isVisible;
};



