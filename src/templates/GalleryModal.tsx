import React, { MouseEvent, useEffect, useState } from "react";
import { graphql, navigate, PageRenderer, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Modal from "react-modal";

import { Draggable } from "../components/Draggable";
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
    margin: "2rem auto",
    padding: "0",
    border: 0,
  },
};

const GalleryModal = ({ data, location }: any) => {
  const building = typeof window === "undefined";
  const [, setIndexPageData] = useState(!building && window.indexPageData);
  useEffect(() => {
    window.setIndexPageData = () => {
      setIndexPageData(window.indexPageData);
    };
  }, []);

  const [modalOpen, setModalOpen] = useState(true);
  const [selectedImage, setSelectedImage] = useState("houses1");
  const [currentImageId, setCurrentImageId] = useState(0);

  const getCurrentImageId = data.allFile.edges[currentImageId].node;
  const imageNumber = data.allFile.edges.length;

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    let newCurrentImageId = currentImageId - 1;
    if (newCurrentImageId < 0) newCurrentImageId = imageNumber - 1;
    setCurrentImageId(newCurrentImageId);
    setSelectedImage(data.allFile.edges[newCurrentImageId].node.name);
  };

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
        <div id="ModalId" className="flex flex-col h-full justify-end relative">
          <Pagination withArrows arrowsFn={handleClick}/>
          <div className="m-auto">
            <Link
              to={`/houses-huts/gallery/${selectedImage}`}
              state={{ prevPath: location.pathname }}
            >
              <GatsbyImage
                image={getImage(getCurrentImageId)!}
                alt={getCurrentImageId.name}
                className="h-[50vh] md:h-[65vh]"
                imgStyle={{ objectFit: "contain" }}
                draggable={false}
              />
            </Link>
          </div>
          <Draggable className="bg-grass3 pt-4 pb-3 md:pt-10 md:pb-8">
            <div className="flex snap-x overflow-x-auto scroll-smooth gap-2 items-center h-[18vh] overflow-y-hidden">
              {data.allFile.edges.map((image: any, i: number) => (
                <div
                  key={image.node.name}
                  className="flex snap-start shrink-0 max-w-fit"
                >
                  <Link
                    to="/"
                    aria-label="Display image"
                    style={{ cursor: "inherit" }}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentImageId(i);
                      setSelectedImage(image.node.name);
                    }}
                  >
                    <GatsbyImage
                      image={getImage(image.node)!}
                      alt={image.node.name}
                      className="w-[27vw] lg:w-[21vw] 2xl:w-[14vw] 3xl:w-[10vw] h-[24vw] lg:h-[18vw] 2xl:h-[11vw] 3xl:h-[8vw]"
                      draggable={false}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </Draggable>
        </div>
      </Modal>
      /
    </>
  );
};

export default GalleryModal;

export const query = graphql`
  query GalleryRenderQuery($folderName: String!) {
    allFile(
      sort: { name: ASC }
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        sourceInstanceName: { eq: $folderName }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            # fluid(maxWidth: 960) {
            #   srcSet
            #   ...GatsbyImageSharpFluid
            # }
            gatsbyImageData(formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
