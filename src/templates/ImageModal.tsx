import React, { useState } from "react";
import { navigate, PageRenderer, Link } from "gatsby";
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
    position: "relative",
    inset: "auto",
    maxWidth: "960px",
    height: "-webkit-fill-available",
    boxSizing: "content-box",
    margin: "32px auto",
    padding: "2rem",
    border: 0,
  },
};

const ImageModal = ({ pageContext, location }: any) => {
  let prevPath: string;
  console.log("location", location);
  
  if (!location.state) {
    prevPath = "/houses-huts";
  } else {
    prevPath = location.state.prevPath;
  }
  
  const [modalOpen, setModalOpen] = useState(true);
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate(prevPath));
  };
  return (
    <>
      <PageRenderer
        key={prevPath}
        location={{ pathname: prevPath } as any}
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <div id="GalleryId" className="h-full flex justify-center items-center">
          <Pagination
            closeToGalleryModalRoute={`${prevPath}`}
          />
          <Link 
            to={`${prevPath}`}
            draggable={false}
            aria-label="Previous page"
          >
            <GatsbyImage
              image={pageContext.imageData}
              alt={pageContext.name}
              className="h-[85vh]"
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
