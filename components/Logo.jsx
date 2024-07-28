"use client";

import { motion} from "framer-motion";
import Image from "next/image";

const Logo = () => {
    return(
        <div className="w-full h-full relative">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay:2, duration:0.4, ease: "easeIn"}
                }}
            >
                {/*Photo*/}
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay:2.4, duration:0.4, ease: "easeInOut"}
                    }} 
                className="w-[60px] h-[60px] mix-blend-lighten">
                    <Image src="/assets/logo.png" priority qualityy={100} fill 
                    alt="" className="object-contain" />
                </motion.div>
            </motion.div>
            </div>
    )
};

export default Logo;