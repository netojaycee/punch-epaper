"use client";
import React from "react";
import { Controller } from "react-hook-form";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import useSubmit from "./hooks/useSubmit";
import ErrorMessage from "@/app/components/ErrorMessage";

export default function Main() {
  const { onSubmit, form,  loading, errors } = useSubmit();


  return (
    <div className='h-full text-black flex flex-col gap-10'>
      <div className='flex flex-col gap-7 text-center pt-20 w-11/12 mx-auto md:w-full '>
        <p className='font-bold text-3xl md:text-4xl'>
          We&apos;d love to hear from you. Get in touch
        </p>
        <p className='text-lg font-medium'>
          A member of the team will reach out to you as oon as possible
        </p>
      </div>

      <div className='w-11/12 md:w-6/12 mx-auto bg-white shadow-md rounded-xl mb-10'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='p-10'>
          <div className='grid gap-4'>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Full Name</p>
              <Controller
                control={form.control}
                name='fullName'
                render={({ field: { onChange, value } }) => (
                  <div className='relative'>
                    <input
                      value={value}
                      className='w-full border-2 border-gray-300 rounded-md p-4 text-gray-600 focus:outline-none focus:border-blue-600'
                      type='text'
                      placeholder='Enter your full name'
                      onChange={onChange}
                    />
                    <ErrorMessage message={errors.fullName?.message || ""} />
                  </div>
                )}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Email Address</p>
              <Controller
                control={form.control}
                name='email'
                render={({ field: { onChange, value } }) => (
                  <div className='relative'>
                    <input
                      value={value}
                      className='w-full border-2 border-gray-300 rounded-md p-4 text-gray-600 focus:outline-none focus:border-blue-600'
                      type='email'
                      placeholder='Enter email address'
                      onChange={onChange}
                    />
                    <ErrorMessage message={errors.email?.message || ""} />
                  </div>
                )}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Phone Number</p>
              <Controller
                control={form.control}
                name='phoneNumber'
                render={({ field: { onChange, value, onBlur } }) => (
                  <div className='relative'>
                    <PhoneInput
                      international
                      defaultCountry='NG' // You can change this to your preferred default country
                      value={value}
                      placeholder='Enter phone number'
                      onChange={onChange}
                      onBlur={onBlur}
                      className='w-full border-2 border-gray-300 rounded-md p-4 text-gray-600 focus:border-gray-300 focus:outline-none focus:ring-0'
                    />
                    <ErrorMessage message={errors.phoneNumber?.message || ""} />
                  </div>
                )}
              />
            </div>

            <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>Message</p>
              <Controller
                control={form.control}
                name='message'
                render={({ field: { onChange, value } }) => (
                  <div className='relative'>
                    <textarea
                      value={value}
                      className='w-full border-2 border-gray-300 rounded-md p-4 text-gray-600 focus:outline-none focus:border-blue-600'
                      placeholder='How can we help you?'
                      onChange={onChange}
                    />
                    <ErrorMessage message={errors.message?.message || ""} />
                  </div>
                )}
              />
            </div>

            <div className='flex justify-center'>
              <button className='cursor-pointer inline-block bg-[#ff0100] text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-red-600 transition-colors'>
                {loading ? "Sending..." : "Send message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
