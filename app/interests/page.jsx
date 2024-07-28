"use client";

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const interests = [
    {
        num: '01',
        title:'AI & Machine Learning',
        description: 'I have a passion for AI and machine learning. I have worked on a few projects in this field and I am always looking to learn more.',
    },
    {
        num: '02',
        title:'Software Development',
        description: 'I enjoy developing software and have experience with multiple programming languages.',
    },
    {
        num: '03',
        title:'Web Development',
        description: 'I have experience with web development and have worked on a few projects in this field.',
    },
    {
        num: '04',
        title:'CyberSecurity',
        description: 'Im interested in cybersecurity and a member of the SDSU cyber defense team.',
    },
];

import { motion } from "framer-motion";

const Interests = () => {
    return (
        <section className ="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{opacity: 0}} 
                animate={{
                    opacity: 1, 
                    transition: {delay:2.4, duration:0.4, ease: "easeIn"}
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {interests.map((interests, index) => {
                    return (
                        <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            {/*Top*/}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline 
                                text-transparent group-hover:text-outline-hover transition-all
                                duration-500">
                                    {interests.num}
                                </div>
                                <Link href={interests} className="w-[70px] h-[70px] rounded-full bg-white 
                                group-hover:bg-accent transition-all duration-500 flex justify-center 
                                items-center group-hover:-rotate-90">
                                    <BsArrowDownRight className="text-primary text-3xl" />
                                </Link>
                            </div>
                            {/*title*/}
                            <h2 className="text-[42px] font-bold leading-none text-white 
                            group-hover:text-accent transition-all duration-500">{interests.title}</h2>
                            {/*Description*/}
                            <p className="text-white/60">{interests.description}</p>
                            {/*Border*/}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    );
                })}
                </motion.div>
            </div>
        </section>
    );
};

export default Interests