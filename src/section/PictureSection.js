import CompanyImage from "../compoment/CompanyImage";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Modal from "../compoment/Modal";
import { useState } from "react";

const splideOptions = {
    type: "loop",
    perPage: 4,
    gap: "10px",
    arrows: false,
    pagination: false,
    autoplay: true,
    drag: true,
};

const images1 = [
    {title: "title1", src: "https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"},
    {title: "title2", src: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/14634128/sony_santa_monica.0.1489374691.jpg?quality=90&strip=all&crop=7.7954545454545,0,84.409090909091,100"},
    {title: "title3", src: "https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"},
    {title: "title4", src: "https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"},
    {title: "title5", src: "https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg"},
]

const images2 = [
    {title: "title1", src: "https://jagatplay.com/wp-content/uploads/2023/12/swen-vincke-larian-studios.jpg"},
    {title: "title2", src: "https://cmsapi.larian.com/media/cache/image_file_media_default/uploads/image/63e4f108c43bb.jpeg"},
    {title: "title3", src: "https://cmsapi.larian.com/media/cache/image_file_media_default/uploads/image/63e4f0fc66ac2.jpeg"},
    {title: "title4", src: "https://cmsapi.larian.com/media/cache/image_file_media_default/uploads/image/65030ad2b8868.jpg"}
]

export default function PictureSection() {    
    const [showModal, setShowModal] = useState(false)
    const [modalImages, setModalImages] = useState([])
    const [slideIndex, setSlideIndex] = useState(0)

    const handleImageFocus = (index) => {
        setShowModal(true)
        setModalImages(images1)
        setSlideIndex(index)
    };

    const handleImageFocus2 = (index) => {
        setShowModal(true)
        setModalImages(images2)
        setSlideIndex(index)
        console.log(index)
    };

    const closeModal = () => {
        setShowModal(false)
        setModalImages([])
        setSlideIndex(0)
    }

    return <section className="bg-[#FFCEBD] w-full h-full py-10 relative">
        <Modal open={showModal} onClose={closeModal} modalImages={modalImages} slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>
        <div className="w-full ">
        <div className="flex items-center w-full pb-5">
            <div className="flex-1 border-t border-gray-400"></div>
            <div className="text-3xl font-bold text-[#250E62] text-center px-4 py-3">
                Một số hình ảnh trung tâm
            </div>
            <div className="flex-1 border-t border-gray-400"></div>
        </div>
            <div className="mb-5">
                <Splide options={{...splideOptions, direction: "ltr" }}>
                    {images1.map((image, idx) => (
                        <SplideSlide key={idx}>
                            <div onClick={() => handleImageFocus(idx)}>
                                <CompanyImage src={images1[idx].src}/>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
            <div>
                <Splide className="second-slider" options={{...splideOptions, direction: "rtl" }}>
                    {images2.map((image, idx) => (
                        <SplideSlide key={idx}>
                            <div className="image-slider-container" onClick={() => handleImageFocus2(idx)}>
                                <CompanyImage src={images2[idx].src}/>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    </section>
}