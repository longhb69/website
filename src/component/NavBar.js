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

    const Path = (props) => {
        return (
            <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="hsl(0, 0%, 18%)"
                strokeLinecap="round"
                {...props}
            />
        )
    }

    const MenuToggle = ({ toggle, isOpen }) => {
        return (
            <button 
                className="outline-none flex items-center justify-center border-none select-none cursor-pointer w-[50px] h-[50px] rounded-full bg-transparent md:hidden" 
                onClick={toggle}
            >
                <svg width="23" height="23" viewBox="0 0 23 23">
                    {/* Top Line */}
                    <Path
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" },
                        }}
                    />
                    {/* Middle Line (Fades Out) */}
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 },
                        }}
                        transition={{ duration: 3 }}
                    />
                    {/* Bottom Line */}
                    <Path
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" }, // Horizontal
                            open: { d: "M 3 2.5 L 17 16.346" },  // Bottom-right to top-left (X)
                        }}
                    />
                </svg>
            </button>
        );
    };

    const handleNavigate  = (event, sectionId) => {
        event.preventDefault();
        const target = document.getElementById(sectionId);
        
        if(target) {
            target.scrollIntoView({});
        } else {
            navigate(`/#${sectionId}`)
        }
    }
    

    return (
        <div className="md:bg-[#FFFFFF] w-full h-[20%]">
            <div className="flex w-full md:w-[80%] md:mx-auto p-5 md:px-0 md:py-3 relative text-[#121212] bg-transparent justify-between items-center">
                {/* Left Section */}
                <div className="flex font-semibold items-center h-full">
                    <a href="/" className="bg-white md:ml-5 rounded-full">
                        <img src="/logo512.png" alt="Logo" className="h-14 w-auto" />
                    </a>
                    
                    {/* Desktop Nav (Hidden on Mobile) */}
                    <ul className="hidden md:flex gap-10 ml-10 items-end">
                        <li className="cursor-pointer h-14 flex items-center hover:text-[#121212] transition-colors duration-100">
                            <a href="#about h-full" onClick={(e) => handleNavigate(e, "about")}>
                                Giới Thiệu
                            </a>
                        </li>
                        <li className="relative h-14 flex items-center" ref={dropdownRef}>
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
                                        className="absolute left-0 top-[80%] font-semibold mt-2 w-64  bg-[#FFCEBD] text-[#250E62] shadow-lg rounded-lg overflow-hidden"
                                    >
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => { navigate("/hangxe/B0.1"); setIsDropdownOpen(false)}}>Học lái xe ôtô hạng B0.1</li>
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => { navigate("/hangxe/B"); setIsDropdownOpen(false)   }}>Học lái xe ôtô hạng B</li>
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => { navigate("/hangxe/C"); setIsDropdownOpen(false)   }}>Học lái xe ôtô hạng C</li>
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => { navigate("/hangxe/A1"); setIsDropdownOpen(false)  }}>Học lái xe máy hạng A1</li>
                                        <li className="px-4 py-2 hover:bg-[#E13D46] hover:text-white cursor-pointer" onClick={() => { navigate("/hangxe/A2"); setIsDropdownOpen(false)  }}>Học lái xe máy hạng A2</li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                        <li className="cursor-pointer h-14 flex items-center hover:text-[#B197FC] transition-colors duration-100">
                            <a href="#pricing" onClick={(e) => handleNavigate(e, "pricing")}>
                                Giá cả
                            </a>
                        </li>
                        <li className="cursor-pointer h-14 flex items-center hover:text-[#B197FC] transition-colors duration-100 ">Liên Hệ</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="hidden md:block text-semibold self-center mt-2">
                    <Button className="w-[10rem] h-[2rem]" onClick={handleRegisterClick}>
                        Đăng ký ngay
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                {/*<button 
                    className="md:hidden text-[#D4E3ED] h-full" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={menuOpen ? faX : faBars} className="text-[#250E62] text-xl" />
                </button>*/}

                <motion.nav
                    initial={false}
                    animate={menuOpen ? "open": "closed"}
                    className="md:hidden"
                >
                    <MenuToggle toggle={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
                </motion.nav>

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
                                                    <li className="px-4 py-4 cursor-pointer border-b border-gray-300" onClick={() => { navigate("/hangxe/B0.1"); setMenuOpen(false)}}>Học lái xe ôtô hạng B0.1</li>
                                                    <li className="px-4 py-4 cursor-pointer border-b border-gray-300" onClick={() => { navigate("/hangxe/B"); setMenuOpen(false)   }}>Học lái xe ôtô hạng B</li>
                                                    <li className="px-4 py-4 cursor-pointer border-b border-gray-300" onClick={() => { navigate("/hangxe/C"); setMenuOpen(false)   }}>Học lái xe ôtô hạng C</li>
                                                    <li className="px-4 py-4 cursor-pointer border-b border-gray-300" onClick={() => { navigate("/hangxe/A1"); setMenuOpen(false)  }}>Học lái xe máy hạng A1</li>
                                                    <li className="px-4 py-4 cursor-pointer" onClick={() => { navigate("/hangxe/A2"); setMenuOpen(false)  }}>Học lái xe máy hạng A2</li>
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