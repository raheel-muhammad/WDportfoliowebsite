import Image from 'next/image'
import React from 'react'
import email from '@/assets/email.png'
import emailIcon from '@/assets/emailIcon.svg'
import locationIcon from '@/assets/locationIcon.svg'
import Dropdown from './Dropdown'


const Contact = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center pt-[199px]'>
                <p className='font-[700] text-[32px] tracking-[2%] leading-[38px] primary-gradient'>CONTACT</p>
            </div>
            <div className='flex md:flex-row  flex-col items-center justify-center mt-[0px] md:mt-[156px] mx-[10px] sm:mx-[72px] md:mx-[80px]'>
                <div className='flex w-full md:w-1/2 flex-col justify-center items-center'>
                    <Image src={email} alt='Email' className=' mt-[24px] ' />

                    <div className='flex gap-[15px] pt-[20px] '>
                        <Image src={emailIcon} alt="EmailIcon" width={24} height={24} />
                        <span className=' font-[500] text-[16px] tracking-[2%] leading-[24px]'>info@widedimension.com</span>
                    </div>
                    <div className='flex  flex-start gap-[15px] pt-[15px] pr-[0px] lg:pr-[53px] pb-[90px] md:pb-[0px]'>
                        <Image src={locationIcon} alt="locationIcon" width={24} height={24} />
                        <span className=' font-[500] text-[16px] tracking-[2%] leading-[24px] '>Karachi, Pakistan.</span>
                    </div>
                </div>
                <div className=' rounded-[15px] flex justify-center items-center gradient-border bg-[#8700E805]  w-full md:w-1/2  flex-col gap-[30px] px-[15px] py-[40px] md:py-[80px] md:px-[60px]'>


                    <input type="name" name="name" className=" bg-[#8700E810] border-[1px] border-[#2A0049]  placeholder-[#ffffff60] block  h-[50px]  w-full rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]" placeholder="Name" />


                    <input type="phone" name="phone" className=" bg-[#8700E810] border-[1px] border-[#2A0049]  placeholder-[#ffffff60] block  h-[50px]   w-full rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]" placeholder="Phone" />

                    <Dropdown />

                    <input type="text" name="text" className=" bg-[#8700E810] border-[1px] border-[#2A0049]  placeholder-[#ffffff60] block  h-[149px]   w-full rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]" placeholder="Your Idea" />

                    <button className='max-w-[200px] w-full h-[40px] rounded-[20px]  grad-border bg-submit text-center items-center justify-center flex tracking-[2%] leading-[24px]'>Submit</button>

                </div>
            </div>
        </>
    )
}

export default Contact