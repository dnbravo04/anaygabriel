import React, { useState, useEffect } from 'react';
import MainSection from "../components/MainSection";
import MainPhrase from "../components/MainPhrase";
import MainDetails from "../components/MainDetails";
import MainRecommendations from "../components/MainRecommendations";
import MainFinalPart from "../components/MainFinalPart";
import Footer from "../components/Footer";
import GalleryLink from "../components/MainGalleryLink";
import { BigScreenComponent } from "../components/BigScreenComponent";


export const Home = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 451);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 451);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {isLargeScreen ? ( 
        <BigScreenComponent />
      ) : (
        <>
          <MainSection />
          <MainPhrase />
          <MainDetails />
          <GalleryLink />
          <MainRecommendations />
          <MainFinalPart />
        </>
      )}
      <Footer />
    </>
  );
};