import { useRef, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const splideOptions = {
    type: "loop",
    perPage: 1,
    gap: "10px",
    arrows: false,
    pagination: false,
    autoplay: false,
    drag: false,
};

export default function Modal({ open, onClose, modalImages, slideIndex, setSlideIndex }) {
    const modalRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open, onClose]);
  
    useEffect(() => {
        setCurrentSlide(modalImages[slideIndex])
        //console.log(modalImages[slideIndex])
    }, [slideIndex])

    const goToNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % modalImages.length)
    };

    const goToPreviousSlide = () => {
        setSlideIndex((prevIndex) => prevIndex === 0 ? modalImages.length - 1 : prevIndex - 1)
    };

    return open ?  <>
        <div className="backdrop" style={{ backgroundColor: 'rgba(0,0,0,0.64)', backdropFilter: 'blur(0px)' }}></div>
        <div className="fixed inset-0 flex items-center justify-center z-[99]">
            <div ref={modalRef} className="flex gap-10 items-center min-h-[0px] max-w-[80%]" aria-modal="true" role="dialog">
                <button className="text-white text-center text-2xl rotate-180 p-3 rounded hover:bg-[#250E62]/[.8]" onClick={() => goToPreviousSlide()}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <div className="modal_image overflow-hidden flex flex-col items-center">
                    <div className="max-w-[1000px] w-[1000px] max-h-[600px] mx-auto">
                        <div className="flex justify-between items-center w-full mb-2 text-xl text-white">
                            <h1>{currentSlide?.title}</h1>
                            <button className="mr-1 text-base px-4 py-2 text-[#DBDEE1] hover:bg-[#232528] rounded-full" onClick={onClose}>
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        </div>
                            <img className="w-full h-full object-fit" loading="lazy" src={currentSlide?.src}/>
                    </div>
                </div>
                <button className="text-white text-2xl p-3 rounded hover:bg-[#250E62]/[.8]" onClick={() => goToNextSlide()}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    </> : null
}