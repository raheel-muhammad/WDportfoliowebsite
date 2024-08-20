import React from 'react'
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
        { title: "App Development", text: "Our expertise in React Native enables us to develop native and cross-platform solutions. Our dedicated team delivers high-quality, user-friendly apps to meet client needs.", icon: appIcon },
        { title: "Web Development", text: "Our developers employ modern technologies like React, Next.js, Vite, Redux and Express to craft robust, responsive, and scalable web applications.", icon: mobIcon },
        { title: "Cloud Services", text: "Our experts leverage cutting-edge technologies like AWS Lambda, EC2, and S3 to build scalable, reliable cloud solutions tailored to client requirements.", icon: cloudIcon },
        { title: "AI / ChatGPT", text: "Our experts create custom AI solutions, integrating machine learning, OpenAI, and ChatGPT. We train and refine models for accuracy and a seamless user experience aligned with your brand voice.", icon: aiIcon },
        { title: "DevOps", text: "Leveraging Kubernetes, Jenkins, and Docker, we automate processes and streamline the software delivery pipeline for faster deployment and increased productivity.", icon: devopsIcon },
        { title: "Creative Designing", text: "With our expertise, we create attention-grabbing creatives that perfectly align with your brand tone, helping to boost your sales.", icon: creativeIcon },
        { title: "Digital Marketing", text: "Our digital marketing expertise empowers us to craft strategic campaigns that resonate with your audience, amplify your brand’s voice, and boost your sale,s.", icon: marketingIcon },
        { title: "E-Commerce", text: " Our Shopify and WordPress WooCommerce expertise allows us to create customized, user-friendly online stores that enhance your brand and drive sales.", icon: ecommerceIcon },

    ];
    return (
        <>
            <div className=' flex flex-col items-center justify-center pt-[199px]'>
                <p className='font-[700] text-[32px] font-[raleway] primary-gradient'>SERVICE</p>
            </div>
            <div className='pt-[80px] flex justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px] '>
                    {serviceItems.map((item) => (
                        <div className='w-[320px] h-[320px] flex flex-col justify-center items-center rounded-[15px]  gradient-border'>
                            <Image src={item.icon} alt="" width={50} height={50} />
                            <span className='font-[700] text-[20px] pt-[25px] pb-[15px] font-raleway'>{item.title}</span>
                            <span className='font-[400] text-[14px] w-[280px] h-[80px] justify-center items-center text-center font-raleway'>{item.text}</span>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Services
