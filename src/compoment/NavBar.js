import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    return <div className="flex text-[#D4E3ED] justify-between py-8">
        <div>
            <ul className="flex gap-10 items-end">
                <li className="text-[#FFCEBD]">
                    <h1 className="font-bold text-3xl">LOGO</h1>
                </li>
                <liv className="cursor-pointer self-end hover:text-[#B197FC] transition-colors duration-100">Giới Thiệu</liv>
                <li className="cursor-pointer self-end flex gap-2 hover:text-[#B197FC] transition-colors duration-100">
                    Các Khóa học lái xe 
                    <div>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </li>
                <liv className="cursor-pointer self-end hover:text-[#B197FC] transition-colors duration-100">Liên Hệ</liv>
            </ul>
        </div>
        <div className="self-end">
            <Button className="w-[10rem] h-[2rem]">Đăng ký ngay</Button>
        </div>
    </div>
}