import React from 'react'
import Header from './Header'
import Link from 'next/link'


const Hero = () => {
    return (
        <>
            <div className='sm:pt-[30px] pt-[20px] sm:pr-[40px] sm:pl-[40px] md:pr-[0px] px-[15px] relative z-10'>
                <Header />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className=' lg:w-[194px] md:w-[194px] sm:w-[120px] w-[120px] sm:h-[24px] h-[24px] lg:h-[39px] md:h-[39px] flex justify-center items-center rounded-[8px] border-[1px] border-[#7000C0] gap-[10px]  sm:mt-[82px] mt-[82px] lg:mt-[180px] md:mt-[150px] lg:mb-[40px] md:mb-[40px] sm:mb-[25px] mb-[25px] bg-background ' >
                    <p className=' font-[500] md:text-[20px] lg:text-[20px] sm:text-[12px] text-[12px] tracking-[2%] leading-[24px]'>We Glow You!</p>
                </div>
                <div className='flex flex-col justify-center items-center mb-[40px] sm:mb-[40px] md:[74px] lg:mb-[74px] '>
                    <p className="font-[700] lg:text-[60px] md:text-[40px] sm:text-[24px] text-[24px] text-center tracking-[2%] leading-[36px] md:tracking-[2%] md:leading-[60px] lg:tracking-[2%] lg:leading-[80px] uppercase">
                        <span>Building Better Apps</span>
                        <span className="block">For <span className="primary-gradient"> The Founders</span></span>
                    </p>
                </div>
                <div className='lg:w-[280px] md:w-[280px] sm:w-[180px] w-[180px] h-[1px] mb-[56px] flex justify-center items-center bg-line'></div>
                <Link href={'#contact'}>
                    <button className=' rounded-[20px] grad-border bg-back'>
                        <p className='font-[600] lg:text-[16px] md:text-[16px] sm:text-[12px] text-[12px] lg:w-[200px] md:w-[200px] sm:w[120px] w-[120px] lg:h-[40px] md:h-[40px] sm:h-[30px] h-[30px] flex items-center justify-center'>Get a Quote</p>
                    </button>
                </Link>
            </div>
        </>
    )
}

export default Hero