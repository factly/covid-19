import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Carousel, { Modal, ModalGateway } from "react-images";

function DailyData({data}){
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const photos = data.allDriveNode.edges.map(edge => {
        if(!edge.node.localFile.childImageSharp.fluid) return false;
       return {
           ...edge.node.localFile.childImageSharp.fluid,
           width: edge.node.localFile.childImageSharp.fluid.presentationWidth,
           height: edge.node.localFile.childImageSharp.fluid.presentationHeight
       };
    })
    return <Layout>
        <div  className="stories fadeInUp"
            style={{animationDelay: `${0.5 + 1 * 0.1}s`}}>
            <div className="heading">
                <h1>BROWSING: Daily Data</h1>
            </div>
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
            {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
                <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                }))}
                />
            </Modal>
            ) : null}
        </ModalGateway>
        </div>
    </Layout>;
}

export default DailyData;

export const query = graphql`
    query {
      allDriveNode(sort: {fields: createdTime, order: DESC}) {
        edges {
          node {
            id
            localFile {
              childImageSharp{
                fluid(quality: 100){
                  srcSet
                  src
                  sizes
                  presentationWidth
                  presentationHeight
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
`;