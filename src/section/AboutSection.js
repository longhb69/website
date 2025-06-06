import { motion } from "framer-motion";

export default function AboutSection() {
    const features = [
        {
            title: "SÂN TẬP RIÊNG",
            description: "Sân tập đạt tiêu chuẩn ISO 9001:2015. Học viên được học trực tiếp trên sân thi – xe thi."
        },
        {
            title: "Tin Cậy",
            description: "Giáo viên của chúng tôi là những người có phẩm chất đạo đức tốt, nhiều năm kinh nghiệm, nhiệt tình, chuyên nghiệp, trình độ cao."
        },
        {
            title: "Ứng Dụng Công Nghệ",
            description: "Sử dụng các bài giảng online lý thuyết, chia sẻ hình ảnh trực quan các bài tập thực hành bằng các phần mềm dạy học."
        },
        {
            title: "100% Thực Hành Thực Tế",
            description: "Hệ thống sân tập hiện đại, xe tập lái đời mới, giúp học viên có trải nghiệm thực tế trước khi thi sát hạch."
        },
        
    ]
    return (
        <section id="about" className="bg-white text-[#250E62] w-full py-20">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Left Side - Content */}
                    <motion.div 
                        className="lg:w-1/2 w-full"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight mb-5">
                            Về Chúng Tôi
                        </h1>
                        <p className="mt-4 text-base text-gray-700 leading-relaxed max-w-2xl font-normal">
                            Trung Tâm Đào Tạo Lái Xe Hoà Bình là đơn vị uy tín đào tạo lái xe an toàn, 
                            am hiểu luật GTĐB cho hơn <span className="font-semibold">100.000 học viên</span> sau 
                            khi kết thúc khoá học lái xe ô tô.
                        </p>
                        <p className="mt-3 text-base md:text-base text-gray-700 leading-relaxed max-w-2xl">
                            Chúng tôi cam kết mang đến chương trình học chất lượng, tận tâm hỗ trợ học viên 
                            thi đỗ bằng lái B, C, A1, A2 không chỉ tại Hòa Bình mà còn các tỉnh lân cận.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="bg-[#F6F6F7] p-5 cursor-pointer rounded-lg hover:shadow-lg border-white border hover:border-[#6C43E6] transition"
                                    initial={{ opacity: 0}}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-[#F54343] font-bold text-lg md:text-lg mb-3">
                                        {feature.title}
                                    </h2>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="lg:w-1/2 w-full flex justify-center lg:sticky lg:top-24"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            className="w-full max-h-[450px] object-cover rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            src="https://lh3.googleusercontent.com/p/AF1QipO4_JPfmrOSPlpX21IGBn34DrKu8iVvZ7Zh-mMC=s680-w680-h510"
                            alt="Trung tâm đào tạo lái xe"
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
