import Button from "./Button";
import {useState, useRef, useEffect} from "react"
import { motion, AnimatePresence  } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faX } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    const handleRegisterClick = () => {
        const section = document.getElementById("register"); 
        if (section) {
            section.scrollIntoView();
          }
    };

    const handleSmoothScroll = (event) => {
        event.preventDefault(); 
        const target = document.getElementById("about");
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false)
        }
    };

    return (
        <div className="bg-[#250E62] w-full">
            <div className="flex max-w-7xl relative text-[#D4E3ED] bg-[#F54343] md:bg-[#250E62] w-full md:w-[80%] md:mx-auto justify-between items-center px-5 md:px-0 py-6">
                {/* Left Section */}
                <div className="flex items-center">
                    <h1 className="font-bold text-3xl text-[#FFCEBD]">LOGO</h1>

                    {/* Desktop Nav (Hidden on Mobile) */}
                    <ul className="hidden md:flex gap-10 ml-10 items-end">
                        <li className="cursor-pointer hover:text-[#B197FC] transition-colors duration-100">
                            <a href="#about" onClick={handleSmoothScroll}>
                                Giới Thiệu
                            </a>
                        </li>
                        <li className="relative" ref={dropdownRef}>
                            <button
                                className="cursor-pointer flex items-center gap-2 hover:text-[#B197FC] transition-colors duration-100"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                               Các Khóa học lái xe
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    className={`transition-transform duration-300 ${
                                    isDropdownOpen ? "rotate-180" : "rotate-0"
                                    }`}  
                                />       
                            </button>
                            <AnimatePresence>
                                {isDropdownOpen && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="absolute left-0 font-semibold mt-2 w-64  bg-[#FFCEBD] text-[#250E62] shadow-lg rounded-lg overflow-hidden"
                                    >
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => navigate("hangxe/B0.1")}>Học lái xe ôtô hạng B0.1</li>
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => navigate("hangxe/B")}>Học lái xe ôtô hạng B</li>
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => navigate("hangxe/C")}>Học lái xe ôtô hạng C</li>
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => navigate("hangxe/A1")}>Học lái xe máy hạng A1</li>
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => navigate("hangxe/A2")}>Học lái xe máy hạng A2</li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className="cursor-pointer hover:text-[#B197FC] transition-colors duration-100">
                            <a href="#pricing">
                                Giá cả
                            </a>
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
                    <FontAwesomeIcon icon={menuOpen ? faX : faBars} className="text-[#250E62] text-xl" />
                </button>

                {/* Mobile Menu (Dropdown) i want change this to drawer, shit this getting messy*/}
                <AnimatePresence>
                    {menuOpen && (
                            <motion.div 
                                initial={{x: "100%"}}
                                animate={{ x: menuOpen ? "0%" : "100%" }}
                                exit={{ x: "100%" }}
                                transition={{ type: "tween", duration: 0.3 }}
                                className="absolute top-full right-0 w-full bg-white text-[#250E62] font-semibold shadow-md md:hidden z-50 h-screen"
                            >
                                <ul className="flex flex-col gap-4">
                                    <li className="cursor-pointer transition-colors duration-100 border-b border-gray-300 p-4">
                                        <a href="#about" onClick={handleSmoothScroll}>
                                            Giới Thiệu
                                        </a>
                                    </li>
                                    <li 
                                        className="cursor-pointer flex flex-col transition-colors duration-100 border-b border-gray-300"
                                    >
                                        <button 
                                            className="flex items-center gap-5 p-4"
                                            onClick={() => {
                                                setIsMobileDropdownOpen(!isMobileDropdownOpen); 
                                            }}
                                        >
                                            <span>Các Khóa học lái xe</span>
                                            <FontAwesomeIcon
                                                icon={faChevronDown}
                                                className={`transition-transform duration-300 ${
                                                    isMobileDropdownOpen ? "rotate-180" : "rotate-0"
                                                }`}   
                                            />   
                                        </button>
                                        <AnimatePresence>
                                        {isMobileDropdownOpen && (
                                                <motion.ul 
                                                    initial={{ opacity: 0, height: 0 }} 
                                                    animate={{ opacity: 1, height: "auto" }} 
                                                    exit={{ opacity: 0, height: 0 }} 
                                                    transition={{ duration: 0.1 }} 
                                                    className="bg-white px-6 text-[#250E62]"
                                                >
                                                    <li className="px-4 py-4 cursor-pointer border-b border-gray-300" onClick={() => navigate("hangxe/B0.1")}>Học lái xe ôtô hạng B0.1</li>
                                                    <li className="px-4 py-4 cursor-pointer border-b border-gray-300" onClick={() => navigate("hangxe/B")}>Học lái xe ôtô hạng B</li>
                                                    <li className="px-4 py-4 cursor-pointer border-b border-gray-300" onClick={() => navigate("hangxe/C")}>Học lái xe ôtô hạng C</li>
                                                    <li className="px-4 py-4 cursor-pointer border-b border-gray-300" onClick={() => navigate("hangxe/A1")}>Học lái xe máy hạng A1</li>
                                                    <li className="px-4 py-4 cursor-pointer" onClick={() => navigate("hangxe/A2")}>Học lái xe máy hạng A2</li>
                                                </motion.ul>
                                        )}
                                        </AnimatePresence>
                                    </li>
                                    <li className="cursor-pointer transition-colors duration-100 border-b border-gray-300 p-4">
                                        <a href="#pricing">
                                            Giá Cả
                                        </a>
                                    </li>
                                    <li className="cursor-pointer transition-colors duration-100 border-b border-gray-300 p-4">Liên Hệ</li>
                                </ul>
                                <div className="px-4">
                                    <Button className="w-full mt-10" onClick={handleRegisterClick}>
                                        Đăng ký ngay
                                    </Button>
                                </div>
                            </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

//#B197FC