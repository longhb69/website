import Button from "./Button";
import {useState} from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleRegisterClick = () => {
        navigate("/dang-ky");
    };

    return (
        <div className="bg-[#250E62] w-full">
            <div className="flex text-[#D4E3ED] bg-white md:bg-[#250E62] w-full md:w-[80%] md:mx-auto justify-between px-5 md:px-0 py-6">
                {/* Left Section */}
                <div className="flex items-center">
                    <h1 className="font-bold text-3xl text-[#FFCEBD]">LOGO</h1>

                    {/* Desktop Nav (Hidden on Mobile) */}
                    <ul className="hidden md:flex gap-10 ml-10 items-end">
                        <li className="cursor-pointer hover:text-[#B197FC] transition-colors duration-100">Giới Thiệu</li>
                        <li className="cursor-pointer flex gap-2 hover:text-[#B197FC] transition-colors duration-100">
                            Các Khóa học lái xe
                            <FontAwesomeIcon  icon={faChevronDown} />
                        </li>
                        <li className="cursor-pointer hover:text-[#B197FC] transition-colors duration-100">Liên Hệ</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="hidden md:block self-end">
                    <Button className="w-[10rem] h-[2rem]" onClick={handleRegisterClick}>
                        Đăng ký ngay
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-[#D4E3ED]" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={faBars} className="text-[#250E62] text-xl" />
                </button>

                {/* Mobile Menu (Dropdown) i want change this to drawer */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-[#1E293B] text-white p-4 shadow-md md:hidden">
                        <ul className="flex flex-col gap-4">
                            <li className="cursor-pointer hover:text-[#B197FC] transition-colors duration-100">Giới Thiệu</li>
                            <li className="cursor-pointer flex gap-2 hover:text-[#B197FC] transition-colors duration-100">
                                Các Khóa học lái xe
                                <FontAwesomeIcon icon={faChevronDown} />
                            </li>
                            <li className="cursor-pointer hover:text-[#B197FC] transition-colors duration-100">Liên Hệ</li>
                        </ul>
                        <Button className="w-full mt-4" onClick={handleRegisterClick}>
                            Đăng ký ngay
                        </Button>
                    </div>
                )}

            </div>
        </div>
    );
}
