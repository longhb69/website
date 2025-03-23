import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function PriceCard({ info }) {
    const { name, base_price, price, discount, time } = info;
    const navigate = useNavigate();

    return (
        <div
            className="bg-[#fff] border-gray-400 w-[100%] lg:w-[30%] h-[600px] rounded-xl text-[#250E62] cursor-pointer border
                            hover:-translate-y-2 transition-transform duration-300 ease-in-out"
        >
            <div className="p-5">
                <h1 className="font-bold text-4xl mb-2">{name}</h1>
                <div className="flex items-center gap-2">
                    <div className="font-normal line-through">
                        {base_price} <span className="">VNĐ</span>
                    </div>
                    <div className="bg-[#D5DFFF] text-xs md:text-base font-bold rounded-full text-center p-2">
                        Giảm {discount}k khi đăng ký online
                    </div>
                </div>
                <div className="text-4xl font-bold py-3">
                    {price} <span className="text-xl font-semibold">VNĐ</span>
                </div>
                <Button
                    variant="thirdary"
                    className="text-[#6C43E6] border-1 font-bold border border-[#6C43E6] w-full mb-5 mt-3 shadow-xl"
                    onClick={() => navigate(`hangxe/${name}`)}
                >
                    Đăng ký ngay
                </Button>
                <div className="text-gray-700">Giảm 100k/HV khi đăng ký nhóm</div>
                <div className="border-[1px] border-s my-5"></div>
                <div className="text-black flex items-center gap-2">
                    <span className="text-[#00B090]">
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Học 1 thầy 1 trò
                </div>
                <div className="text-black flex items-center gap-2">
                    <div className="text-[#00B090]">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className="">
                        Thời gian đào tạo và thi: <span className="text-red-600">{time}</span>
                    </div>
                </div>
                <div className="text-black flex items-center gap-2">
                    <span className="text-[#00B090]">
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Thời gian linh hoạt
                </div>
                <div className="text-black flex items-center gap-2">
                    <span className="text-[#00B090]">
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    Học phí trọn gói 100%
                </div>
                <Button variant="secondary" className="mt-5 w-full">
                    Xem Chi Tiết
                </Button>
            </div>
        </div>
    );
}
