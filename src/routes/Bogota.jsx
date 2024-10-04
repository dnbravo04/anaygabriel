import React, { useState, useEffect } from 'react';
import MainSection from "../components/MainSection";
import BogMainPhrase from "../components/BogMainPhrase";
import BogMainDetails from "../components/BogMainDetails";
import BogMainRecommendations from "../components/BogMainRecommendations";
import BogMainFinalPart from "../components/BogMainFinalPart";
import BogFooter from "../components/BogFooter";
import GalleryLink from "../components/MainGalleryLink";
import { BigScreenComponent } from "../components/BigScreenComponent";


export const Bogota = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 451);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 451);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {isLargeScreen ? ( 

        < BigScreenComponent />

      ) : (
        <>
          <MainSection />
          <BogMainPhrase />
          <BogMainDetails />
          <GalleryLink />
          <BogMainRecommendations />
          <BogMainFinalPart />
        </>
      )}
      <BogFooter />
    </>
  );
};