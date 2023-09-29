'use client';

import * as React from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const playRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const video = videoRef.current;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
        },
      });

      tl.from('[data-heading]', {
        y: 100,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.2,
      }).from(video, {
        scale: 0.9,
        duration: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const onMouseEnter = () => {
    gsap.to(playRef.current, {
      scale: 1,
      opacity: 1,
    });
  };

  const onMouseLeave = () => {
    gsap.to(playRef.current, {
      scale: 0,
      opacity: 0,
    });
  };

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(playRef.current, {
      x: event.clientX - 85,
      y: event.clientY - 65,
    });
  };

  return (
    <section
      id='hero'
      className='min-h-screen w-full relative pt-[20vh]'
      ref={heroRef}
    >
      <div className='text-[16.2vw] leading-[14vw] uppercase tracking-tighter'>
        <h1 data-heading>change</h1>
        <h1 data-heading>the course</h1>
      </div>

      <div
        className='h-screen w-full mt-6 relative cursor-pointer'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        <div
          ref={playRef}
          className='fixed bg-black text-white uppercase text-xl rounded-full px-[2.3vw] py-[3vw] opacity-0 scale-0 top-0 z-50'
        >
          play
        </div>
        <div ref={videoRef}>
          <video
            muted
            autoPlay
            loop
            src='videos/video.mp4'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
