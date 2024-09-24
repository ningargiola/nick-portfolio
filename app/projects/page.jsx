"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide, handleSlideChange } from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";


const projects = [
    {
        num:'01',
        category:'Full Stack',
        title:'Weather App',
        description:'A weather application that uses real time data (IN PROGRESS)',
        stack: [{name:'TypeScript'}, {name:'Weather API'}, {name:'Shadcdn'}],
        image: '/assets/Weatherproject.jpeg',
        live: "https://nicksweather.vercel.app",
        github: "https://github.com/ningargiola/weather-app",
    },
    {
        num:'02',
        category:'API',
        title:'Voice Assistant',
        description:'An AI voice assistant created using the OpenAI API',
        stack: [{name:'Python'}, {name:'TTS'}, {name:'OpenAI'}],
        image: '/assets/AIprojectphoto.png',
        live: "",
        github: "",
    },
    {
        num:'03',
        category:'Machine Learning',
        title:'Jet-Fuel RUL Prediction',
        description:'This project utilizes machine learning techniques to predict the Remaining Useful Life (RUL) of jet engines using data from engine sensors. ',
        stack: [{name:'Python'}],
        image: '/assets/JetEnginePred.jpg',
        live:"",
        github: "https://github.com/ningargiola/Jet-Fuel_RUL-Prediction",
    },

];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentSlide = swiper.activeIndex;
        // update project state
        setProject(projects[currentSlide]);
    };

    return (
        <motion.section 
            initial = {{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex 
                    flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white 
                            group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} Project
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* project stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item,index)=>{
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {/* add comma if not last item */}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* Live project button */}
                                <Link href= {project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                                            bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl 
                                                group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>View Live</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Github button */}
                                <Link href= {project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                                            bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl 
                                                group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index)=>{
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center
                                        items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {/* slider buttons */}
                           <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                           xl:bottom-0 z-20 w-full justify-between xl:w-max 
                           xl:justify-none" btnStyles="bg-accent hover-bg-accent-hover text-primary
                           text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;