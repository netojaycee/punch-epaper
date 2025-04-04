import React from "react";

export default function Footer() {
  return (
    <footer className='bg-gray-800 text-white py-4'>
      <div className='text-center'>
        <p>
          &copy; {new Date().getFullYear()} Punch Nigeria Limited. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
