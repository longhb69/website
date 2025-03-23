import MainSection from "../section/MainSection";
import PriceSection from "../section/PriceSection";
import VideoSection from "../section/VideoSection";
import PictureSetion from "../section/PictureSection";
import CommentSection from "../section/CommentSection";
import AboutSection from "../section/AboutSection";
import NavBar from "../component/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar />
            <MainSection />
            <AboutSection />
            <VideoSection />
            <PictureSetion />
            <PriceSection />
            <CommentSection />
        </div>
    );
}
