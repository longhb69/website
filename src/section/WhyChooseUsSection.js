import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faCar, 
    faUserTie, 
    faAward, 
    faChalkboardTeacher, 
    faMoneyBillWave, 
    faCalendarAlt,
    faPhoneAlt 
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Button from "../component/Button";

export default function WhyChooseUsSection() {
    const features = [
        {
            icon: faCar,
            title: "Sân Tập & Xe Đời Mới",
            description: "Sân đạt tiêu chuẩn ISO 9001:2015. Học viên được học trực tiến trên sân thi – xe thi. 100% xe tập lái tại LOD xe đời mới được bảo dưỡng định kỳ theo tiêu chuẩn an toàn."
        },
        {
            icon: faUserTie,
            title: "Học thực hành 1 kèm 1",
            description: "Khi học thực hành, học viên sẽ được đảm bảo 1 thầy – 1 trò để đảm bảo không mất nhiều thời gian và đạt được kết quả tốt nhất."
        },
        {
            icon: faAward,
            title: "Tỷ Lệ Đỗ Cao",
            description: "Cam kết tỷ lệ đỗ cao nhất khu vực với phương pháp đào tạo khoa học."
        },
        {
            icon: faChalkboardTeacher,
            title: "Học Thực Tế",
            description: "Tập trung vào thực hành thực tế, đảm bảo học viên tự tin sau khi tốt nghiệp."
        },
        {
            icon: faMoneyBillWave,
            title: "Chi Phí Hợp Lý",
            description: "Học phí cạnh tranh với nhiều gói đào tạo linh hoạt, thanh toán dễ dàng."
        },
        {
            icon: faCalendarAlt,
            title: "Lịch Học Linh Hoạt",
            description: "Thời gian học sẽ được thầy trò chủ động trao đổi sắp xếp, có thể học cuối tuần, học tối, học ngoài giờ hành chính."
        }
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#250E62] mb-6">
                        Tại Sao Chọn Chúng Tôi?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Với hơn 6 năm kinh nghiệm đào tạo, chúng tôi tự hào là trung tâm 
                        đào tạo lái xe uy tín hàng đầu tại Hòa Bình
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="bg-white rounded-xl p-6 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="text-[#F54343] bg-red-50 p-3 rounded-lg group-hover:bg-[#F54343] group-hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={feature.icon} className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#250E62] mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 