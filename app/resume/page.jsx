"use client";

// Languages
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws, FaDocker} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiCsharp, SiScala, SiRuby, SiMongodb, SiUnity, SiPostgresql, SiMysql, SiFirebase, SiDjango, SiApachecassandra, SiElasticsearch, SiRedis, SiGooglecloud, SiMicrosoftazure, SiApachekafka } from 'react-icons/si';
import { CgCPlusPlus } from 'react-icons/cg';
import { TbSql } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";

import { AiOutlineKubernetes } from "react-icons/ai";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// about data
const about = {
    title: "About Me",
    description: "<i style='color: var(--accent-color);'>what i cannot build,  do not understand.</i>",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Dhruv Agarwal"
        },
        {
            fieldName: "Phone",
            fieldValue: "+1 (312) 619-7812"
        },
        {
            fieldName: "Experience",
            fieldValue: "3 Years"
        },
        {
            fieldName: "Email",
            fieldValue: "agarwal.dhruv1234 [at] gmail [dot] com"
        },
    ]
};

// experience data
const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "I've worn a lot of hats over the years, here are some of them that fit.",
    items: [
        {
            company: "UIC Business",
            position: "Technical Associate",
            duration: "June 2024 - Present"
        },
        {
            company: "UIC Business",
            position: "Graduate Assistant",
            duration: "Jan 2023 - May 2024"
        },
        {
            company: "Competent Electric Company",
            position: "Software Engineer",
            duration: "June 2021 - July 2022"
        },
        {
            company: "YA Ventures",
            position: "Software Engineering Intern",
            duration: "May 2020 - July 2020"
        },
    ],
};

// education data
const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "Collecting degrees like infinity stones.",
    items: [
        {
            institution: "University of Illinois Chicago",
            degree: "Masters in Computer Science",
            duration: "May 2024",
        },
        {
            institution: "Vellore Institute of Technology",
            degree: "Bachelors in Computer Science",
            duration: "June 2021",
        },
    ],
};

// certification
const certification = {
    icon: "/assets/resume/cap.svg",
    title: "My Certifications",
    description: "Collecting certificates like infinity stones.",
    items: [
        {
            institution: "AWS",
            certificate: "AWS Certified Developer - Associate",
            duration: "Oct 2024",
        },
        {
            institution: "The Linux Foundation",
            certificate: "Certified Kubernetes Application Developer (CKAD)",
            duration: "Jan 2025",
        },
    ],
};

// skills data
const skills = {
    title: "My Skills",
    description: "Just a small list of tech I've dabbled in over the years.",
    skillList: [
        {
            heading: "Languages",
            skills: [
                { icon: <CgCPlusPlus />, name: "C++" },
                { icon: <FaPython />, name: "Python" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <FaJs />, name: "JavaScript" },
                { icon: <SiCsharp />, name: "C#" },
                { icon: <SiScala />, name: "Scala" },
                { icon: <TbSql />, name: "SQL" },
                { icon: <SiRuby />, name: "Ruby" },
            ],
        },
        {
            heading: "Web Technologies & Frameworks",
            skills: [
                { icon: <FaReact />, name: "React" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiDjango />, name: "Django" },
                { icon: <SiTailwindcss />, name: "Tailwind" },
                { icon: <FaHtml5 />, name: "HTML5" },
                { icon: <FaCss3 />, name: "CSS3" },
                { icon: <SiUnity />, name: "Unity" },
            ],
        },
        {
            heading: "Databases",
            skills: [
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <SiMysql />, name: "MySQL" },
                { icon: <SiFirebase />, name: "Firebase" },
                { icon: <SiApachecassandra />, name: "Apache Cassandra" },
                { icon: <SiElasticsearch />, name: "Elasticsearch" },
                { icon: <SiRedis />, name: "Redis" },
            ],
        },
        {
            heading: "Tools & Platforms",
            skills: [
                { icon: <FaGitAlt />, name: "Git" },
                { icon: <AiOutlineKubernetes />, name: "Kubernetes" },
                { icon: <FaDocker />, name: "Docker" },
                { icon: <SiApachekafka />, name: "Kafka" },
                { icon: <FaAws />, name: "AWS" },
                // { icon: <SiGooglecloud />, name: "GCP" },
                { icon: <SiMicrosoftazure />, name: "Microsoft Azure" },
                { icon: <GrGraphQl />, name: "GraphQL" },
                // { icon: <SiRestapi />, name: "REST APIs" },
            ],
        },
    ],
};

const Resume = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1.8, duration: 0.35, ease: "easeIn" },
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className='container mx-auto'>
                <Tabs
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        {/* <TabsTrigger value="certifications">Certifications</TabsTrigger> */}
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}

                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li key={index}
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>

                                {skills.skillList.map((skillCategory, index) => (
                                    <div key={index} className='mb-1'>
                                        <div className='hover:text-accent'>
                                        <h4 className='text-2xl font-semibold mt-0 mb-2 cursor-pointer'>{skillCategory.heading}</h4> 
                                        <div className='flex justify-center xl:justify-start gap-6'>
                                            {skillCategory.skills.map((skill, index) => (
                                                <TooltipProvider key={index}>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <div className='text-4xl bg-[#232329] p-1 rounded-lg cursor-pointer hover:text-white'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent side='top'>
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            ))}
                                        </div>
                                        </div>
                                        {/* <div className="border-b border-white/20 w-full"></div> */}
                                        
                                    </div>
                                ))}
                            </div>
                        </TabsContent>


                        {/* about */}
                        <TabsContent value="about" className='w-full text-center xl:text-left'>
                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='text-4xl font-bold'>{about.title}</h3>
                            <p className='max-w-[600px] text-accent mx-auto xl:mx-0' dangerouslySetInnerHTML={{ __html: about.description }} />
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620p] mx-auto xl:mx-0'>
                                {about.info.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className='flex items-center justify-center xl:justify-start gap-4 hover:text-accent'
                                        >
                                            <span className='text-white/60'>{item.fieldName}:</span>
                                            <span className='text-xl'>{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume;
