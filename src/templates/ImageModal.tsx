import React, { useEffect, useState } from "react";
import { navigate, Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Modal from "react-modal";

import { Pagination } from "../components/ui/Pagination";

Modal.setAppElement(`#___gatsby`);

const modalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(17, 28, 24, 0.7)",
    height: "100%",
  },
  content: {
    backgroundColor: "#fbfefb",
    inset: 0,
    height: "100vh",
    boxSizing: "content-box",
    padding: 0,
    border: 0,
  },
};

const ImageModal = ({ pageContext, location }: any) => {
  let scrollPosRef = 0;
  let scrollPosRefX = 0;

  if (location.state !== null) {
    if (location.state.scrollPosRef !== undefined) {
      scrollPosRef = location.state.scrollPosRef;
    }
  }
  if (location.state !== null) {
    if (location.state.scrollPosRef !== undefined) {
      scrollPosRefX = location.state.scrollPosRefX;
    }
  }

  console.log("scrollPosRefX in ImageModal", scrollPosRefX);

  let prevPath: string;

  if (!location.state) {
    prevPath = "/houses-huts";
  } else {
    prevPath = location.state.prevPath;
  }

  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !modalOpen) return;
    modalOpen &&
      document.getElementById("langSwitcher")?.classList.add("hidden");
    return () => {
      document.getElementById("langSwitcher")?.classList.remove("hidden");
    };
  }, []);

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate(prevPath));
  };
  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        bodyOpenClassName={"overflow-hidden mr-[15px]"}
        contentLabel="Modal"
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <div id="GalleryId" className="h-full flex justify-center items-center">
          <Link
            to={`${prevPath}`}
            draggable={false}
            aria-label="Previous page"
            state={{ scrollPosRef, scrollPosRefX }}
          >
            <GatsbyImage
              image={pageContext.imageData}
              alt={pageContext.name}
              className="h-[100vh]"
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
          <Pagination
            closeToGalleryModalRoute={`${prevPath}`}
            scrollPosRef={scrollPosRef}
          />
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
