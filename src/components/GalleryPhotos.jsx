import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

const imageBasePath = "../img/photos/jpeg_images/"; // Base path for image URLs

export const GalleryPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const importPhotos = () => {
      const imageUrls = [];
      for (let i = 1; i <= 33; i++) {
        // Generate image URLs for 33 images
        imageUrls.push(`${imageBasePath}image${i}.jpg`); // Adjust extension if needed
      }
      setPhotos(imageUrls); // Set the array of image URLs
    };

    importPhotos();
  }, []);

  return (
    <>
      <div className="columns-2 md:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-4">
        {photos.map((imageUrl, index) => (
          <img
            key={index} // Add a unique key for each image
            className="w-full mb-4 break-inside-avoid"
            src={imageUrl}
            alt={`Image ${index + 1}`} // Use index for alt text
          />
        ))}
      </div>
      <div className="my-4 text-center">
        <Link
          to={-1}
          className="flex w-3/4 items-center justify-center mx-auto border font-semibold border-auburn bg-oldrose bg-opacity-50 hover:bg-opacity-70 text-whitesmoke py-2 px-8"
        >
          Volver a la pagina principal
        </Link>
      </div>
      <Footer />
    </>
  );
};
