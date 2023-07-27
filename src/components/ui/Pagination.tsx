import { Link } from "gatsby";
import React, { MouseEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { useKeyPress } from "../../hooks/useKeyPress";

import { Button } from "./Button";

interface PaginationProps {
  prevImage?: (e: MouseEvent) => void;
  nextImage?: (e: MouseEvent) => void;
  withArrows?: boolean;
  closeToGalleryModal?: boolean;
  closeToGalleryModalRoute?: string;
  scrollPosRef?: number;
}

export const Pagination = ({
  prevImage,
  nextImage,
  withArrows,
  closeToGalleryModalRoute,
  scrollPosRef,
}: PaginationProps) => {
  return (
    <>
      {closeToGalleryModalRoute && scrollPosRef ? (
        <Link
          to={closeToGalleryModalRoute!}
          draggable={false}
          aria-label="Previous page"
          state={{ scrollPosRef }}
        >
          <Button className="absolute top-8 right-4 md:right-12 px-2.5 md:px-4 !rounded-xl">
            <X className="w-5 h-5 md:w-8 md:h-8" />
          </Button>
        </Link>
      ) : closeToGalleryModalRoute ? (
        <Link
          to={closeToGalleryModalRoute!}
          draggable={false}
          aria-label="Previous page"
        >
          <Button className="absolute top-8 right-4 md:right-12 px-2.5 md:px-4 !rounded-xl">
            <X className="w-5 h-5 md:w-8 md:h-8" />
          </Button>
        </Link>
      ) : null}
      {withArrows && (
        <>
          {/* Left */}
          <Link
            to="/"
            draggable={false}
            aria-label="Previous image"
            id="Previous"
            onClick={prevImage}
          >
            <Button className="group absolute top-[30vh] h-fit m-auto !rounded-xl left-4 md:left-12 px-2.5 md:px-4">
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-active:-translate-x-1 transition-all" />
            </Button>
          </Link>
          {/* Right */}
          <Link
            to="/"
            draggable={false}
            aria-label="Next image"
            onClick={nextImage}
          >
            <Button className="group absolute top-[30vh] h-fit m-auto !rounded-xl right-4 md:right-12 px-2.5 md:px-4">
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-active:translate-x-1 transition-all" />
            </Button>
          </Link>
        </>
      )}
    </>
  );
};
