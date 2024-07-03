import React from 'react'
import MainSection from "../components/MainSection";
import MainPhrase from "../components/MainPhrase";
import MainDetails from "../components/MainDetails";
import MainRecommendations from "../components/MainRecommendations";
import MainFinalPart from "../components/MainFinalPart";
import Footer from "../components/Footer";
import GalleryLink from "../components/MainGalleryLink";

export const Home = () => {
  return (
    <>
      <div className="xs:hidden">
        <MainSection />
        <MainPhrase />
        <MainDetails />
        <GalleryLink />
        <MainRecommendations />
        <MainFinalPart/>
        <Footer />
      </div>
    </>
  )
}
