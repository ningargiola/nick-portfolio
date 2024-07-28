"use client";

import { motion} from "framer-motion";
import Image from "next/image";

const MobileLogo = () => {
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
                        transition: {delay:0.5, duration:0.4, ease: "easeInOut"}
                    }} 
                className="w-[100px] h-[100px] xl:w-[60px] xl:h-[60px] mix-blend-lighten">
                    <Image src="/assets/logo.png" priority qualityy={100} fill 
                    alt="" className="object-contain" />
                </motion.div>
            </motion.div>
            </div>
    )
};

export default MobileLogo;