"use client";
import React, { useRef, useState, useEffect } from "react";

interface DragScrollHorizontalProps {
  children: React.ReactNode;
  className?: string;
}

const DragScrollHorizontal: React.FC<DragScrollHorizontalProps> = ({ children, className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [moved, setMoved] = useState(false);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setMoved(false);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) setMoved(true);
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    const handleClick = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const links = ref.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, [moved]);

  return (
    <div
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className={`cursor-grab overflow-x-auto whitespace-nowrap select-none ${className}`}
      style={{ userSelect: "none" }}
    >
      {children}
    </div>
  );
};

export default DragScrollHorizontal;
