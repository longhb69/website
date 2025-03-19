import MainSection from "./section/MainSection";
import PriceSection from "./section/PriceSection";
import VideoSection from "./section/VideoSection";
import PictureSetion from "./section/PictureSection"
import CommentSection from "./section/CommentSection";

function App() {
  return (
    <div className="App">
      <MainSection/>
      <VideoSection />
      <PictureSetion />
      <PriceSection />
      <CommentSection />
    </div>
  );
}

export default App;
