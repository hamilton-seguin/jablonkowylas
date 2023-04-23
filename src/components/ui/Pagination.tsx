import { Link } from "gatsby";
import React, { MouseEvent } from "react";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface PaginationProps {
  arrowsFn?: (e: MouseEvent) => void;
  withArrows?: boolean;
  toGalleryModal?: boolean;
  toGalleryModalRoute?: string
}

export const Pagination = ({
  arrowsFn,
  withArrows,
  toGalleryModal,
  toGalleryModalRoute
}: PaginationProps) => {
  return (
    <>
      {toGalleryModal ? (
          <Link
          to={toGalleryModalRoute!}
          draggable={false}
          aria-label="Previous page"
        >
          <Button className="absolute top-8 z-50 right-4 md:right-12 px-2.5 md:px-4 !rounded-xl">
            <X className="w-5 h-5 md:w-8 md:h-8" />
          </Button>
        </Link>
      ) : (
        <Link to="/houses-huts/" draggable={false} aria-label="Previous page">
          <Button className="absolute top-8 z-50 right-4 md:right-12 px-2.5 md:px-4 !rounded-xl">
            <X className="w-5 h-5 md:w-8 md:h-8" />
          </Button>
        </Link>
      )}
      {withArrows && (
        <>
          <Link
            to="/"
            draggable={false}
            aria-label="Previous image"
            onClick={arrowsFn}
          >
            <Button className="group absolute top-[30vh] h-fit m-auto !rounded-xl z-50 left-4 md:left-12 px-2.5 md:px-4">
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-active:-translate-x-1 transition-all" />
            </Button>
          </Link>
          <Link
            to="/"
            draggable={false}
            aria-label="Next image"
            onClick={arrowsFn}
          >
            <Button className="group absolute top-[30vh] h-fit m-auto !rounded-xl z-50 right-4 md:right-12 px-2.5 md:px-4">
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-active:translate-x-1 transition-all" />
            </Button>
          </Link>
        </>
      )}
    </>
  );
};
