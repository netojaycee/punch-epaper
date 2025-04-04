import Image from "next/image";
import React from "react";

export default function App({
  downloadSectionRef,
}: {
  downloadSectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className='bg-[#f0f0f0]'>
      <div id="m-app"
        ref={downloadSectionRef}
        className=' py-16 px-5 md:px-40 w-full flex items-center md:flex-row flex-col space-y-5 md:space-y-10 lg:space-x-10 lg:space-y-0 '
      >
        <div className='w-full md:w-[50%] flex flex-col space-y-3 '>
          <h1 className='text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-bold font-nunito text-black'>
            Get the <span className='text-[#FF0100]'>PUNCH </span>app now!
          </h1>
          <h1 className='text-sm font-bold  w-full text-center md:text-left'>
            Let&apos;s get your free copy from Apple store{" "}
          </h1>

          <div className='flex space-x-5 md:flex-row flex-col  items-center md:justify-start justify-center w-full '>
            <a
              target='_blank'
              href='https://play.google.com/store/apps/details?id=com.mobile.mhapy&pli=1'
            >
              <Image
                width={250}
                height={250}
                src={"/google-play.png"}
                alt='google'
              />{" "}
            </a>
            <a
              href='https://apps.apple.com/ca/app/mhapy-ai-therapy-assistant/id6450757194'
              target='_blank'
            >
              <Image width={200} height={200} src={"/apple.svg"} alt='google' />{" "}
            </a>
          </div>
        </div>
        <div className='w-full md:w-[50%] flex flex-col items-center justify-center space-y-5 md:space-y-10'>
          <Image
            src='/news-bro.svg'
            alt='hero'
            className='w-full h-full object-cover'
            width={531}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
