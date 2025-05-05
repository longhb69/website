import Button from "../component/Button";
import NavBar from "../component/NavBar";
import AnimatedCounter from "../component/AnimatedCounter"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ANIMATON_DURATION = 0.3;

const sections = [
    {
        id: 1,
        title: "Lái Xe An Toàn – Tự Tin Trên Mọi Hành Trình!",
        description: "Trung tâm đào tạo lái xe hàng đầu tại Hòa Bình!",
        details: "Chúng tôi cam kết mang đến chương trình học lái xe chuyên nghiệp với giảng viên tận tâm.",
        image: "https://assetsio.gnwcdn.com/13909957108.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
    },
    {
        id: 2,
        title: "Giảng Viên Kinh Nghiệm, Phương Pháp Hiệu Quả",
        description: "Học lý thuyết vững vàng, thực hành thành thạo.",
        details: "Chương trình học bài bản, giúp bạn tự tin cầm vô lăng trên mọi cung đường.",
        image: "https://example.com/image2.jpg"
    },
    {
        id: 3,
        title: "Lịch Học Linh Hoạt, Thi Đỗ Cao",
        description: "Hỗ trợ học viên tận tình từ đăng ký đến sát hạch.",
        details: "Chúng tôi cam kết tỉ lệ đỗ cao nhờ chương trình học chất lượng.",
        image: "https://example.com/image3.jpg"
    }
];

export default function MainSection() {
    const VideoRef = useRef()
    const [theaterOpen, setTheaterOpen] = useState(false)

    useEffect(() => {
        if(!VideoRef.current) return

        if(theaterOpen) {
            setTimeout(() => {
                VideoRef.current.style.display = 'block' 
            }, 1500)
        }
        else {
            VideoRef.current.style.display = 'none' 
        }
        
    }, [theaterOpen])
    return (
        <>
            <section className="bg-[#250E62] relative w-full min-h-[95vh] py-14">
                <div className="container max-w-[90%] mx-auto px-4">
                    <div className={`flex flex-col text-center max-h-[95vh] md:text-left md:flex-row ${theaterOpen ? "gap-0" : "gap-10"} items-center`}>
                        {theaterOpen ? 
                            <div className="h-screen p-4 opacity-[0.5] hover:opacity-[1] trasition ">
                                <Button 
                                    className="h-full" 
                                    variant="secondary"
                                    onClick={() => setTheaterOpen(!theaterOpen)}
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </Button>
                            </div>
                        : null}
                        <motion.div 
                            className={`text-[#FFCEBD] leading-relaxed`}
                            initial={{ opacity: 0, x: -50}}
                            animate={{
                                opacity: theaterOpen ? 0 : 1, 
                                x: 0,
                                width: theaterOpen ? "0%" : "45%",
                                //height: theaterOpen ? "0%" : "100%"
                            }}
                            transition={{ duration: ANIMATON_DURATION }}
                        >
                            <motion.h1 
                                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: ANIMATON_DURATION, delay: 0.2 }}
                            >
                                Lái Xe An Toàn – Tự Tin Trên Mọi Hành Trình!
                            </motion.h1>
                            <motion.div 
                                className="text-white space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: ANIMATON_DURATION, delay: 0.4 }}
                            >
                                <p className="text-lg md:text-xl">Trung tâm đào tạo lái xe hàng đầu tại Hòa Bình!</p>
                                <p className="text-base md:text-lg">
                                    Chúng tôi cam kết mang đến cho bạn chương trình học lái xe chuyên nghiệp, 
                                    từ cơ bản đến nâng cao, với đội ngũ giảng viên tận tâm và phương pháp 
                                    giảng dạy thực tế.
                                </p>
                            </motion.div>

                            <div className="mt-10">
                                <AnimatedCounter ANIMATON_DURATION={ANIMATON_DURATION}/>
                            </div>

                            <motion.div
                                className="flex justify-center md:justify-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: ANIMATON_DURATION, delay: 0.6 }}
                            >
                                <Button 
                                    className="mt-8 hover:scale-105 transition-transform" 
                                    variant="secondary"
                                    onClick={() => setTheaterOpen(!theaterOpen)}
                                >
                                    Khám Phá Ngay
                                </Button>
                            </motion.div>

                        </motion.div>
                        <motion.div 
                            className={`w-full h-full`}
                            initial={{ opacity: 0, x: 50, width: "50%" }}
                            animate={{ opacity: 1, x: 0, width: theaterOpen ? "100%" : "50%" }}
                            transition={{ duration: ANIMATON_DURATION, delay: 0.2 }}
                        >
                            {theaterOpen ?
                            <div className="w-full h-[750px] bg-black">
                                 <iframe 
                                    ref={VideoRef}
                                    className="w-full h-[750px]"
                                    src="https://www.youtube.com/embed/7X8yvwKHmR8?autoplay=1&mute=1&vq=hd1080&modestbranding=1&rel=0" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                            : 
                            <img
                                className="w-full h-full rounded-lg shadow-xl hover:shadow-2xl transition border-2 border-transparent cursor-pointer hover:shadow-[0_0_10px_2px_#E13D46] hover:border-[#E13D46]"
                                src="https://assetsio.gnwcdn.com/13909957108.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
                                alt="Đào tạo lái xe chuyên nghiệp"
                                loading="eager"
                                onClick={() => setTheaterOpen(true)}
                            />
                            }
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
