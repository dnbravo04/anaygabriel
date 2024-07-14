import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import PhotoData from "../img/photos/photos.json";


export const GalleryPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const importPhotos = async () => {
      const importedPhotos = await Promise.all(
        PhotoData.map(async (photo) => {
          const src = await import(`../img/photos/${photo.src}`);
          return { id: photo.id, src: src.default };
        })
      );
      setPhotos(importedPhotos);
    };

    importPhotos();
  }, []);

  return (
    <>
      <div className="columns-2 md:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-4">
        {photos.map((photo) => (
          <img
            className="w-full mb-4 break-inside-avoid"
            src={photo.src}
            alt={`Image ${photo.id}`}
          />
        ))}
      </div>
      <div className="my-4 text-center">
        <Link to={-1} className="flex w-3/4 items-center justify-center mx-auto border font-semibold border-auburn bg-oldrose bg-opacity-50 hover:bg-opacity-70 text-whitesmoke py-2 px-8">
          Volver a la pagina principal
        </Link>
      </div>
      <Footer />
    </>
  );
};
