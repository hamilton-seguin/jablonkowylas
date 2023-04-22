import React, { useEffect, useState } from "react";
import { graphql, navigate, PageRenderer, Link } from "gatsby";
import Modal from "react-modal";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Draggable } from "../components/Draggable";
import { Button } from "../components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const GalleryModal = ({ data }: any) => {
  const building = typeof window === "undefined";
  const [, setIndexPageData] = useState(
    !building && window.indexPageData
  );
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

  const modalCloseTimeout = 100;
  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate("/houses-huts"), modalCloseTimeout);
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
        closeTimeoutMS={modalCloseTimeout}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <div id="ModalId" className="flex flex-col h-full justify-end relative">
          <Link
            to="/"
            draggable={false}
            aria-label="Previous image"
            onClick={(e) => {
              e.preventDefault();
              let newCurrentImageId = currentImageId - 1;
              if (newCurrentImageId < 0) newCurrentImageId = imageNumber - 1;
              setCurrentImageId(newCurrentImageId);
              setSelectedImage(data.allFile.edges[newCurrentImageId].node.name);
            }}
          >
            <Button className="group absolute top-[24vh] md:top-[30vh] h-fit m-auto !rounded-xl z-50 left-4 md:left-12 px-2.5 md:px-4">
              <ChevronLeft className="w-5 h-5 md:w-8 md:h-8 group-active:-translate-x-1 transition-all" />
            </Button>
          </Link>
          <Link
            to="/"
            draggable={false}
            aria-label="Next image"
            onClick={(e) => {
              e.preventDefault();
              let newCurrentImageId = currentImageId + 1;
              if (newCurrentImageId > imageNumber - 1) newCurrentImageId = 0;
              setCurrentImageId(newCurrentImageId);
              setSelectedImage(data.allFile.edges[newCurrentImageId].node.name);
            }}
          >
            <Button className="group absolute top-[24vh] md:top-[30vh] h-fit m-auto !rounded-xl z-50 right-4 md:right-12 px-2.5 md:px-4">
              <ChevronRight className="w-5 h-5 md:w-8 md:h-8 group-active:translate-x-1 transition-all" />
            </Button>
          </Link>
          <div className="m-auto">
            <Link to={`/houses-huts/gallery/${selectedImage}`}>
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
                      console.log("i:", i);

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
  query GalleryRenderQuery {
    allFile(
      filter: { extension: { regex: "/(jpg)|(jpeg)/" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          name
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
