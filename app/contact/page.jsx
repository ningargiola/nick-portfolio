"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(650) 866-0446'
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'ningargiola1@gmail.com'
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: '4954 Cresita Dr, San Diego, CA 92115'
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section 
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{ delay: 2.4, duration: 0.4, ease: 'easeIn'},
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p>
                                I am actively looking for an internship that can help me grow as a software engineer.
                            </p>
                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="Phone number" />
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a timezone"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup label="Timezone">
                                        <SelectLabel>Timezone</SelectLabel>
                                        <SelectItem value="PST">PST</SelectItem>
                                        <SelectItem value="EST">EST</SelectItem>
                                        <SelectItem value="UTC">UTC</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[200px]" placeholder="Type a message" />
                            {/* button */}
                            <Button size="md" className="max-w-40">Send Message</Button>
                        </form>
                    </div>
                    {/* contact info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item,index)=>{
                                return (
                                    <li key={index} className="flex items-center gap-6">
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] 
                                        bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>

                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact