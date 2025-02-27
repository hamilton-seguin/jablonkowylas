import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { graphql, navigate } from "gatsby";
import { Link } from "gatsby-plugin-react-i18next";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Modal from "react-modal";

import { useKeyPress } from "../hooks/useKeyPress";

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


  const scrollPosRef = useRef(0);
  const scrollPosRefX = useRef(0);
  if (
    !location.state ||
    !location.state.scrollPosRef ||
    !location.state.scrollPosRefX
  ) {
    scrollPosRef.current = 0;
    scrollPosRefX.current = 0;
  } else {
    scrollPosRef.current = location.state.scrollPosRef;
    scrollPosRefX.current = location.state.scrollPosRefX;
  }

  const changeXRef = (value: number) => {
    scrollPosRefX.current = value;
  };
  useEffect(() => {
    // if (typeof window === "undefined" || typeof document === "undefined") {
    //   return;
    // }
    let savedScrollRef = 0;
    if (location.state.scrollPosRef !== undefined) {
      savedScrollRef = location.state.scrollPosRef.current;
      window.scrollTo(0, savedScrollRef);
    }

    let savedScrollRefX = 0;
    if (location.state.scrollPosRefX !== undefined && document.getElementById("draggable")) {
      savedScrollRefX = location.state.scrollPosRefX.current;
      
      document.getElementById("draggable")!.children[0].scrollTo({
        top: 0,
        left: savedScrollRefX,
        behavior: "instant",
      });
    }

    const onScroll = () => {
      scrollPosRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  // const building = typeof window === "undefined";
  // const [, setIndexPageData] = useState(!building && window.indexPageData);
  // useEffect(() => {
  //   window.setIndexPageData = () => {
  //     setIndexPageData(window.indexPageData);
  //   };
  // }, []);

  const [modalOpen, setModalOpen] = useState(true);
  const [currentImageId, setCurrentImageId] = useState(0);

  const getCurrentImageId = data.allFile.edges[currentImageId].node;
  const [selectedImageName, setSelectedImageName] = useState(
    getCurrentImageId.name
  );
  const imageNumber = data.allFile.edges.length;

  //use localStorage to save currentImageId to return to the current immage after opening and closing Imagemodal
  useEffect(() => {
    const localStorageId = window.localStorage.getItem("localStorageId");
    if (!localStorageId) return;
    if (JSON.parse(localStorageId) > imageNumber - 1) {
      setCurrentImageId(0);
      return;
    }
    setCurrentImageId(JSON.parse(localStorageId));

    setSelectedImageName(
      data.allFile.edges[JSON.parse(localStorageId)].node.name
    );
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !modalOpen) return;
    modalOpen &&
      document.getElementById("langSwitcher")?.classList.add("hidden");
    return () => {
      document.getElementById("langSwitcher")?.classList.remove("hidden");
    };
  }, []);

  useEffect(() => {
    if (!modalOpen) {
      window.localStorage.removeItem("localStorageId");
    }
  }, [modalOpen]);

  useEffect(() => {
    window.localStorage.setItem("localStorageId", currentImageId.toString());
  }, [currentImageId]);

  // const directionalArrows = createRef<any>();
  // const leftPress = useKeyPress("ArrowLeft", directionalArrows);
  // const rightPress = useKeyPress("ArrowRight", directionalArrows);
  // console.log(leftPress, rightPress);

  // PAGINATION
  const prevImage = (e: MouseEvent) => {
    e.preventDefault();
    let newCurrentImageId = currentImageId - 1;
    if (newCurrentImageId < 0) newCurrentImageId = imageNumber - 1;
    setCurrentImageId(newCurrentImageId);
    setSelectedImageName(data.allFile.edges[newCurrentImageId].node.name);
  };
  const nextImage = (e: MouseEvent) => {
    e.preventDefault();
    let newCurrentImageId = currentImageId + 1;
    if (newCurrentImageId > imageNumber - 1) newCurrentImageId = 0;
    setCurrentImageId(newCurrentImageId);
    setSelectedImageName(data.allFile.edges[newCurrentImageId].node.name);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => navigate("/houses-huts"));
  };

  return (
    <>
      {/* <PageRenderer
        key={"/houses-huts/"}
        location={
          { pathname: `${lang === "en" ? "/en" : ""}/houses-huts/` } as any
        }
      /> */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Modal"
        bodyOpenClassName={"overflow-hidden mr-[15px]"}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
      >
        <div
          id="GalleryId"
          className="flex flex-col h-full justify-end relative"
          // ref={directionalArrows}
        >
          <div className="m-auto">
            <Link
              to={`/gallery/${selectedImageName}`}
              state={{ prevPath: location.pathname, scrollPosRef, scrollPosRefX }}
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

          <Pagination
            withArrows
            prevImage={prevImage}
            nextImage={nextImage}
            closeToGalleryModalRoute={"/houses-huts/"}
            scrollPosRef={scrollPosRef.current}
          />
          <Draggable
            className="bg-grass3 pt-4 pb-3 md:pt-10 md:pb-8"
            scrollPosRefX={changeXRef}
          >
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
                      setSelectedImageName(image.node.name);
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
    </>
  );
};

export default GalleryModal;

export const query = graphql`
  query GalleryRenderQuery($folderName: String!, $language: String!) {
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
            gatsbyImageData(formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
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
