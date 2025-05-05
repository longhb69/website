import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 1) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, [])

    return <>
        {isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 w-[45px] h-[45px] bg-transparent border-2 border-gray-5500 
                         hover:bg-[#5835C7] text-white rounded-full shadow-lg hover:shadow-xl 
                         transition-all duration-300 z-50 group flex items-center justify-center"
                aria-label="Scroll to top"
            >
                <FontAwesomeIcon 
                    icon={faChevronUp} 
                    className="text-xl text-gray-500 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300"
                />
            </button>
        )}
    </>
}