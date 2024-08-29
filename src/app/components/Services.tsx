import React from 'react';
import Image from 'next/image';
import uxIcon from '@/assets/uxIcon.svg';
import appIcon from '@/assets/appIcon.svg';
import mobIcon from '@/assets/mobIcon.svg';
import cloudIcon from '@/assets/cloudIcon.svg';
import aiIcon from '@/assets/aiIcon.svg';
import devopsIcon from '@/assets/devopsIcon.svg';
import creativeIcon from '@/assets/creativeIcon.svg';
import marketingIcon from '@/assets/marketingIcon.svg';
import ecommerceIcon from '@/assets/ecommerceIcon.svg';

const Services = () => {
    const serviceItems = [
        { title: "UI/UX Design", text: "We leverage Sketch, Figma, Adobe XD, and InVision, utilizing an iterative design process and prototyping to bring your vision to life.", icon: uxIcon },
        { title: "APP DEVELOPMENT", text: "Our expertise in React Native enables us to develop native and cross-platform solutions. Our dedicated team delivers high-quality, user-friendly apps to meet client needs.", icon: appIcon },
        { title: "WEB DEVELOPMENT", text: "Our developers employ modern technologies like React, Next.js, Vite, Redux and Express to craft robust, responsive, and scalable web applications.", icon: mobIcon },
        { title: "CLOUD SERVICES", text: "Our experts leverage cutting-edge technologies like AWS Lambda, EC2, and S3 to build scalable, reliable cloud solutions tailored to client requirements.", icon: cloudIcon },
        { title: "AI / CHATGPT", text: "Our experts create custom AI solutions, integrating machine learning, OpenAI, and ChatGPT. We train and refine models for accuracy and a seamless user experience aligned with your brand voice.", icon: aiIcon },
        { title: "DEVOPS", text: "Leveraging Kubernetes, Jenkins, and Docker, we automate processes and streamline the software delivery pipeline for faster deployment and increased productivity.", icon: devopsIcon },
        { title: "CREATIVE DESIGNING", text: "With our expertise, we create attention-grabbing creatives that perfectly align with your brand tone, helping to boost your sales.", icon: creativeIcon },
        { title: "DIGITAL MARKETING", text: "Our digital marketing expertise empowers us to craft strategic campaigns that resonate with your audience, amplify your brand’s voice, and boost your sales.", icon: marketingIcon },
        { title: "E-COMMERCE", text: "Our Shopify and WordPress WooCommerce expertise allows us to create customized, user-friendly online stores that enhance your brand and drive sales.", icon: ecommerceIcon },
    ];

    return (
        <>
            <div className='flex flex-col items-center justify-center lg:pt-[199px] md:pt-[199px] sm:pt-[140px] pt-[140px]'>
                <p className='font-[700] text-[20px] md:text-[32px] primary-gradient leading-[38px] tracking-[2%]'>SERVICES</p>
            </div>
            <div className='pt-[80px] flex justify-center items-center'>
                <div className='flex flex-wrap  gap-[40px]  justify-center items-center mx-[10px]'>
                    {serviceItems.map((item, index) => (
                        <div key={index} className='w-full max-w-[320px] h-[320px] flex flex-col justify-center items-center rounded-[15px] gradient-border bg-[#8700E805]'>
                            <Image src={item.icon} alt="" width={50} height={50} />
                            <span className='font-[700] text-[20px] pt-[25px] pb-[15px] tracking-[2%] leading-[24px]'>{item.title}</span>
                            <span className='font-[400] text-[14px] px-[20px] w-[310px] text-center justify-center items-center tracking-[2%] leading-[20px]'>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
