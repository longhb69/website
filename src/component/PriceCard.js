import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PriceCard({ info }) {
    const { name, base_price, price, discount, time } = info;
    const navigate = useNavigate();

    const features = [
        "Học 1 thầy 1 trò",
        `Thời gian đào tạo và thi: ${time}`,
        "Thời gian linh hoạt",
        "Học phí trọn gói 100%"
    ];

    return (
        <div
            className="bg-white border border-gray-400 w-[100%] lg:w-[30%] h-[600px] rounded-xl text-[#250E62] 
                      hover:-translate-y-2 transition-transform duration-300 ease-in-out"
        >
            <div className="p-6">
                {/* Header */}
                <h1 className="font-bold text-4xl mb-2">{name}</h1>
                <div className="flex items-center gap-2 flex-wrap">
                    <div className="font-normal text-lg text-gray-500 line-through">
                        {base_price} VNĐ
                    </div>
                    <div className="bg-[#D5DFFF] text-xs md:text-sm font-bold rounded-full px-3 py-2">
                        Giảm {discount}k khi đăng ký online
                    </div>
                </div>

                {/* Price */}
                <div className="text-4xl font-bold py-3">
                    {price} <span className="text-xl font-semibold">VNĐ</span>
                </div>

                {/* Action Buttons */}
                <Button
                    variant="thirdary"
                    className="text-[#6C43E6] border border-[#6C43E6] w-full mb-5 mt-3 shadow-xl group"
                    onClick={() => navigate(`hangxe/${name}`)}
                >
                    <span className="flex items-center justify-center">
                        Đăng ký ngay
                        <FontAwesomeIcon 
                            icon={faArrowRight} 
                            className="ml-2 transform group-hover:translate-x-1 transition-transform"
                        />
                    </span>
                </Button>
                
                <div className="text-[#6C43E6] font-medium">
                    Giảm 100k/HV khi đăng ký nhóm
                </div>

                <div className="border-t border-gray-200 my-5"></div>

                {/* Features */}
                <div className="space-y-3">
                    {features.map((feature, index) => (
                        <div key={index} className="text-gray-700 flex items-start gap-2">
                            <span className="text-[#00B090] mt-1">
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            {feature.includes('Thời gian đào tạo') ? (
                                <div>
                                    Thời gian đào tạo và thi:{' '}
                                    <span className="text-red-600">{time}</span>
                                </div>
                            ) : (
                                feature
                            )}
                        </div>
                    ))}
                </div>

                {/* Detail Button */}
                <Button 
                    variant="secondary" 
                    className="mt-5 w-full hover:shadow-lg transition-shadow"
                >
                    Xem Chi Tiết
                </Button>
            </div>
        </div>
    );
}
