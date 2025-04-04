"use client";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Header";
import Logo from "../Logo";

type sidbarType = {
  action: () => void;
  close: () => void;
  isSidebar: boolean;
};

const DropBar = ({ isSidebar, action }: sidbarType) => {
  return (
    <>
      <aside
        className={`fixed w-full bg-black right-0 top-0 min-h-screen bg-opacity-70 z-50 ease-in-out duration-700 ${
          isSidebar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className='bg-white w-full'>
          <div className='flex justify-between items-center  p-6'>
            <picture>
              <Logo />
            </picture>
            <Image
              src='/menu-close.svg'
              alt='cancel icon'
              width={24}
              height={24}
              className='cursor-pointer'
              onClick={action}
            />
          </div>
          <menu className='w-full flex flex-col items-center gap-y-4 pb-6'>
            <ul className='w-full flex flex-col items-center px-5 py-3 space-y-5 pt-12'>
              {navLinks.map((link) => (
                // <Link onClick={close} key={link.name} href={link.url}>
                //   <span className='text-lg'>{link.name}</span>
                // </Link>
                <li key={link.name} onClick={action} className='cursor-pointer'>
                  <Link href={link.url}>
                    <span className='text-lg'>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>
My Account            </button> */}
          </menu>
        </div>
      </aside>
    </>
  );
};

export default DropBar;
