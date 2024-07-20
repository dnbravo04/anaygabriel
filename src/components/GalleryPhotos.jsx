import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photo1 from "../img/photos/jpeg_images/image_1.jpeg"
import photo2 from "../img/photos/jpeg_images/image_2.jpeg"
import photo3 from "../img/photos/jpeg_images/image_3.jpeg"
import photo4 from "../img/photos/jpeg_images/image_4.jpeg"
import photo5 from "../img/photos/jpeg_images/image_5.jpeg"
import photo6 from "../img/photos/jpeg_images/image_6.jpeg"
import photo7 from "../img/photos/jpeg_images/image_7.jpeg"
import photo8 from "../img/photos/jpeg_images/image_8.jpeg"
import photo9 from "../img/photos/jpeg_images/image_9.jpeg"
import photo10 from "../img/photos/jpeg_images/image_10.jpeg"
import photo11 from "../img/photos/jpeg_images/image_11.jpeg"
import photo12 from "../img/photos/jpeg_images/image_12.jpeg"
import photo13 from "../img/photos/jpeg_images/image_13.jpeg"
import photo14 from "../img/photos/jpeg_images/image_14.jpeg"
import photo15 from "../img/photos/jpeg_images/image_15.jpeg"
import photo16 from "../img/photos/jpeg_images/image_16.jpeg"
import photo17 from "../img/photos/jpeg_images/image_17.jpeg"
import photo18 from "../img/photos/jpeg_images/image_18.jpeg"
import photo19 from "../img/photos/jpeg_images/image_19.jpeg"
import photo20 from "../img/photos/jpeg_images/image_20.jpeg"
import photo21 from "../img/photos/jpeg_images/image_21.jpeg"
import photo22 from "../img/photos/jpeg_images/image_22.jpeg"
import photo23 from "../img/photos/jpeg_images/image_23.jpeg"
import photo24 from "../img/photos/jpeg_images/image_24.jpeg"
import photo25 from "../img/photos/jpeg_images/image_25.jpeg"
import photo26 from "../img/photos/jpeg_images/image_26.jpeg"
import photo27 from "../img/photos/jpeg_images/image_27.jpeg"
import photo28 from "../img/photos/jpeg_images/image_28.jpeg"
import photo29 from "../img/photos/jpeg_images/image_29.jpeg"
import photo30 from "../img/photos/jpeg_images/image_30.jpeg"
import photo31 from "../img/photos/jpeg_images/image_31.jpeg"
import photo32 from "../img/photos/jpeg_images/image_32.jpeg"
import photo33 from "../img/photos/jpeg_images/image_33.jpeg"


export const GalleryPhotos = () => {
  const images = [photo1, 
    photo2 ,
    photo3 ,
    photo4 ,
    photo5 ,
    photo6 ,
    photo7 ,
    photo8 ,
    photo9 ,
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
    photo23,
    photo24,
    photo25,
    photo26,
    photo27,
    photo28,
    photo29,
    photo30,
    photo31,
    photo32,
    photo33]

  return (
    <>
      <div className="columns-2 md:columns-2 lg:columns-3 py-10 md:py-20 gap-4 mx-4">
        
          {images.map((image) => (
            <img
            key={image}
            className="w-full mb-4 break-inside-avoid transition ease-in-out delay-75 hover:scale-105"
            src={image}
            alt={"Image ${index + 1}"}
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
    </>
  );
};
