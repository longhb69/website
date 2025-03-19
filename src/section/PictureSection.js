import CompanyImage from "../compoment/CompanyImage";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const splideOptions = {
    type: "loop",
    perPage: 4,
    gap: "10px",
    arrows: false,
    pagination: false,
    autoplay: true,
    drag: true,
  };

export default function PictureSection() {    
    return <section className="bg-[#FFCEBD] w-full h-full py-10">
        <div className="w-full ">
        <div className="flex items-center w-full pb-5">
            <div className="flex-1 border-t border-gray-400"></div>
            <div className="text-3xl font-bold text-[#250E62] text-center px-4">
                Một số hình ảnh trung tâm
            </div>
            <div className="flex-1 border-t border-gray-400"></div>
        </div>
            <div className="mb-5">
                <Splide
                    options={{...splideOptions, direction: "ltr" }}
                >
                    <SplideSlide>
                        <CompanyImage src={"https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"} />
                    </SplideSlide>
                    <SplideSlide>
                        <CompanyImage src={"https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/14634128/sony_santa_monica.0.1489374691.jpg?quality=90&strip=all&crop=7.7954545454545,0,84.409090909091,100"} />
                    </SplideSlide>
                    <SplideSlide>
                        <CompanyImage src={"https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"} />
                    </SplideSlide>
                    <SplideSlide>
                        <CompanyImage src={"https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg"} />                
                    </SplideSlide>
                </Splide>
            </div>
            <div>
                <Splide
                    className="second-slider"
                    options={{...splideOptions, direction: "rtl" }}
                >
                    <SplideSlide>
                        <CompanyImage src={"https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg"} />
                    </SplideSlide>
                    <SplideSlide>
                        <CompanyImage src={"https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/14634128/sony_santa_monica.0.1489374691.jpg?quality=90&strip=all&crop=7.7954545454545,0,84.409090909091,100"} />
                    </SplideSlide>
                    <SplideSlide>
                        <CompanyImage src={"https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"} />
                    </SplideSlide>
                    <SplideSlide>
                        <CompanyImage src={"https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg"} />                
                    </SplideSlide>
                </Splide>
            </div>
            {/* <div className="flex">
                <CompanyImage src={"https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"} />
                <CompanyImage src={"https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/14634128/sony_santa_monica.0.1489374691.jpg?quality=90&strip=all&crop=7.7954545454545,0,84.409090909091,100"} />
                <CompanyImage src={"https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"} />
                <CompanyImage src={"https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"} />
                <CompanyImage src={"https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"} />
                <CompanyImage src={"https://media.glassdoor.com/l/9b/1c/ac/af/our-studio-patio.jpg?signature=dc4245bfb6988dd7df91782c11d8cbbdf35fa80c60d4fe160ce41a388a4c5cae"} />
            </div>
            <div className="flex">
                <CompanyImage src={"https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg"} />
                <CompanyImage src={"https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/14634128/sony_santa_monica.0.1489374691.jpg?quality=90&strip=all&crop=7.7954545454545,0,84.409090909091,100"} />
                <CompanyImage src={"https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg"} />
                <CompanyImage src={"https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg"} />
                <CompanyImage src={"https://farm2.staticflickr.com/1547/25428108074_c305f7866a_b.jpg"} />
            </div> */}
        </div>
    </section>
}