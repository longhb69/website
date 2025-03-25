import Button from "../component/Button";
import NavBar from "../component/NavBar";
import { motion } from "framer-motion";

const ANIMATON_DURATION = 0.8;

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
    return (
        <>
            <section className="bg-[#250E62] w-full min-h-[95vh] py-12">
                <div className="container max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <motion.div 
                            className="text-[#FFCEBD] w-full md:w-[40%] leading-relaxed"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
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
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: ANIMATON_DURATION, delay: 0.6 }}
                            >
                                <Button 
                                    className="mt-8 hover:scale-105 transition-transform" 
                                    variant="secondary"
                                >
                                    Khám Phá Ngay
                                </Button>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            className="w-full md:w-[60%]"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: ANIMATON_DURATION, delay: 0.2 }}
                        >
                            <img
                                className="w-full h-auto rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                                src="https://assetsio.gnwcdn.com/13909957108.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
                                alt="Đào tạo lái xe chuyên nghiệp"
                                loading="eager"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
