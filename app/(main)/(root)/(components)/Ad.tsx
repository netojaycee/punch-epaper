import Image from 'next/image';
import React from 'react'

export default function Ad() {
  return (
    <div className='bg-[#f0f0f0] py-8 md:py-16 px-5 md:px-40'>
      <div className='flex flex-col md:flex-row  items-center gap-5'>
        {/* Image Section */}
        <div className='relative w-full md:w-[45%] md:h-[400px]'>
          <Image
            src='/news-pana.svg' // Replace with your actual image path
            alt='advert'
            width={450}
            height={500}
            className='object-cover'
          />
        </div>

        {/* Text Section */}
        <div className='w-full md:w-[55%]'>
          <p className='text-gray-600 leading-relaxed'>
            Wednessday, 18 October 2023, 10:00 AM - 12:00 PM (WAT) <br />
          </p>

          <h3 className='text-xl md:text-2xl font-semibold text-gray-800'>
            Nigerian Canada-based singer, TheHonestGuy, wins Juno award.
          </h3>
        </div>
      </div>
    </div>
  );
}
