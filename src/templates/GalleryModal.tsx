import React, { useEffect, useState } from "react";
import { graphql, navigate, PageRenderer, Link } from "gatsby";
import Modal from "react-modal";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

Modal.setAppElement(`#___gatsby`);

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "960px",
    margin: "32px auto",
    padding: 0,
    border: 0,
  },
};

const GalleryModal = ({ data, pageContext }: any) => {
  // const building = typeof window === "undefined"
  // const [indexPageData, setIndexPageData] = useState(
  //   (!building) && window.indexPageData
  // )
  // useEffect(() => {
  //   window.setIndexPageData = () => {
  //     setIndexPageData(window.indexPageData)
  //   }
  // }, [])

  const [modalOpen, setModalOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState("houses1");
  const [currentImage, setCurrentImage] = useState(0);
  const getCurrentImage = data.allFile.edges[currentImage].node;
  // console.log("current Image", currentImage);

  const modalCloseTimeout = 100;
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate("/houses-huts"), modalCloseTimeout);
  };
  const handleClick = (e: any) => {
    e.preventDefault();
    setModalOpen(false);
    setTimeout(() => navigate(`/houses-huts/gallery/${selectedImage}`), modalCloseTimeout);}

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
        <div id="ModalId" className="flex flex-col m-auto">
          <Link to={`/houses-huts/gallery/${selectedImage}`}>
            <GatsbyImage
              image={getImage(getCurrentImage)!}
              alt={getCurrentImage.name}
              className="h-[70vh]"
              imgStyle={{ objectFit: "contain" }}
            />
          </Link>
          <div className="flex overflow-scroll h-[20%]">
            {data.allFile.edges.map((image: any, i: number) => (
              <div key={image.node.name}>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImage(i);
                    setSelectedImage(image.node.name);
                  }}
                >
                  <GatsbyImage
                    image={getImage(image.node)!}
                    alt={image.node.name}
                    className=""
                    imgStyle={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryModal;

export const query = graphql`
  query GalleryRenderQuery {
    allFile(
      filter: { extension: { regex: "/(jpg)|(jpeg)/" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(formats: NO_CHANGE)
          }
        }
      }
    }
  }
`;
