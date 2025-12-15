"use client";
import { useState, useEffect, useRef } from "react";

export function VideoLazy({ containerProps, videoProps }) {
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} {...containerProps}>
      {visible ? (
        <video {...videoProps}>
          <source src={videoProps.url} type={videoProps.type} />
        </video>
      ) : (
        <></>
      )}
    </div>
  );
}
