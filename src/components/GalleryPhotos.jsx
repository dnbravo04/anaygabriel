import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";

export const GalleryPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const importPhotos = async () => {
      try {
        const photoData = [
          {
            id: 1,
            src: "/image_1.jpeg",
          },
          {
            id: 2,
            src: "/image_2.jpeg",
          },
          {
            id: 3,
            src: "/image_3.jpeg",
          },
          {
            id: 4,
            src: "/image_4.jpeg",
          },
          {
            id: 5,
            src: "/image_5.jpeg",
          },
          {
            id: 6,
            src: "/image_6.jpeg",
          },
          {
            id: 7,
            src: "/image_7.jpeg",
          },
          {
            id: 8,
            src: "/image_8.jpeg",
          },
          {
            id: 9,
            src: "/image_9.jpeg",
          },
          {
            id: 10,
            src: "/image_10.jpeg",
          },
          {
            id: 11,
            src: "/image_11.jpeg",
          },
          {
            id: 12,
            src: "/image_12.jpeg",
          },
          {
            id: 13,
            src: "/image_13.jpeg",
          },
          {
            id: 14,
            src: "/image_14.jpeg",
          },
          {
            id: 15,
            src: "/image_15.jpeg",
          },
          {
            id: 16,
            src: "/image_16.jpeg",
          },
          {
            id: 17,
            src: "/image_17.jpeg",
          },
          {
            id: 18,
            src: "/image_18.jpeg",
          },
          {
            id: 19,
            src: "/image_19.jpeg",
          },
          {
            id: 20,
            src: "/image_20.jpeg",
          },
          {
            id: 21,
            src: "/image_21.jpeg",
          },
          {
            id: 22,
            src: "/image_22.jpeg",
          },
          {
            id: 23,
            src: "/image_23.jpeg",
          },
          {
            id: 24,
            src: "/image_24.jpeg",
          },
          {
            id: 25,
            src: "/image_25.jpeg",
          },
          {
            id: 26,
            src: "/image_26.jpeg",
          },
          {
            id: 27,
            src: "/image_27.jpeg",
          },
          {
            id: 28,
            src: "/image_28.jpeg",
          },
          {
            id: 29,
            src: "/image_29.jpeg",
          },
          {
            id: 30,
            src: "/image_30.jpeg",
          },
          {
            id: 31,
            src: "/image_31.jpeg",
          },
          {
            id: 32,
            src: "/image_32.jpeg",
          },
          {
            id: 33,
            src: "/image_33.jpeg",
          },
        ];

        const imageUrls = photoData.map((photo) => {
          return photo.src;
        });
        setPhotos(imageUrls);
      } catch (error) {
        console.error("Error importing photos:", error);
      }
    };

    importPhotos();
  }, []);

  return (
    <>
      <div className="columns-2 md:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-4">
        {photos.map((imageUrl, index) => (
          <img
            key={index}
            className="w-full mb-4 break-inside-avoid"
            src={`../anaygabriel/src/img/photos/jpeg_images${imageUrl}`}
            alt={`Image ${index + 1}`}
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
