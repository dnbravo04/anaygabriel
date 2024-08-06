import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import photo1 from "../img/photos/jpg_images/image_1.jpg"
import photo2 from "../img/photos/jpg_images/image_2.jpg"
import photo3 from "../img/photos/jpg_images/image_3.jpg"
import photo4 from "../img/photos/jpg_images/image_4.jpg"
import photo5 from "../img/photos/jpg_images/image_5.jpg"
import photo6 from "../img/photos/jpg_images/image_6.jpg"
import photo7 from "../img/photos/jpg_images/image_7.jpg"
import photo8 from "../img/photos/jpg_images/image_8.jpg"
import photo9 from "../img/photos/jpg_images/image_9.jpg"
import photo10 from "../img/photos/jpg_images/image_10.jpg"
import photo11 from "../img/photos/jpg_images/image_11.jpg"
import photo12 from "../img/photos/jpg_images/image_12.jpg"
import photo13 from "../img/photos/jpg_images/image_13.jpg"
import photo14 from "../img/photos/jpg_images/image_14.jpg"
import photo15 from "../img/photos/jpg_images/image_15.jpg"
import photo16 from "../img/photos/jpg_images/image_16.jpg"
import photo17 from "../img/photos/jpg_images/image_17.jpg"
import photo18 from "../img/photos/jpg_images/image_18.jpg"
import photo19 from "../img/photos/jpg_images/image_19.jpg"
import photo20 from "../img/photos/jpg_images/image_20.jpg"
import photo21 from "../img/photos/jpg_images/image_21.jpg"
import photo22 from "../img/photos/jpg_images/image_22.jpg"


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
    photo22,]

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
