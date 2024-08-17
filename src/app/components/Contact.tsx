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
                <p className='font-[700] text-[32px] font-[raleway] primary-gradient'>CONTACT</p>
            </div>
            <div className='flex'>
                <div className='flex flex-col'>
                    <div className=' pt-[184px] pl-[80px]'>
                        <Image src={email} alt='Email' width={495} height={495} />
                    </div>
                    <div className='flex items-center gap-[15px] pt-[20px] pl-[208px]'>
                        <Image src={emailIcon} alt="EmailIcon" width={24} height={24} />
                        <span className='font-[raleway] font-[500] text-[16px] tracking-[2%] leading-[24px]'>info@widedimension.com</span>
                    </div>
                    <div className='flex items-center gap-[15px] pt-[15px] pl-[208px]'>
                        <Image src={locationIcon} alt="locationIcon" width={24} height={24} />
                        <span className='font-[raleway] font-[500] text-[16px] tracking-[2%] leading-[24px]'>Karachi, Pakistan.</span>
                    </div>
                </div>
                <div className='w-[600px] h-[699px] mt-[156px] rounded-[15px] border-[1px] bg-[#8700E805]'>
                    <div className='flex flex-col gap-[30px] justify-center items-center pt-[80px]'>
                        <label className="block">
                            <input type="name" name="name" className=" bg-[#8700E810] border-[1px] border-[#2A0049]  placeholder-[#ffffff60] block w-[480px] h-[50px] rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]" placeholder="Name" />
                        </label>
                        <label className="block">
                            <input type="phone" name="phone" className=" bg-[#8700E810] border-[1px] border-[#2A0049]  placeholder-[#ffffff60] block w-[480px] h-[50px] rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]" placeholder="Phone" />
                        </label>
                        <label className="block">
                            <input type="email" name="email" className=" bg-[#8700E810] border-[1px] border-[#2A0049]  placeholder-[#ffffff60] block w-[480px] h-[50px] rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]" placeholder="Email" />
                        </label>
                        <Dropdown />
                        <label className="block">
                            <input type="text" name="text" className=" bg-[#8700E810] border-[1px] border-[#2A0049]  placeholder-[#ffffff60] block w-[480px] h-[149px] rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]" placeholder="Your Idea" />
                        </label>
                        <div className='w-[200px] h-[40px] rounded-[20px] border-[1px] bg-submit text-center items-center justify-center flex'>Submit</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact