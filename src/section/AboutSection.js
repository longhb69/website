import { motion } from "framer-motion";

export default function AboutSection() {
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
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
                            Về Chúng Tôi
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl font-normal">
                            Trung Tâm Đào Tạo Lái Xe Hoà Bình là đơn vị uy tín đào tạo lái xe an toàn, 
                            am hiểu luật GTĐB cho hơn <span className="font-semibold">100.000 học viên</span> sau 
                            khi kết thúc khoá học lái xe ô tô.
                        </p>
                        <p className="mt-3 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                            Chúng tôi cam kết mang đến chương trình học chất lượng, tận tâm hỗ trợ học viên 
                            thi đỗ bằng lái B, C, A1, A2 không chỉ tại Hòa Bình mà còn các tỉnh lân cận.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                            {/* Feature Cards */}
                            <motion.div 
                                className="bg-white/50 p-6 rounded-lg hover:shadow-lg border-white border hover:border-[#6C43E6] trasition-border transition transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-[#F54343] font-bold text-xl md:text-2xl mb-3">
                                    SÂN TẬP RIÊNG
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Sân tập đạt tiêu chuẩn ISO 9001:2015. Học viên được học trực tiếp 
                                    trên sân thi – xe thi.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="bg-white/50 p-6 rounded-lg hover:shadow-lg border-white border hover:border-[#6C43E6] trasition-border transition transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-[#F54343] font-bold text-xl md:text-2xl mb-3">
                                    Tin Cậy
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Giáo viên của chúng tôi là những người có phẩm chất đạo đức tốt, 
                                    nhiều năm kinh nghiệm, nhiệt tình, chuyên nghiệp, trình độ cao.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="bg-white/50 p-6 rounded-lg hover:shadow-lg border-white border hover:border-[#6C43E6] trasition-border transition transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-[#F54343] font-bold text-xl md:text-2xl mb-3">
                                    Ứng Dụng Công Nghệ
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Sử dụng các bài giảng online lý thuyết, chia sẻ hình ảnh trực quan 
                                    các bài tập thực hành bằng các phần mềm dạy học.
                                </p>
                            </motion.div>
                            <motion.div 
                                className="bg-white/50 p-6 rounded-lg hover:shadow-lg border-white border hover:border-[#6C43E6] trasition-border transition transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.6 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-[#F54343] font-bold text-xl md:text-2xl mb-3">
                                    100% Thực Hành Thực Tế
                                </h2>
                                <p className="text-gray-700 text-lg leading-relaxed">
                                    Hệ thống sân tập hiện đại, xe tập lái đời mới, giúp học viên có 
                                    trải nghiệm thực tế trước khi thi sát hạch.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div 
                        className="lg:w-1/2 w-full flex justify-center lg:sticky lg:top-24"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img 
                            className="w-full max-h-[550px] object-cover rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
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
