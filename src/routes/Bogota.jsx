import React, { useState, useEffect } from 'react';
import BogMainSection from "../components/BogMainSection";
import BogMainPhrase from "../components/BogMainPhrase";
import BogMainDetails from "../components/BogMainDetails";
import BogMainRecommendations from "../components/BogMainRecommendations";
import BogMainFinalPart from "../components/BogMainFinalPart";
import BogFooter from "../components/BogFooter";
import BogGalleryLink from "../components/BogMainGalleryLink";
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
          <BogMainSection />
          <BogMainPhrase />
          <BogMainDetails />
          <BogGalleryLink />
          <BogMainRecommendations />
          <BogMainFinalPart />
          <BogFooter />
        </>
      )}
    </>
  );
};