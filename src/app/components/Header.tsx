"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Logo from "@/assets/Logo.png";
import homeIcon from '@/assets/homeIcon.svg';
import serviceIcon from '@/assets/serviceIcon.svg';
import portfolioIcon from '@/assets/portfolioIcon.svg';
import testimonialsIcon from '@/assets/testimonialsIcon.svg';
import contactIcon from '@/assets/contactIcon.svg';
import menuIcon from '@/assets/menuIcon.svg';
import MobileMenu from './MobileMenu';
import logo from "@/assets/WDMob.png"
const Header: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string>("/");
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuItems = [
        { name: "Home", url: "/", icon: homeIcon },
        { name: "Services", url: "#services", icon: serviceIcon },
        { name: "Portfolio", url: "#portfolio", icon: portfolioIcon },
        { name: "Testimonials", url: "#testimonials", icon: testimonialsIcon },
        { name: "Contact", url: "#contact", icon: contactIcon }
    ];

    const handleMenuItemClick = (url: string) => {
        setActiveMenuItem(url);
        setIsMenuOpen(false);
    };

    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 768);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const onCloseMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (<>

        <div className='relative'>
            {isMobileView ? (
                <>
                    <div className='flex justify-between items-center w-full'>
                        <div className="flex items-center">
                            <Image src={logo} alt="logo" className=' sm:flex md:hidden lg:hidden flex sm:w-[80px] sm:h-[38px] h-[23px] w-[60px] ' />
                        </div>
                        <span className='sm:text-[20px] text-[12px] text-center sm:w-[160px] sm:h-[23px] w-[96px] h-[14px] font-[500] sm:flex md:hidden lg:hidden flex'>Wide Dimension</span>
                        <Image
                            src={menuIcon}
                            alt="Menu Icon"
                            className='sm:h-[30px] sm:w-[30px] w-[24px] h-[24px] cursor-pointer'
                            onClick={toggleMenu}
                        />
                        <MobileMenu
                            menuItems={menuItems}
                            activeMenuItem={activeMenuItem}
                            onMenuItemClick={handleMenuItemClick}
                            isMenuOpen={isMenuOpen}
                            onCloseMenu={onCloseMenu}
                        />
                    </div>


                </>
            ) : (
                <div className='relative flex justify-between items-center '>
                    <Image src={Logo} alt="Logo" className='h-[66px] w-[100px] md:flex sm:hidden hidden lg:flex' />

                    <ul className='flex gap-[15px] pr-[20px]'>
                        {menuItems.map((item) => (
                            <li key={item.url} className='flex justify-center items-center'>
                                <a
                                    href={item.url}
                                    className={`flex items-center rounded-[20px] h-[34px] py-[5px] px-[15px] font-[500] text-[16px] gap-[10px] bg-[#7000C010] tracking-[2%] leading-[24px]
                                    ${activeMenuItem === item.url ? 'gradient-text gradient-border' : 'text-white border-[#7000C020] border-[1px]'}`}
                                    onClick={() => handleMenuItemClick(item.url)}
                                >
                                    <Image src={item.icon} alt={`${item.name} icon`} width={18} height={18} />
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    </>
    );
}

export default Header;
