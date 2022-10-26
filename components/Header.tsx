import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { Social } from '../typings';

type Props = {
    socials: Social[]
}

export default function Header({ socials }: Props) {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto 
  z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center">
                {/* Socal Icons */}
                {socials.map((social)=> (
                    <SocialIcon
                    key={social._id}
                     url={social.url}
                        fgColor="gray"
                        bgColor="transparent"
                    />
                ))}
                {/* <SocialIcon url="https://www.linkedin.com/in/ritesh-kumar-3a5735171/"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon url="https://twitter.com/RiteshK50645565"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon url="https://www.instagram.com/ritesh.kumar4404/"
                    fgColor="gray"
                    bgColor="transparent"
                /> */}
            </motion.div>

            <Link href="#contact" >

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center tetx-gray-300 cursor-pointer">
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    Get In Touch
                </p>
            </motion.div>
            </Link>
        </header>
    );

}