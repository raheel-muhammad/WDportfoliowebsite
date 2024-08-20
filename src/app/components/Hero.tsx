import React from 'react'
import Header from './Header'
import Image from 'next/image'
import bgImage from "@/assets/bgimage.png"

const Hero = () => {
    return (
        <>
            <div className='pt-[30px] pl-[50px] relative  overflow-hidden'>
                <Header />
            </div>
            <div className="flex flex-col justify-center items-center  overflow-hidden">
                {/* <div className="absolute inset-0 w-full h-[376px] mt-[177px] ml-[160px] flex justify-center items-center">
                    <Image
                        src={bgImage}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        className="z-[0] w-[50px] h-[50px]"
                    />
                </div> */}
                <div className='w-[194px] h-[39px] flex justify-center items-center rounded-[8px] border-[1px] border-[#7000C0] gap-[10px] mt-[180px] lg:mb-[40px] md:mb-[40px] mb-[25px] bg-background ' >
                    <p className=' font-[500] md:text-[20px] text-[12px]'>We Glow You</p>
                </div>
                <div className='flex flex-col justify-center items-center mb-[74px] '>
                    <p className="font-[700] lg:text-[60px] md:text-[40px] text-[24px] text-center">
                        <span>Building Better Apps</span>
                        <span className="block">For <span className="primary-gradient"> The Founders</span></span>
                    </p>
                </div>
                <div className='w-[280px] h-[1px] mb-[56px] flex justify-center items-center bg-line'></div>
                <button className=' rounded-[20px] grad-border bg-back'>
                    <p className='font-[600] text-[16px] w-[200px] h-[40px] flex items-center justify-center'>Get a quote</p>
                </button>
            </div>
        </>
    )
}

export default Hero