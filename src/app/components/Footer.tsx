import React from 'react';
import Logo from "@/assets/Logo.png";
import Image from 'next/image';
import facebookIcon from "@/assets/facebookIcon.svg";
import instagramIcon from "@/assets/InstagramIcon.svg";
import linkedInIcon from "@/assets/LinkedInIcon.svg";
import twitterIcon from "@/assets/twitterIcon.svg";
import Link from 'next/link';
import logo from "@/assets/WDMob.png"

const Footer = () => {
    const menuItems = [
        { name: "Home", url: "/" },
        { name: "Services", url: "#services" },
        { name: "Portfolio", url: "#portfolio" },
        { name: "Testimonials", url: "#testimonials" },
        { name: "Contact", url: "#contact" }
    ];

    const icons = [
        { icon: facebookIcon, alt: 'Facebook', url: 'https://www.facebook.com' },
        { icon: instagramIcon, alt: 'Instagram', url: 'https://www.instagram.com' },
        { icon: linkedInIcon, alt: 'LinkedIn', url: 'https://www.linkedin.com' },
        { icon: twitterIcon, alt: 'Twitter', url: 'https://www.twitter.com' }
    ];

    return (
        <div className='flex flex-col'>
            <div className='pt-[150px]'></div>
            <div className='w-full h-[1px] bg-back'></div>
            <div className='pt-[62px] lg:pl-[80px] md:pl-[80px] sm:pl-[0px] flex flex-col flex-grow'>
                <div className='flex md:flex-row sm:flex-col lg:flex-row flex-col md:justify-between sm:justify-center lg:justify-between items-center'>
                    <Image src={Logo} alt="Logo" className='h-[66px] w-[100px] sm:hidden md:flex lg:flex hidden' />
                    <Image src={logo} alt="logo" className='h-[38px] w-[80px] lg:hidden sm:flex md:hidden flex' />
                    <span className='text-[16px] font-medium text-center sm:pt-[16px] md:pt-0 lg:pt-0 pt-[16px] lg:hidden sm:flex md:hidden flex' >Wide Dimension</span>
                    <ul className='flex gap-[30px] sm:pt-[30px] md:pt-0 lg:pt-[0px] pt-[50px] flex-col sm:flex-row lg:pr-[50px] md:pr-[50px] sm:pr-[0px]'>
                        {menuItems.map((item) => (
                            <li key={item.url} className='flex justify-center items-center'>
                                <a
                                    href={item.url}
                                    className="flex items-center font-[400] text-[16px] tracking-[2%] leading-[24px] "
                                >
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex lg:justify-end justify-center md:justify-end sm:justify-center lg:pr-[35px] pr-[0px] md:pr-[35px]  sm:pt-[40px] md:pt-0 lg:pt-[0px] pt-[50px]'>
                    <div className='flex items-center pr-[50px] gap-[30px] max-w-[186px] h-[40px]'>
                        {icons.map((item, index) => (
                            <Image
                                key={index}
                                src={item.icon}
                                alt={item.alt}
                                width={24}
                                height={24}
                            />

                        ))}
                    </div>
                </div>
            </div>
            <div className="w-full h-[24px] flex justify-center text-center items-center lg:pt-[47px] sm:pt-[47px] md:[47px] pt-[30px] pb-[40px]">
                <span className="font-[500] sm:text-[16px] text-[12px] tracking-[2%] leading-[24px]">
                    ©All rights reserved
                    <span className="primary-gradient"> Wide Dimension </span>
                    2024
                </span>
            </div>

        </div>
    );
};

export default Footer;
