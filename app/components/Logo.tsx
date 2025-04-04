import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <Image src='/logo.png' alt='Logo' width={70} height={50} className="bg-gray-400 h-[50px] w-[70px]"/>
    </Link>
  );
}
