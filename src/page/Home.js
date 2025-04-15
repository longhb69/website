import MainSection from "../section/MainSection";
import PriceSection from "../section/PriceSection";
import VideoSection from "../section/VideoSection";
import PictureSetion from "../section/PictureSection";
import CommentSection from "../section/CommentSection";
import AboutSection from "../section/AboutSection";
import MapSection from "../section/MapSection";
import NavBar from "../component/NavBar";
import SignUpSection from "../section/SignUpSection";
import WhyChooseUsSection from "../section/WhyChooseUsSection";
import ScrollToTop from "../component/ScrollToTop";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
    const location = useLocation()

    useEffect(() => {
        const hash = location.hash.substring(1); //remove the #
        if(hash) {
            const target = document.getElementById(hash)
            if(target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location])

    return (
        <div>
            <NavBar />
            <MainSection />
            <AboutSection />
            <VideoSection />
            <PictureSetion />
            <WhyChooseUsSection />
            <MapSection />
            <PriceSection />
            <CommentSection />
            <SignUpSection className={""}/>
            <ScrollToTop/>
        </div>
    );
}
