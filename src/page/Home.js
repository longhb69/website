import MainSection from "../section/MainSection";
import PriceSection from "../section/PriceSection";
import VideoSection from "../section/VideoSection";
import PictureSetion from "../section/PictureSection";
import CommentSection from "../section/CommentSection";
import AboutSection from "../section/AboutSection";

export default function Home() {
    return (
        <div>
            <MainSection />
            <AboutSection />
            <VideoSection />
            <PictureSetion />
            <PriceSection />
            <CommentSection />
        </div>
    );
}
