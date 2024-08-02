"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info =[
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "+1 (312) 619-7812"
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "agarwal.dhruv1234 [at] gmail [dot] com"
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Chicago, IL"
    },
];

import { animate, motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial = {{opacity:0}}
            animate ={{
                opacity: 1,
                transition: { delay: 1.8, duration: 0.35, ease: "easeIn" },
            }}
            className="py-6"
        >
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row gap-[30px]">
                {/* form */}
                <div className="xl:w-[54%] order-2 xl:order-none">
                    <form className="flex flex-col gap-6 p-10 bg-[#27272c]">
                        <h3 className="text-4xl text-accent">
                            Let's connect!
                        </h3>
                        <p className="text-white/60">
                            Drop me a message if you wanna work together, talk about tech or just wanna vibe.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input type= "firstname" placeholder= "First Name" />
                            <Input type= "lastname" placeholder= "Last Name" />
                            <Input type= "email" placeholder= "Email Address" />
                            <Input type= "phone" placeholder= "Phone Number" />
                        </div>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder= "Select a reason" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {/* <SelectLabel>Select a Service</SelectLabel> */}
                                    <SelectItem value = "est">Work opportunity</SelectItem>
                                    <SelectItem value = "cst">Talk about tech</SelectItem>
                                    <SelectItem value = "mst">Straight vibes</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Textarea 
                            className = "h-[200px]"
                            placeholder = "Type your message here." />
                        {/* btn */}
                        <Button size="md" className = "max-w-40">
                            Send Message
                        </Button>
                    </form>
                </div>
                {/* info */}
                <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                    <ul className="flex flex-col gap-10">
                        {info.map((item, index) =>{
                            return <li key={index} className="flex items-center gap-6">
                                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                    <div className="text-[28px]">{item.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/60">{item.title}</p>
                                    <h3 className="text-xl">{item.description}</h3>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
        </motion.section>
        
    );
};

export default Contact;