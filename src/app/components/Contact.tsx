"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Image from 'next/image';
import email from '@/assets/email.png';
import emailIcon from '@/assets/emailIcon.svg';
import locationIcon from '@/assets/locationIcon.svg';
import Dropdown from './Dropdown';

const contactSchema = yup.object().shape({
    name: yup
        .string()
        .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long')
        .max(50, 'Name cannot be more than 50 characters long'),
    phone: yup
        .string()
        .matches(/^[0-9]+$/, 'Phone must be only digits')
        .min(10, 'Phone must be at least 10 digits')
        .max(15, 'Phone cannot be more than 15 digits'),
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    text: yup
        .string()
        .required('Your Idea is required')
        .min(10, 'Your Idea must be at least 10 characters long')
        .max(500, 'Your Idea cannot be more than 500 characters long'),
});


const Contact = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center pt-[199px]'>
                <p className='font-[700] text-[32px] tracking-[2%] leading-[38px] primary-gradient'>CONTACT</p>
            </div>
            <div className='flex md:flex-row flex-col items-center justify-center mt-[0px] md:mt-[156px] mx-[10px] sm:mx-[72px] md:ml-[30px] lg:mr-[140px] mr-[0px]'>
                <div className='flex w-full md:w-1/2 flex-col justify-center items-center'>
                    <Image src={email} alt='Email' className='mt-[24px] ml-0 md:ml-[30px] ' />

                    <div className='flex gap-[15px] pt-[20px]'>
                        <Image src={emailIcon} alt="EmailIcon" width={24} height={24} />
                        <span className='font-[500] text-[16px] tracking-[2%] leading-[24px]'>info@widedimension.com</span>
                    </div>
                    <div className='flex flex-start gap-[15px] pt-[15px] pr-[0px] lg:pr-[63px] pb-[90px] md:pb-[0px]'>
                        <Image src={locationIcon} alt="locationIcon" width={24} height={24} />
                        <span className='font-[500] text-[16px] tracking-[2%] leading-[24px]'>Karachi, Pakistan.</span>
                    </div>
                </div>
                <div className='rounded-[15px] md:h-[600px] lg:h-[699px] h-[699px] flex justify-center items-center gradient-border bg-[#8700E805] w-full md:w-1/2 flex-col gap-[30px] px-[15px] py-[40px] md:py-[80px] md:px-[40px]'>

                    <Formik
                        initialValues={{ name: '', phone: '', email: '', text: '' }}
                        validationSchema={contactSchema}
                        onSubmit={(values) => {
                            console.log(values);
                            // Handle form submission here
                        }}
                    >
                        {({ isSubmitting }) => (
                            <>
                                <Form className='w-full flex flex-col gap-[30px]'>
                                    <div>
                                        <Field
                                            type="text"
                                            name="name"
                                            className={`bg-[#8700E810] border-[1px] border-[#2A0049] placeholder-[#ffffff60] block h-[50px] w-full rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]`}
                                            placeholder="Name"
                                        />
                                        <ErrorMessage name="name" component="p" className="text-red-500" />
                                    </div>

                                    <div>
                                        <Field
                                            type="text"
                                            name="phone"
                                            className={`bg-[#8700E810] border-[1px] border-[#2A0049] placeholder-[#ffffff60] block h-[50px] w-full rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]`}
                                            placeholder="Phone"
                                        />
                                        <ErrorMessage name="phone" component="p" className="text-red-500" />
                                    </div>

                                    <div>
                                        <Field
                                            type="email"
                                            name="email"
                                            className={`bg-[#8700E810] border-[1px] border-[#2A0049] placeholder-[#ffffff60] block h-[50px] w-full rounded-[8px] pl-[25px] font-[500] text-[16px] tracking-[2%] leading-[24px]`}
                                            placeholder="Email"
                                        />
                                        <ErrorMessage name="email" component="p" className="text-red-500" />
                                    </div>

                                    <Dropdown />

                                    <div>
                                        <Field
                                            as="textarea"
                                            name="text"
                                            className={`bg-[#8700E810] border-[1px] border-[#baadc3] placeholder-[#ffffff60] block h-[149px] w-full rounded-[8px] pl-[30px] pr-[30px] pt-[13px] font-[500] text-[16px] tracking-[2%] leading-[24px] resize-none`}
                                            placeholder="Your Idea"
                                        />
                                        <ErrorMessage name="text" component="p" className="text-red-700" />
                                    </div>

                                </Form>
                                <div className='relative max-w-[200px] w-full h-[40px]'>
                                    <button type="submit" disabled={isSubmitting} className='max-w-[200px] w-full h-[40px] rounded-[20px] grad-border bg-submit text-center items-center justify-center flex tracking-[2%] leading-[24px]'>
                                        Submit
                                    </button>
                                </div>
                            </>
                        )}
                    </Formik>

                </div>
            </div>
        </>
    );
};

export default Contact;
