import React, { FC, MouseEvent, useState } from "react";
import { Link, HeadFC, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";
import { Camera } from "lucide-react";
import { Pagination } from "../components/ui/Pagination";
import { Draggable } from "../components/Draggable";

const Gallery: FC<PageProps> = ({ data }: any) => {
  console.log(data);

  const [currentImageId, setCurrentImageId] = useState(0);
  const [selectedImageName, setSelectedImageName] = useState(
    data.allFile.edges[currentImageId].node.name
  );
  const getCurrentImageId = data.allFile.edges[currentImageId].node;
  const imageNumber = data.allFile.edges.length;

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

  return (
    <Layout>
      <main>
        <div className="mx-4 my-8">
          <div
            id="GalleryId"
            className="flex flex-col h-full justify-end relative"
            // ref={directionalArrows}
          >
            <Pagination
              withArrows
              prevImage={prevImage}
              nextImage={nextImage}
            />
            <div className="m-auto">
              {/* <Link
                to={`/houses-huts/gallery/${selectedImageName}`}
                state={{ prevPath: location.pathname }}
              > */}
                <GatsbyImage
                  image={getImage(getCurrentImageId)!}
                  alt={getCurrentImageId.name}
                  className="h-[50vh] md:h-[65vh]"
                  imgStyle={{ objectFit: "contain" }}
                  draggable={false}
                />
              {/* </Link> */}
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
        </div>
        <div className="min-w-20 w-[15vw] max-w-[135px] mx-auto my-16">
          <Camera className="fill-grass7 stroke-grass5 w-full h-full mx-auto" />
        </div>
      </main>
    </Layout>
  );
};

export default Gallery;
export const Head: HeadFC = () => <title>Gallery</title>;

export const query = graphql`
  query GalleryRenderQuery {
    allFile(
      sort: { name: ASC }
      filter: {
        extension: { regex: "/(jpg)|(jpeg)/" }
        sourceInstanceName: { eq: "gallery" }
      }
    ) {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            gatsbyImageData(formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
