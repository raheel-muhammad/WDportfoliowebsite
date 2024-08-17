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
    image: StaticImageData; // Type for imported images
}

const Work = () => {
    const [activeMenuItem, setActiveMenuItem] = useState<string>("/");
    const menuItems = [
        { name: "All", url: "/", },
        { name: "Web Apps", url: "/services", },
        { name: "Mobile Apps", url: "/portfolio", },
        { name: "UI/UX Design", url: "/testimonials", },
        { name: "Creative Desiginig", url: "/contact", },
        { name: "Digital Marketing", url: "/contact", }

    ];
    const workItems: WorkItem[] = [
        { name: "Wallpaper Web App", image: webApp },
        { name: "Shiners Mobile App", image: mobApp },
        { name: "She Beauty Social Presence", image: sheBeauty },
        { name: "She-ERP", image: sheErp },
        { name: "WD-IMS", image: wdIms },
        { name: "Wide Traders Website", image: wideTraders }

    ];
    const handleMenuItemClick = (url: string) => {
        setActiveMenuItem(url);
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center pt-[150px]'>
                <p className='font-[700] text-[32px] font-[Raleway] primary-gradient'>OUR WORK</p>
                <div className='w-[1080px] h-[40px] flex justify-center items-center pt-[80px]'>
                    <ul className='flex justify-center items-center gap-[15px]'>
                        {menuItems.map((item) => (
                            <li className='flex justify-center items-center'>
                                <a
                                    href={item.url}
                                    className={`flex items-center rounded-[20px] h-[34px] border-[1px] px-2 py-1 font-[400] text-[16px] gap-[10px]
                ${activeMenuItem === item.url ? 'gradient-text' : 'text-white'}`}
                                    onClick={() => handleMenuItemClick(item.url)}
                                >
                                    <span>{item.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='pt-[60px] flex justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]'>
                    {workItems.map((item) => (
                        <div className='w-[320px] h-[360px] flex flex-col justify-center items-center rounded-[15px]'>
                            <Image src={item.image} alt="" width={320} height={320} />
                            <span className='font-[500] font-[raleway] text-[16px] pt-[20px] tracking-[2%] leading-[19px]'>{item.name}</span>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Work