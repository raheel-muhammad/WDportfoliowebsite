"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import userImage from "@/assets/UserProfileImage.png";
import ratings from "@/assets/Ratings.png";

const testimonialsItems = [
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
];

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [visibleItems, setVisibleItems] = useState<number>(1);
    const containerRef = useRef<HTMLDivElement>(null);

    const updateVisibleItems = useCallback(() => {
        const width = window.innerWidth;
        if (width >= 1024) setVisibleItems(3);
        else if (width >= 768) setVisibleItems(2);
        else setVisibleItems(1);

    }, []);

    useEffect(() => {
        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
    }, [updateVisibleItems]);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollLeft = containerRef.current.scrollLeft;
                const containerWidth = containerRef.current.clientWidth;
                const itemWidth = containerWidth / visibleItems;
                const newIndex = Math.round(scrollLeft / (itemWidth * visibleItems));
                setCurrentIndex(newIndex);
            }
        };

        const containerElement = containerRef.current;
        containerElement?.addEventListener('scroll', handleScroll);

        return () => {
            containerElement?.removeEventListener('scroll', handleScroll);
        };
    }, [visibleItems]);

    const totalDots = Math.ceil(testimonialsItems.length / visibleItems);
    const itemWidth = 100 / visibleItems;

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        if (containerRef.current) {
            const containerWidth = containerRef.current.clientWidth;
            containerRef.current.scrollTo({
                left: index * containerWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center pt-[250px]'>
                <p className='font-[700] text-[32px] tracking-[2%] leading-[38px] primary-gradient'>TESTIMONIALS</p>
            </div>
            <div className='pt-[80px] flex justify-center items-center px-[10px] sm:px-[30px] md:px-[60px] lg:px-[100px]'>
                <div ref={containerRef} className='relative overflow-x-auto scrollbar-hide'>
                    <div
                        className='grid grid-flow-col auto-cols-[300px] sm:auto-cols-[300px] md:auto-cols-[400px] lg:auto-cols-[400px] gap-[40px]'
                        style={{
                            width: `${testimonialsItems.length * itemWidth}%`,
                            scrollSnapType: 'x mandatory',
                            scrollBehavior: 'smooth',
                        }}
                    >
                        {testimonialsItems.map((item, index) => (
                            <div key={index} className='flex-none flex justify-center' style={{ scrollSnapAlign: 'center' }}>
                                <div className='relative gradient-border bg-[#8700E805] rounded-lg flex flex-col justify-between' style={{ width: '100%', maxWidth: '400px', height: '250px' }}>
                                    <div className='flex items-center gap-[15px] pl-[30px] pt-[30px]'>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={52}
                                            height={52}
                                            className='rounded-full'
                                        />
                                        <div className='flex flex-col'>
                                            <p className='font-[700] text-[16px] tracking-[2%] leading-[20px]'>{item.name}</p>
                                            <Image
                                                src={item.rating}
                                                alt="Rating"
                                                width={88}
                                                height={20}
                                                className='pt-[4px]'
                                            />
                                        </div>
                                    </div>
                                    <div className='pt-[20px] pl-[30px] pr-[20px]'>
                                        <p className='font-[400] text-[14px] md:text-[16px] tracking-[2%] leading-[24px]'>{item.text}</p>
                                    </div>
                                    <p className='text-[#FF96EF] text-[12px] mt-auto self-end pb-[15px] pr-[20px] tracking-[2%] leading-[24px]'>{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-[50px]'>
                {Array.from({ length: totalDots }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`mx-1 transition-all duration-300 ${index === currentIndex ? 'w-[20px] h-[10px] bg-back rounded' : 'w-[10px] h-[10px] border border-[#8700E880] bg-[#8700E820] rounded-full'}`}
                    />
                ))}
            </div>
        </>
    );
};

export default Testimonials;