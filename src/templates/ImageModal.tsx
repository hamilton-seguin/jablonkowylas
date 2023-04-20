import React, { useState } from "react";
import Modal from "react-modal";
import { navigate, PageRenderer, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

Modal.setAppElement(`#___gatsby`);

const ImageModal = ({ pageContext }: any) => {
  const [modalOpen, setModalOpen] = useState(true);
  const modalCloseTimeout = 0;
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate("/houses-huts"), modalCloseTimeout);
  };
  return (
    <div id="Gallery">
      <PageRenderer
        key={"/houses-huts/"}
        location={{ pathname: "/houses-huts/" } as any}
      />
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        className=""
        contentLabel="Modal"
        closeTimeoutMS={modalCloseTimeout}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <div id="ModalId">
          <Link to="/houses-huts/gallery" aria-label="close modal">
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
    </div>
  );
};

export default ImageModal;
