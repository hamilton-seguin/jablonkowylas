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
  const [modalOpen, setModalOpen] = useState(true);
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate("/houses-huts"));
  };
  return (
    <>
      <PageRenderer
        key={"/houses-huts/"}
        location={{ pathname: "/houses-huts/" } as any}
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <div id="ModalId">
          <Pagination
            toGalleryModal
            toGalleryModalRoute={`${location.state.prevPath}`}
          />
          <Link
            to={`${location.state.prevPath}`}
            draggable={false}
            aria-label="Previous page"
          >
            <GatsbyImage
              image={pageContext.imageData}
              alt={pageContext.name}
              className="h-full w-full flex m-auto"
              imgClassName=""
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
