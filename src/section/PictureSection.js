import CompanyImage from "../component/CompanyImage";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Modal from "../component/Modal";
import "@splidejs/splide/css";
import { useState, useEffect, useRef } from "react";

const splideOptions = {
    type: "loop",
    perPage: 4,
    gap: "10px",
    arrows: false,
    pagination: false,
    autoplay: true,
    drag: true,
    autoScroll: {
        speed: 2,
    },
};

const images1 = [
    {
        title: "title1",
        src: "https://jagatplay.com/wp-content/uploads/2023/12/swen-vincke-larian-studios.jpg",
    },
    {
        title: "title2",
        src: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/14634128/sony_santa_monica.0.1489374691.jpg?quality=90&strip=all&crop=7.7954545454545,0,84.409090909091,100",
    },
    {
        title: "title3",
        src: "https://cmsapi.larian.com/media/cache/image_file_media_default/uploads/image/65030ad2b8868.jpg",
    },
    {
        title: "title4",
        src: "https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae",
    },
    { 
        title: "title5", 
        src: "https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg" 
    },
    {
        title: "title1", 
        src: "https://cmsapi.larian.com/media/cache/image_file_media_default/uploads/image/63e4f0fc66ac2.jpeg",
    }
];

export default function PictureSection() {
    const [showModal, setShowModal] = useState(false);
    const [modalImages, setModalImages] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const splideRef = useRef(null);

    useEffect(() => {
        if (splideRef.current) {
            const splide1 = new Splide(splideRef.current, {
                type       : "loop",
                fixedWidth : '35rem',
                gap        : '1rem',
                arrows     : false,
                pagination : false,
                drag       : true,
                autoScroll : {
                    speed: 0.5,
                },
            });

            splide1.mount({ AutoScroll });
        }
    }, []);

    const handleImageFocus = (index) => {
        setShowModal(true);
        console.log("Hi")
        setModalImages(images1);
        setSlideIndex(index);
    };

    // const handleImageFocus2 = (index) => {
    //     setShowModal(true);
    //     setModalImages(images2);
    //     setSlideIndex(index);
    //     console.log(index);
    // };

    const closeModal = () => {
        setShowModal(false);
        setModalImages([]);
        setSlideIndex(0);
    };

    return (
        <section className="bg-[#FFCEBD] w-full h-[500px] py-10 relative">
            <Modal open={showModal} onClose={closeModal} modalImages={modalImages} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
            <div className="w-full h-full">
                <div className="flex items-center w-full pb-5">
                    <div className="flex-1 border-t border-gray-400"></div>
                    <div className="text-4xl font-bold text-[#250E62] text-center px-4 py-3">Một số hình ảnh trung tâm</div>
                    <div className="flex-1 border-t border-gray-400"></div>
                </div>
                <div className="mb-6">
                    <div className="splide" ref={splideRef}>
                        <div className="splide__track">
                             <ul className="splide__list">
                                {images1.map((image, idx) => (
                                    <li className="splide__slide" >
                                        <div 
                                            onClick={() => handleImageFocus(idx)}
                                            data-splide-no-drag="true"
                                        >
                                            <CompanyImage src={images1[idx].src} />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <div className="splide" ref={splideRef2}>
                        <div className="splide__track">
                             <ul className="splide__list">
                                {images2.map((image, idx) => (
                                    <li className="splide__slide" >
                                        <div className="image-slider-container" onClick={() => handleImageFocus2(idx)}>
                                            <CompanyImage src={images2[idx].src} />
                                        </div>
                                    </li>
                                ))}
                             </ul>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
