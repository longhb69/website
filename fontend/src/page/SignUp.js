import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log("Form Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name Input */}
            <input {...register("name", { required: "Name is required" })} placeholder="Enter your name" className="border p-2 w-full" />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            {/* Email Input */}
            <input
                {...register("email", {
                    required: "Email is required",
                    pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                })}
                placeholder="Enter your email"
                className="border p-2 w-full"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            {/* Password Input */}
            <input
                type="password"
                {...register("password", { required: "Password is required", minLength: 6 })}
                placeholder="Enter your password"
                className="border p-2 w-full"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            {/* Submit Button */}
            <button disabled={isSubmitting} type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                {isSubmitting ? "Loading..." : "Submit"}
            </button>
        </form>
    );
}
