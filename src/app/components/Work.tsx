"use client"
import React, { useState } from 'react'
import webApp from "@/assets/Our Work.png"
import mobApp from "@/assets/Our Work mob.png"
import sheBeauty from "@/assets/she beauty.png"
import sheErp from "@/assets/she erp.png"
import wdIms from "@/assets/wdims.png"
import wideTraders from "@/assets/widetraders.png"
import Image, { StaticImageData } from 'next/image'

interface WorkItem {
    name: string;
    image: StaticImageData;
    category: string;
}

const Work = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string>("All");

    const menuItems = [
        { name: "All" },
        { name: "Web Apps" },
        { name: "Mobile Apps" },
        { name: "UI/UX Design" },
        { name: "Creative Designing" },
        { name: "Digital Marketing" }
    ];

    const workItems: WorkItem[] = [
        { name: "Wallpaper Web App", image: webApp, category: "Web Apps" },
        { name: "Shiners Mobile App", image: mobApp, category: "Mobile Apps" },
        { name: "She Beauty Social Presence", image: sheBeauty, category: "Creative Designing" },
        { name: "She-ERP", image: sheErp, category: "Web Apps" },
        { name: "WD-IMS", image: wdIms, category: "Web Apps" },
        { name: "Wide Traders Website", image: wideTraders, category: "Web Apps" },
        { name: "Creative Logo Design", image: sheBeauty, category: "Creative Designing" },
        { name: "Mobile Banking App", image: mobApp, category: "Mobile Apps" },
        { name: "E-commerce Website", image: webApp, category: "Web Apps" },
        { name: "UI/UX for Travel App", image: sheErp, category: "UI/UX Design" },
        { name: "Digital Marketing Campaign", image: wdIms, category: "Digital Marketing" },
        { name: "Portfolio Website", image: webApp, category: "Web Apps" },
        { name: "Social Media Graphics", image: sheBeauty, category: "Creative Designing" },
        { name: "Mobile Fitness App", image: mobApp, category: "Mobile Apps" },
        { name: "Creative Branding", image: wdIms, category: "Creative Designing" },
        { name: "UI/UX for E-commerce", image: sheErp, category: "UI/UX Design" },
        { name: "SEO Strategy", image: wideTraders, category: "Digital Marketing" },
        { name: "Corporate Website", image: webApp, category: "Web Apps" },
        { name: "Productivity Mobile App", image: mobApp, category: "Mobile Apps" },
        { name: "Digital Advertising", image: wdIms, category: "Digital Marketing" }
    ];

    const filteredWorkItems = activeMenuItem === "All"
        ? workItems
        : workItems.filter(item => item.category === activeMenuItem);

    const handleMenuItemClick = (name: string) => {
        setActiveMenuItem(name);
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center pt-[150px]'>
                <p className='font-[700] text-[32px] tracking-[2%] leading-[38px] primary-gradient'>OUR WORK</p>
            </div>
            <div className='flex justify-center items-center pt-[80px] w-full'>
                <ul className='flex lg:justify-center justify-start items-center gap-[15px] overflow-x-auto w-full scrollbar-hide scroll-smooth px-[10px] md:px-[40px] cursor-pointer'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='flex justify-center items-center flex-shrink-0'>
                            <a
                                className={`inline-flex items-center rounded-[20px] px-[30px] py-[0px] h-[40px] font-[500] text-[16px] gap-[10px] tracking-[2%] leading-[19px] bg-[#8700E810]
                                    ${activeMenuItem === item.name
                                        ? 'gradient-text gradient-border bg-[#8700E810]'
                                        : 'text-white bg-[#8700E810] border-[#7000C020] border-[1px]'
                                    }`}
                                onClick={() => handleMenuItemClick(item.name)}
                            >
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='pt-[50px] flex justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]'>
                    {filteredWorkItems.map((item, index) => (
                        <div key={index} className='max-w-[320px] w-full h-[360px] flex flex-col justify-center items-center rounded-[15px] px-[10px]'>
                            <Image src={item.image} alt={item.name} />
                            <span className='font-[500] text-[16px] pt-[20px] tracking-[2%] leading-[19px]'>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Work;
