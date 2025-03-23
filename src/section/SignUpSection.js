import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../component/Button";

export default function SignUpSection({ className }) {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const [classSelected, setClassSelected] = useState(className);

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form Data:", data);
    };

    return (
        <section className="py-10 relative">
            <div className="absolute inset-0 z-[1] bg-[url('https://hips.hearstapps.com/hmg-prod/images/20715-2024-telluride-65426de131184.jpg')] bg-cover bg-center"></div>
            <div className="w-[70%] relative z-[2] mx-auto p-5 rounded-xl backdrop-blur-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Class (Dropdown) */}
                    <select
                        {...register("class", {
                            required: "Vui lòng chọn khóa",
                            validate: (value) => value !== "" || "Vui lòng chọn khóa",
                        })}
                        value={classSelected}
                        onChange={(e) => setClassSelected(e.target.value)}
                        className={`border rounded-xl p-2 w-full bg-white focus:ring-2 focus:ring-[#E13D46] cursor-pointer focus:outline-none
                        ${classSelected === "" ? "text-gray-400" : "text-black"}`}
                    >
                        <option value="" className="text-gray-400">
                            Chọn khóa học
                        </option>
                        <option value="B0.1" className="font-medium text-black">
                            B0.1
                        </option>
                        <option value="B" className="font-medium text-black">
                            B
                        </option>
                        <option value="C" className="font-medium text-black">
                            C
                        </option>
                        <option value="A1" className="font-medium text-black">
                            A1
                        </option>
                        <option value="A2" className="font-medium text-black">
                            A2
                        </option>
                    </select>
                    {errors.class && <p className="text-white">{errors.class.message}</p>}
                    {/* Name Input */}
                    <input
                        {...register("name", { required: "Name is required" })}
                        placeholder="Nhập tên bạn"
                        className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-[#E13D46] focus:outline-none"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <input
                        {...register("phonenumber", { required: "Yêu cầu số điện thoại", minLength: 8 })}
                        placeholder="Nhập số điện thoại"
                        className="border rounded-xl p-3 w-full focus:ring-2 focus:ring-[#E13D46] focus:outline-none"
                    />
                    {errors.phonenumber && <p className="text-red-500">{errors.phonenumber.message}</p>}

                    {/* Email Input */}
                    <input
                        {...register("email", {
                            required: false,
                            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                        })}
                        placeholder="Nhập email của bạn"
                        className="border rounded-xl p-3 w-full"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <div className="flex gap-5 text-white">
                        <div>Giới Tính: </div>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" {...register("gender", { required: "Vui lòng chọn giới tính" })} value="male" className="w-4 h-4" />
                            <span>Nam</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" {...register("gender", { required: "Vui lòng chọn giới tính" })} value="female" className="w-4 h-4" />
                            <span>Nữ</span>
                        </label>
                    </div>
                    <div className="flex gap-5 text-white">
                        <div>Liên lạc qua: </div>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                {...register("contact", { required: "Vui lòng chọn cách liên lạc" })}
                                value="zalo"
                                className="w-4 h-4"
                            />
                            <span>Zalo</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                {...register("contact", { required: "Vui lòng chọn cách liên lạc" })}
                                value="phone"
                                className="w-4 h-4"
                            />
                            <span>Điện thoại</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                {...register("contact", { required: "Vui lòng chọn cách liên lạc" })}
                                value="gmail"
                                className="w-4 h-4"
                            />
                            <span>Gmail</span>
                        </label>
                    </div>

                    <Button disabled={isSubmitting} type="submit" className="p-2 rounded w-full">
                        {isSubmitting ? "Loading..." : "ĐĂNG KÝ"}
                    </Button>
                </form>
            </div>
        </section>
    );
}
