import React from 'react'
import Header from './Header'
import Image from 'next/image'
import bgImage from "@/assets/bgimage.png"

const Hero = () => {
    return (
        <>
            <div className='pt-[30px] pl-[50px] relative'>
                <Header />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="absolute inset-0 w-[1045px] h-[376px] mt-[177px] ml-[160px] flex justify-center items-center">
                    <Image
                        src={bgImage}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        className="z-[0] w-[50px] h-[50px]"
                    />
                </div>
                <div className='w-[194px] h-[39px] flex justify-center items-center rounded-[8px] border-[1px] border-[#7000C0] gap-[10px] mt-[180px] mb-[40px] bg-background ' >
                    <p className='font-[raleway] font-[500] text-[20px]'>We Glow You</p>
                </div>
                <div className='flex flex-col justify-center items-center w-[700px] h-[160px] mb-[74px] '>
                    <p className="font-[700] text-[60px] text-center">
                        <span>Building Better Apps</span>
                        <span className="block">For <span className="primary-gradient"> The Founders</span></span>
                    </p>
                </div>
                <div className='w-[280px] h-[1px] mb-[56px] flex justify-center items-center bg-line'></div>
                <div className=' rounded-[20px] border-[1px] border-[#FF00AA] bg-back'>
                    <p className='font-[600] text-[16px] w-[200px] h-[40px] flex items-center justify-center'>Get a quote</p>
                </div>
            </div>
        </>
    )
}

export default Hero