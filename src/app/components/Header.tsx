"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "@/assets/Logo.png";
import homeIcon from '@/assets/homeIcon.svg';
import serviceIcon from '@/assets/serviceIcon.svg';
import portfolioIcon from '@/assets/portfolioIcon.svg';
import testimonialsIcon from '@/assets/testimonialsIcon.svg';
import contactIcon from '@/assets/contactIcon.svg';

const Header: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string>("/");
    const menuItems = [
        { name: "Home", url: "#home", icon: homeIcon },
        { name: "Services", url: "#services", icon: serviceIcon },
        { name: "Portfolio", url: "#portfolio", icon: portfolioIcon },
        { name: "Testimonials", url: "#testimonials", icon: testimonialsIcon },
        { name: "Contact", url: "#contact", icon: contactIcon }
    ];

    const handleMenuItemClick = (url: string) => {
        setActiveMenuItem(url);
    }

    return (
        <div className='flex justify-between items-center'>
            <Image src={Logo} alt="Logo" className='h-[66px] w-[100px]' />
            <div>
                <ul className='flex gap-[15px] pr-[50px]'>
                    {menuItems.map((item) => (
                        <li key={item.url} className='flex justify-center items-center'>
                            <a
                                href={item.url}
                                className={`flex items-center rounded-[20px] h-[34px] border-[1px] px-2 py-1 font-[400] text-[16px] gap-[10px] bg-[#7000C010] border-[#7000C020]
                ${activeMenuItem === item.url ? 'gradient-text' : 'text-white'}`}
                                onClick={() => handleMenuItemClick(item.url)}
                            >
                                <Image src={item.icon} alt={`${item.name} icon`} width={18} height={18} />
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Header;
