import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AnimatedCounter = ( {ANIMATON_DURATION} ) => {
    const count = useMotionValue(100)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 500, { duration: 2, ease: "easeOut"})
        return () => controls.stop()
    })

    const CountUp = () => {
        return (
            <motion.pre 
                className=""
                initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATON_DURATION}}
            >
                {rounded}
            </motion.pre>
        )
    }

    return <>
        <div className="flex flex-col gap-1 items-start">
            <div className="text-xl md:text-2xl w-full uppercase font-semibold text-white text-center md:text-left mb-2">Số học viên đã đào tạo</div>
            <motion.pre className="text-[#F44486] font-bold text-5xl justify-center md:justify-start w-full md:text-6xl flex items-center gap-0">
                1,250,
                <CountUp/>
                <span className="ml-2">+</span>
            </motion.pre>
        </div>
    </>
};

export default AnimatedCounter;