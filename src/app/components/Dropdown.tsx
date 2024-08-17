"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import dropdownIcon from '@/assets/dropdownIcon.svg'
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-between items-center bg-[#8700E810]  border-[1px] border-[#2A0049]  text-[#ffffff60]  w-[480px] h-[50px] rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px] pr-[25px]"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    Select Country
                    <Image src={dropdownIcon} alt='dropdownIcon' width={24} height={24} className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
            </div>
            <div
                className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transform transition-opacity ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
            >
                <div className="py-1" role="none">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-0"
                    >
                        Account settings
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                    >
                        Support
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-2"
                    >
                        License
                    </a>
                    <form method="POST" action="#" role="none">
                        <button
                            type="submit"
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-3"
                        >
                            Sign out
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
