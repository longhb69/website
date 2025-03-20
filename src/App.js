import MainSection from "./section/MainSection";
import PriceSection from "./section/PriceSection";
import VideoSection from "./section/VideoSection";
import PictureSetion from "./section/PictureSection"
import CommentSection from "./section/CommentSection";
import AboutSection from "./section/AboutSection";
import FooterSection from "./section/FooterSection";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="App w-full">
        <MainSection />
        <AboutSection />
        <VideoSection />
        <PictureSetion />
        <PriceSection />
        <CommentSection />
        <FooterSection/>
      </div>
    </ModalProvider>
  );
}

export default App;
