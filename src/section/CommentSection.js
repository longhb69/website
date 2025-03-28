import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faCheck } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { motion, AnimatePresence  } from "framer-motion"

const comments = [
    {
        person: "Owen Phillips",
        image: "https://imagedelivery.net/LqiWLm-3MGbYHtFuUbcBtA/c8fa74c8-2fbf-48c6-c854-926022831600/w=1760,sharpen=1",
        carrer: "Thợ rèn",
        comment: "Tôi có thể quản lý hosting, tên miền và chứng chỉ SSL ở cùng một nơi, điều này thực sự rất mới mẻ."
    },
    {
        person: "Đặng Thế Hải",
        image: "https://cafebiz.cafebizcdn.vn/162123310254002176/2023/6/23/16735402991293-16874445023541021394539-1687483856849-16874838569491202755318.jpg",
        carrer: "Chủ doanh nghiệp",
        comment: "Tôi là chủ doanh nghiệp về lĩnh vực quảng cáo, tôi không có nhiều thời gian hành chính để học lái. Nhưng đến với trung tâm được các thày cho tôi đăng ký chủ động lịch học. Tôi rất hài lòng về cách sắp xếp lịch và cách giảng dạy tại trung tâm."
    },
    {
        person: "Đặng Thị Hằng",
        image: "",
        carrer: "Phó hiệu trưởng trường THCS",
        comment: "Là mộ giáo viên trung học, tôi thấy các thày dạy rất dễ hiểu, nhiệt tình, tận tâm với công việc. Ngoài việc học lái xe tôi học được rất nhiều điều từ thực tế và tôi rất hài lòng về khóa học tại trung tâm."
    }
]

export default function CommentSection() {
    const [currentComment, setCurrentComment] = useState(0)

    const handlePrevComment = () => {
        setCurrentComment((prev) => (prev === 0 ? comments.length - 1 : prev - 1));
    }
    const handleNextComment = () => {
        setCurrentComment((prev) => (prev + 1) % comments.length)
    }

    return <section className="bg-[#fff] w-full h-full py-10">
        <div className="w-[80%] mx-auto">
            <div className="flex gap-10 my-10">
                <div className="text-[#250E62] w-[40%] leading-5">
                    <div className="text-4xl font-bold">
                        <h1>Hỗ trợ 24/7 giúp bạn thành công </h1>
                        <div className="text-base mt-5 font-normal space-y-4">
                            <p>
                                <span className="text-[#00B090] mt-1 mr-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Cần trợ giúp với trang web của bạn? Nhận hỗ trợ từ chuyên gia thông qua trò chuyện trực tuyến hoặc email.
                            </p>
                            <p>
                                <span className="text-[#00B090] mt-1 mr-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Không còn mất công chờ đợi - chúng tôi giải quyết mọi vấn đề trong vòng 3 phút.
                            </p>
                            <p>
                                <span className="text-[#00B090] mt-1 mr-2">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Xóa bỏ rào cản ngôn ngữ - nhân viên của chúng tôi thành thạo hơn 10 ngôn ngữ.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[60%]">
                    <img
                        className="w-full h-auto rounded ml-auto"  
                        src="https://simplycontact.com/wp-content/uploads/2023/03/Customer-Support-Outsourcing-Department.png.webp"/>
                </div>
            </div>
            <AnimatePresence mode="wait">
            <motion.div 
                className="flex gap-10 py-12"
                initial = {{ opacity: 0, x: 50 }}
                animate = {{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
                exit = {{ opacity: 0, x: -50, transition: { duration: 0.5 } }}
            >
                <div className="w-[350px] h-[470px] rounded-lg">
                    <img className="w-full h-full object-cover rounded-xl" src={comments[currentComment].image}/>
                </div>
                <div className="w-[60%] my-auto text-[#250E62]">
                    <div className="text-3xl">{comments[currentComment].comment}</div>
                    <div className="border-[1px] border my-5"></div>
                    <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col font-bold">
                            {comments[currentComment].person}
                            <span>{comments[currentComment].carrer} | gatefootforge.co.uk</span>
                        </div>
                        <div className="flex gap-5">
                            <div 
                                className="h-[40px] w-[40px] flex items-center justify-center bg-[#D5DFFF] rounded-full cursor-pointer transition-colors duration-100 hover:bg-[#B197FC] hover:text-white"
                                onClick={() => handlePrevComment()}
                            >
                                <FontAwesomeIcon icon={faChevronRight} style={{color: "#250E62", transform: "rotate(180deg)"}} />
                            </div>
                            <div 
                                className="h-[40px] w-[40px] flex items-center justify-center bg-[#D5DFFF] rounded-full cursor-pointer transition-colors duration-100 hover:bg-[#B197FC] hover:text-white"
                                onClick={() => handleNextComment()}
                            >
                                <FontAwesomeIcon icon={faChevronRight} style={{color: "#250E62", }} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            </AnimatePresence>
        </div>
    </section>
}