"use client";
import React, { useState, useEffect, useCallback } from 'react';
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

    const updateVisibleItems = useCallback(() => {
        const width = window.innerWidth;
        if (width >= 1024) setVisibleItems(3); // lg screens
        else if (width >= 768) setVisibleItems(2); // md screens
        else setVisibleItems(1); // sm screens
    }, []);

    useEffect(() => {
        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);
        return () => window.removeEventListener('resize', updateVisibleItems);
    }, [updateVisibleItems]);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const totalDots = Math.ceil(testimonialsItems.length / visibleItems);

    const itemWidth: number = 100 / visibleItems;
    const transformValue = `-${currentIndex * itemWidth}%`;

    return (
        <>
            <div className='flex flex-col items-center justify-center pt-[150px]'>
                <p className='font-[700] text-[32px] font-[Raleway] primary-gradient'>TESTIMONIALS</p>
            </div>
            <div className='relative w-full mt-[80px] px-4  overflow-hidden'>
                <div className='overflow-hidden'>
                    <div
                        className='flex transition-transform duration-500 ease-in-out'
                        style={{ transform: `translateX(${transformValue})`, width: `${testimonialsItems.length * (400 + 40)}px` }} // Adjust width based on testimonial item width + gap
                    >
                        {testimonialsItems.map((item, index) => (
                            <div key={index} className='flex-none' style={{ width: '400px', height: '250px', marginRight: '40px' }}> {/* Set fixed width, height and gap */}
                                <div className='relative gradient-border bg-[#8700E805] rounded-lg flex flex-col' style={{ height: '250px' }}> {/* Add gradient border */}
                                    <div className='flex items-center gap-[15px] pl-[30px] pt-[30px]'>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={50}
                                            height={50}
                                            className='rounded-full'
                                        />
                                        <div className='flex flex-col'>
                                            <p className='font-bold'>{item.name}</p>

                                            <Image
                                                src={item.rating}
                                                alt="Rating"
                                                width={100}
                                                height={20}
                                            />

                                        </div>
                                    </div>
                                    <div className='pt-[20px] pl-[30px] w-[340px] h-[96px]'>
                                        <p className='mt-2'>{item.text}</p>
                                    </div>
                                    <p className='text-[#FF96EF] text-sm mt-auto self-end pb-[15px] pr-[20px]'>{item.date}</p>
                                </div>
                            </div>
                        ))}
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

            </div >
        </>
    );
};

export default Testimonials;
