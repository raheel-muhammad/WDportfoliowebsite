import React from 'react';
import Logo from "@/assets/Logo.png";
import Image from 'next/image';
import facebookIcon from "@/assets/facebookIcon.svg";
import instagramIcon from "@/assets/InstagramIcon.svg";
import linkedInIcon from "@/assets/LinkedInIcon.svg";
import twitterIcon from "@/assets/twitterIcon.svg";
import Link from 'next/link';

const Footer = () => {
    const menuItems = [
        { name: "Home", url: "#home" },
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
        <div className='flex flex-col min-h-screen'>
            <div className='pt-[150px]'></div>
            <div className='w-full h-[1px] bg-back'></div>
            <div className='pt-[62px] pl-[80px] flex flex-col flex-grow'>
                <div className='flex justify-between items-center'>
                    <Image src={Logo} alt="Logo" className='h-[66px] w-[100px]' />
                    <ul className='flex gap-[30px] pr-[50px]'>
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
                <div className='flex justify-end pr-[35px]'>
                    <div className='flex items-center pr-[50px] gap-[30px] max-w-[186px] h-[40px]'>
                        {icons.map((item, index) => (
                            // <Link href={item.url}>
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
            {/* <div className='w-full h-[24px] flex justify-center'>
                <span className='font-[500] font-[raleway] text-[16px] tracking-[2%] leading-[24px]'>©All rights reserved Wide Dimension 2024</span>
            </div> */}
        </div>
    );
};

export default Footer;
