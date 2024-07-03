import React from "react";
import { Link } from "react-router-dom"; // Assuming your backLink component handles routing
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import Footer from "./Footer.jsx"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const GalleryPhotos = () => {
  const images = [image1, image2, image3];
  return (
    <>
    <div className="columns-2 md:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-4">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full mb-4 break-inside-avoid"
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
    </div>
        <div className="mt-4 text-center">
          <Link to={-1} className="text-oldrose underline">
            Volver
          </Link>
        </div>
      <Footer></Footer>
    </>
  )
}

