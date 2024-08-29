"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Logo from "@/assets/Logo.png";
import homeIcon from '@/assets/homeIcon.svg';
import serviceIcon from '@/assets/serviceIcon.svg';
import portfolioIcon from '@/assets/portfolioIcon.svg';
import testimonialsIcon from '@/assets/testimonialsIcon.svg';
import contactIcon from '@/assets/contactIcon.svg';
import homeActiveIcon from '@/assets/homeActiveIcon.svg';
import serviceActiveIcon from '@/assets/serviceActiveIcon.svg';
import portfolioActiveIcon from '@/assets/portfolioActiveIcon.svg';
import testimonialsActiveIcon from '@/assets/testimonialsActiveIcon.svg';
import contactActiveIcon from '@/assets/contactActiveIcon.svg';
import menuIcon from '@/assets/menuIcon.svg';
import MobileMenu from './MobileMenu';
import logo from "@/assets/WDMob.png";

const Header: React.FC = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string>("/");
    const [isMobileView, setIsMobileView] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const menuItems = [
        { name: "Home", url: "/", icon: homeIcon, activeIcon: homeActiveIcon },
        { name: "Services", url: "services", icon: serviceIcon, activeIcon: serviceActiveIcon },
        { name: "Portfolio", url: "portfolio", icon: portfolioIcon, activeIcon: portfolioActiveIcon },
        { name: "Testimonials", url: "testimonials", icon: testimonialsIcon, activeIcon: testimonialsActiveIcon },
        { name: "Contact", url: "contact", icon: contactIcon, activeIcon: contactActiveIcon }
    ];


    const handleMenuItemClick = (url: string) => {
        setActiveMenuItem(url);
        setIsMenuOpen(false);
    };

    const handleResize = () => {
        setIsMobileView(window.innerWidth < 768);
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

    return (
        <div className='relative'>
            {isMobileView ? (
                <>
                    <div className='flex justify-between items-center w-full'>
                        <div className="flex items-center cursor-pointer">
                            <Image src={logo} alt="logo" className=' sm:flex md:hidden lg:hidden flex sm:w-[80px] sm:h-[38px] h-[23px] w-[60px]' />
                        </div>
                        <span className='sm:text-[20px] text-[12px] text-center sm:w-[160px] sm:h-[23px] w-[96px] h-[14px] font-[500] sm:flex md:hidden lg:hidden flex tracking-[2%] leading-[24px]'>Wide Dimension</span>
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
                <div className='relative flex justify-between items-center cursor-pointer'>
                    <Image src={Logo} alt="Logo" className='h-[66px] w-[100px] md:flex sm:hidden hidden lg:flex' />
                    <ul className='flex md:gap-[8px] lg:gap-[15px] pr-[20px] lg:pr-[50px]'>
                        {menuItems.map((item) => (
                            <li key={item.url} className='flex justify-center items-center bg-[#7000C010] rounded-[20px]'>
                                <Link
                                    to={item.url}
                                    smooth={true}
                                    duration={500}
                                    className={`flex items-center rounded-[20px] h-[34px] py-[5px] lg:px-[15px] md:px-[10px] font-[500] lg:text-[16px] md:text-[14px] gap-[10px] tracking-[2%] leading-[24px] cursor-pointer
                                        ${activeMenuItem === item.url ? 'gradient-text gradient-border' : 'text-white border-[#7000C020] border-[1px]'}`}
                                    onClick={() => handleMenuItemClick(item.url)}
                                >
                                    <Image src={activeMenuItem === item.url ? item.activeIcon : item.icon} alt={`${item.name} icon`} width={18} height={18} />
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
