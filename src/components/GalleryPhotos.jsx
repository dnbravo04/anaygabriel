import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import photo1 from "../img/photos/webp_images/image_1.webp";
import photo2 from "../img/photos/webp_images/image_2.webp";
import photo3 from "../img/photos/webp_images/image_3.webp";
import photo4 from "../img/photos/webp_images/image_4.webp";
import photo5 from "../img/photos/webp_images/image_5.webp";
import photo6 from "../img/photos/webp_images/image_6.webp";
import photo7 from "../img/photos/webp_images/image_7.webp";
import photo8 from "../img/photos/webp_images/image_8.webp";
import photo9 from "../img/photos/webp_images/image_9.webp";
import photo10 from "../img/photos/webp_images/image_10.webp";
import photo11 from "../img/photos/webp_images/image_11.webp";
import photo12 from "../img/photos/webp_images/image_12.webp";
import photo13 from "../img/photos/webp_images/image_13.webp";
import photo14 from "../img/photos/webp_images/image_14.webp";
import photo15 from "../img/photos/webp_images/image_15.webp";
import photo16 from "../img/photos/webp_images/image_16.webp";
import photo17 from "../img/photos/webp_images/image_17.webp";
import photo18 from "../img/photos/webp_images/image_18.webp";
import photo19 from "../img/photos/webp_images/image_19.webp";
import photo20 from "../img/photos/webp_images/image_20.webp";
import photo21 from "../img/photos/webp_images/image_21.webp";
import photo22 from "../img/photos/webp_images/image_22.webp";

export const GalleryPhotos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const modalRef = useRef(null);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (imageContainerRef.current && selectedImageIndex !== null) {
      imageContainerRef.current.style.transform = `translateX(-${
        selectedImageIndex * 100
      }%)`;
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo22,
  ];

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="columns-2 md:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-4">
        {images.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            effect="blur"
            onClick={() => openModal(index)}
            className="w-full mb-4 break-inside-avoid transition ease-in-out delay-75 hover:scale-105 cursor-pointer"
          />
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-blackolive bg-opacity-90 animate-fadeIn"
          onClick={closeModal}
          {...handlers}
        >
          <div
            className="flex items-center justify-center p-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            <div className="overflow-hidden flex" onClick={closeModal}>
              <div
                className="flex items-center transition-transform duration-500 ease-in-out "
                ref={imageContainerRef}
                onClick={closeModal}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 border p-1 border-oldrose h-max flex items-center justify-center">
                    <img
                      effect="blur"
                      src={image}
                      alt={`Image ${index + 1}`}
                      className="object-contain max-h-[45em] items-center justify-center m-0"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-3 left-4 right-4 bg-blackolive flex justify-between items-center p-5">
              <button
                className="p-2 font-handlee text-whitesmoke border border-oldrose bg-oldrose bg-opacity-50 focus:outline-none"
                onClick={prevImage}
              >
                Anterior
              </button>
              <button
                className="p-2 font-handlee text-whitesmoke border border-oldrose bg-oldrose bg-opacity-50 focus:outline-none"
                onClick={nextImage}
              >
                Siguiente
              </button>
              <button
                className="p-2 font-handlee text-whitesmoke border border-auburn bg-auburn bg-opacity-50 focus:outline-none"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="my-4 text-center">
        <Link
          to={-1}
          className="flex w-3/4 items-center justify-center mx-auto border font-semibold border-auburn bg-oldrose bg-opacity-50 hover:bg-opacity-70 text-whitesmoke py-2 px-8"
        >
          Volver a la pagina principal
        </Link>
      </div>
    </>
  );
};
