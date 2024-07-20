import React from 'react'
import { GalleryPhotos } from '../components/GalleryPhotos'
import { GalleryHeader } from '../components/GalleryHeader'
import Footer from "../components/Footer";
export const Gallery = () => {
  return (
    <>
    <GalleryHeader/>
    <GalleryPhotos/>
    <Footer/>
    </>

  )
}
