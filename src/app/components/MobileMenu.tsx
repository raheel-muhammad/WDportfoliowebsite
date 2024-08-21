import React from 'react';
import Image from 'next/image';
import crossIcon from '@/assets/crossIcon.svg';
import logo from "@/assets/WDMob.png"

interface MenuItem {
    name: string;
    url: string;
    icon: string;
}

interface MobileMenuProps {
    menuItems: MenuItem[];
    activeMenuItem: string;
    onMenuItemClick: (url: string) => void;
    isMenuOpen: boolean;
    onCloseMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ menuItems, activeMenuItem, onMenuItemClick, isMenuOpen, onCloseMenu }) => {
    if (!isMenuOpen) return null;

    return (
        <div className="fixed inset-0 bg-primary text-white z-[1050] flex justify-center flex-col items-center">
            <div className="flex justify-between items-center w-full sm:pt-[30px] pt-[20px] sm:px-[40px] px-[15px]">
                <div className="flex items-center">
                    <Image src={logo} alt="logo" className='sm:w-[80px] sm:h-[38px] h-[23px] w-[60px]' />
                </div>
                <span className="sm:text-[20px] text-[12px] text-center sm:w-[160px] sm:h-[23px] w-[96px] h-[14px] font-[500] tracking-[2%] leading-[24px]">Wide Dimension</span>
                <button onClick={onCloseMenu} className="sm:h-[30px] sm:w-[30px] w-[24px] h-[24px] cursor-pointer">
                    <Image src={crossIcon} alt="Close menu" />
                </button>

            </div>
            <ul className="flex flex-col items-center justify-center flex-grow">
                {menuItems.map((item) => (
                    <li key={item.url} className="w-full text-center mb-[30px]">
                        <a
                            href={item.url}
                            className={`flex items-center rounded-[20px] h-[34px] py-[5px] px-[15px] font-[500] text-[16px] gap-[10px] bg-[#7000C010] tracking-[2%] leading-[24px]
                            ${activeMenuItem === item.url ? 'gradient-text gradient-border' : 'text-white border-[#7000C020] border-[1px]'}`}
                            onClick={() => onMenuItemClick(item.url)}
                        >
                            <Image src={item.icon} alt={`${item.name} icon`} width={24} height={24} />
                            <span className="ml-3">{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MobileMenu;
