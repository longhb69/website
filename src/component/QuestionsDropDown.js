import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function QuestionsDropDown() {
    const [openIndex, setOpenIndex] = useState({});

    const toggleDropdown = (index) => {
        setOpenIndex((prev) => ({
            ...prev,
            [index] : !prev[index]
        }));
    };

    const questionsItems = [
        { 
            title: "Độ tuổi để đăng ký học lái xe?", 
            answer: `
                    <p>Độ tuổi để có thể đăng ký học lái xe tại Trung tâm được quy định tại <strong>thông tư 58/2015/TT-BGTVT</strong> như sau:</p>
                        <ul class="list-disc pl-5">
                            <li><strong>Đủ 18 tuổi</strong> trở lên được phép học bằng lái xe mô tô hạng A1, ô tô hạng B1, B2.</li>
                            <li><strong>Đủ 21 tuổi</strong> trở lên được phép học bằng lái xe ô tô hạng C.</li>
                            <li><strong>Đủ 24 tuổi</strong> trở lên được phép học bằng lái xe ô tô hạng D & đủ số Km lái xe an toàn theo quy định.</li>
                            <li><strong>Đủ 27 tuổi</strong> trở lên được phép học bằng lái xe ô tô hạng E & đủ số Km lái xe an toàn theo quy định.</li>
                        </ul>
                    <p>Tuổi tối đa để đăng ký học bằng E là <strong>55 tuổi đối với Nam</strong>, <strong>50 tuổi đối với Nữ</strong>.</p>
                    `
        },
        { title: "Hồ sơ của người học lái xe?", answer: "Answer 2" },
        { title: "Thời gian học lái xe?", answer: "Answer 3" },
        { title: "Học phí học lái xe tại Trung tâm?", answer: "Answer 3" },
        { title: "Học lái xe ô tô vào thứ 7 và chủ nhật?", answer: "Answer 3" },
        { title: "Học lý thuyết xe máy tôi có được tự học ở nhà?", answer: "Answer 3" },
    ];
    return (
        <motion.div 
            className="relative w-full"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeIn"}}
        >
            <ul className="w-full text-xl text-[#250E62] rounded-lg font-bold">
                {questionsItems.map((question, index) => (
                    <li>
                        <div 
                            key={index} 
                            className={`
                                border border-[#D5DFFF] p-7 mb-2 rounded-xl cursor-pointer bg-white transition-all `}
                            onClick={() => toggleDropdown(index)}
                        >
                            <button className='flex items-center justify-between gap-4 text-left w-full'>
                                {question.title}
                                <motion.div
                                    animate={{ rotate: openIndex[index] ? 180 : 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="bg-[#B197FC] rounded-full p-2 h-[25px] w-[25px] flex items-center justify-center"
                                >
                                    <FontAwesomeIcon icon={openIndex[index] ? faMinus : faPlus} className={`text-black text-sm`}/>
                                </motion.div>
                            </button>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{
                                    opacity: openIndex[index] ? 1 : 0,
                                    y: 10,
                                    height: openIndex[index] ? "auto" : 0,
                                }}
                                transition={{ duration: 0.2 }}
                                className={`overflow-hidden bg-white`}
                            >
                                <div 
                                    className="text-[#2f1c6a] cursor-default text-base font-normal py-5"
                                    dangerouslySetInnerHTML={{ __html: question.answer }}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                </div>
                            </motion.div>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
  )
}
