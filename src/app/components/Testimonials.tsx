"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import userImage from "@/assets/UserProfileImage.png";
import ratings from "@/assets/Ratings.png";

const testimonialsItems = [
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" },
    { name: "John Doe", image: userImage, text: "Very good experience with Owais & his team, he was able to understand what we wanted to do and even proposed some update. delivery was ontime.", rating: ratings, date: "Aug 8, 2024" }
];

const Testimonals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const startX = useRef<number | null>(null);
    const scrollLeft = useRef<number | null>(null);

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        if (carouselRef.current) {
            const itemWidth = carouselRef.current.clientWidth;
            carouselRef.current.scrollLeft = index * itemWidth;
        }
    };

    const handleMouseDown = (event: React.MouseEvent) => {
        if (carouselRef.current) {
            startX.current = event.pageX - carouselRef.current.offsetLeft;
            scrollLeft.current = carouselRef.current.scrollLeft;
            carouselRef.current.addEventListener('mousemove', handleMouseMove);
            carouselRef.current.addEventListener('mouseup', handleMouseUp);
            carouselRef.current.addEventListener('mouseleave', handleMouseUp);
        }
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (carouselRef.current && startX.current !== null && scrollLeft.current !== null) {
            const x = event.pageX - carouselRef.current.offsetLeft;
            const walk = (x - startX.current) * 2; // Adjust scroll speed
            carouselRef.current.scrollLeft = scrollLeft.current - walk;
        }
    };

    const handleMouseUp = () => {
        if (carouselRef.current) {
            carouselRef.current.removeEventListener('mousemove', handleMouseMove);
            carouselRef.current.removeEventListener('mouseup', handleMouseUp);
            carouselRef.current.removeEventListener('mouseleave', handleMouseUp);

            // Calculate the closest index based on the scroll position
            const itemWidth = carouselRef.current.clientWidth;
            const newIndex = Math.round(carouselRef.current.scrollLeft / itemWidth);
            setCurrentIndex(newIndex);
        }
    };

    return (
        <>
            <div className='flex flex-col items-center justify-center pt-[150px]'>
                <p className='font-[700] text-[32px] font-[Raleway] primary-gradient'>TESTIMONIALS</p>
            </div>
            <div className='pt-[80px] flex justify-center items-center'>
                <div
                    ref={carouselRef}
                    className='relative w-full max-w-[1200px] overflow-hidden cursor-grab'
                    onMouseDown={handleMouseDown}
                >
                    <div
                        className='flex transition-transform duration-500'
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonialsItems.map((item, index) => (
                            <div key={index} className='flex-shrink-0 w-full p-[20px]'>
                                <div className='w-full bg-[#8700E805] border-[1px] rounded-[15px] flex flex-col items-start p-[20px]'>
                                    <div className='flex items-center mb-[10px]'>
                                        <Image src={item.image} alt='' className='w-[50px] h-[50px] rounded-full' />
                                        <div className='ml-[10px]'>
                                            <span className='font-semibold'>{item.name}</span>
                                            <div className='flex items-center'>
                                                <Image src={item.rating} alt='' className='w-[100px] h-[20px]' />
                                            </div>
                                        </div>
                                    </div>
                                    <p className='mb-[10px]'>{item.text}</p>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
                        {testimonialsItems.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonals;
