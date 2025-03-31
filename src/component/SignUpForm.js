import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../component/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPhone, 
    faEnvelope, 
    faUser, 
    faLocationDot,
    faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function SignUpForm({ licenseType }) {
    const [licenseSelected, setLicenseSelected] = useState(licenseType)
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission
    };

    useEffect(() => {
        setLicenseSelected(licenseType)
    }, [licenseType])

    return (
        <div className="pt-10 sticky top-5">
            <div className="container mx-auto px-0 md:px-4">
                <motion.div 
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-5">
                        <h2 className="text-4xl font-bold text-[#250E62] mb-4">
                            Đăng Ký Ngay
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Để lại thông tin để được tư vấn miễn phí
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl border-2 shadow-xl p-8">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            {/* Họ và tên */}
                            <div>
                                <div className="relative">
                                    <FontAwesomeIcon 
                                        icon={faUser} 
                                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.fullName ? 'text-red-500' : 'text-gray-400'}`}
                                    />
                                    <input 
                                        {...register("fullName", { 
                                            required: "Vui lòng nhập họ và tên",
                                            minLength: {
                                                value: 2,
                                                message: "Họ và tên phải có ít nhất 2 ký tự"
                                            }
                                        })}
                                        className={`w-full px-4 py-4 rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-gray-200'} focus:border-[#250E62] focus:ring-1 focus:ring-[#250E62] outline-none transition-all pl-12`}
                                        placeholder="Họ và tên"
                                    />
                                </div>
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.fullName.message}</p>
                                )}
                            </div>

                            {/* Số điện thoại */}
                            <div>
                                <div className="relative">
                                    <FontAwesomeIcon 
                                        icon={faPhone} 
                                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.phone ? 'text-red-500' : 'text-gray-400'}`}
                                    />
                                    <input 
                                        {...register("phone", { 
                                            required: "Vui lòng nhập số điện thoại",
                                            pattern: {
                                                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                                                message: "Số điện thoại không hợp lệ"
                                            }
                                        })}
                                        className={`w-full px-4 py-4 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:border-[#250E62] focus:ring-1 focus:ring-[#250E62] outline-none transition-all pl-12`}
                                        placeholder="Số điện thoại"
                                    />
                                </div>
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.phone.message}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <div className="relative">
                                    <FontAwesomeIcon 
                                        icon={faEnvelope} 
                                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.email ? 'text-red-500' : 'text-gray-400'}`}
                                    />
                                    <input 
                                        {...register("email", { 
                                            required: "Vui lòng nhập email",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Email không hợp lệ"
                                            }
                                        })}
                                        className={`w-full px-4 py-4 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:border-[#250E62] focus:ring-1 focus:ring-[#250E62] outline-none transition-all pl-12`}
                                        placeholder="Email"
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Địa chỉ */}
                            <div>
                                <div className="relative">
                                    <FontAwesomeIcon 
                                        icon={faLocationDot} 
                                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.address ? 'text-red-500' : 'text-gray-400'}`}
                                    />
                                    <input 
                                        {...register("address", { 
                                            required: "Vui lòng nhập địa chỉ" 
                                        })}
                                        className={`w-full px-4 py-4 rounded-xl border ${errors.address ? 'border-red-500' : 'border-gray-200'} focus:border-[#250E62] focus:ring-1 focus:ring-[#250E62] outline-none transition-all pl-12`}
                                        placeholder="Địa chỉ"
                                    />
                                </div>
                                {errors.address && (
                                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.address.message}</p>
                                )}
                            </div>

                            {/* Hạng bằng */}
                            <div>
                                <div className="relative">
                                    <FontAwesomeIcon 
                                        icon={faGraduationCap} 
                                        className={`absolute left-4 top-1/2 -translate-y-1/2 ${errors.licenseType ? 'text-red-500' : 'text-gray-400'}`}
                                    />
                                    <select 
                                        {...register("licenseType", { 
                                            required: "Vui lòng chọn hạng bằng" 
                                        })}
                                        value={licenseSelected}
                                        onChange={(e) => setLicenseSelected(e.target.value)}
                                        className={`w-full px-4 py-4 rounded-xl border ${errors.licenseType ? 'border-red-500' : 'border-gray-200'} focus:border-[#250E62] focus:ring-1 focus:ring-[#250E62] outline-none transition-all pl-12 appearance-none bg-white`}
                                    >
                                        <option value="">Chọn hạng bằng</option>
                                        <option value="B0.1">Bằng B0.1</option>
                                        <option value="B">Bằng B</option>
                                        <option value="C">Bằng C</option>
                                        <option value="A1">Bằng A1</option>
                                        <option value="A1">Bằng A2</option>
                                    </select>
                                </div>
                                {errors.licenseType && (
                                    <p className="text-red-500 text-sm mt-1 ml-1">{errors.licenseType.message}</p>
                                )}
                            </div>

                            <button 
                                type="submit"
                                className="w-full bg-[#F54343] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#E03333] transition-all duration-300 mt-6"
                            >
                                Đăng Ký Ngay
                            </button>
                        </form>

                        <div className="mt-6 text-center text-gray-600">
                            <p>Hoặc liên hệ hotline để được tư vấn:</p>
                            <a 
                                href="tel:0123456789" 
                                className="text-[#F54343] font-semibold text-xl hover:text-[#E03333] transition-colors mt-2 inline-block"
                            >
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                0123 456 789
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
