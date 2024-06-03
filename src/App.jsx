import "./App.css";
import MainSection from "./components/MainSection";
import MainPhrase from "./components/MainPhrase";
import MainDetails from "./components/MainDetails";
import MainRecommendations from "./components/MainRecommendations";
import FinalPart from "./components/FinalPart";
import Footer from "./components/Footer";
import GalleryLink from "./components/GalleryLink";

function App() {
  return (
    <>
      <MainSection />
      <MainPhrase />
      <MainDetails />
      <GalleryLink />
      <MainRecommendations />
      <FinalPart />
      <Footer />
    </>
  );
}

export default App;
