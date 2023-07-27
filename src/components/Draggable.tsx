import React, { useState, ReactNode, useRef, MouseEvent } from "react";

type DraggableProps = {
  className?: string;
  children: ReactNode;
  scrollPosRefX?: (value: number) => void;
};

export const Draggable = ({
  className,
  children,
  scrollPosRefX,
}: DraggableProps) => {
  const ourRef = useRef<HTMLDivElement>(null);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseCoords = useRef({ startX: 0, scrollLeft: 0 });
  console.log("mouseCoords", mouseCoords.current);

  if (scrollPosRefX) {
    scrollPosRefX(mouseCoords.current.scrollLeft);
  }

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    if (!ourRef.current) return;
    const slider = ourRef.current.children[0] as HTMLDivElement;
    const sliderHand = ourRef.current as HTMLDivElement;
    sliderHand.classList.add("cursor-grabbing");
    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseCoords.current = { startX, scrollLeft };
    setIsMouseDown(true);
  };
  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    const sliderHand = ourRef.current as HTMLDivElement;
    sliderHand.classList.remove("cursor-grabbing");
  };
  const handleDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const slider = ourRef.current.children[0] as HTMLDivElement;
    const sliderHand = ourRef.current as HTMLDivElement;
    sliderHand.classList.add("cursor-grabbing");
    const x = e.pageX - slider.offsetLeft;
    const walkX = (x - mouseCoords.current.startX) * 1.5;
    slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
  };
  const handleDragOut = (e: MouseEvent<HTMLDivElement>) => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    const sliderHand = ourRef.current as HTMLDivElement;
    sliderHand.classList.remove("cursor-grabbing");
  };

  return (
    <div
      id="draggable"
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
      onMouseLeave={handleDragOut}
      className={`cursor-grab min-w-0 flex items-start justify-center ${className}`}
    >
      {children}
    </div>
  );
};
