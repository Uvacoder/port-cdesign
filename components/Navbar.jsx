import React, { useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router';
import { Popover } from '@douyinfe/semi-ui';

const Logo = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className="flex items-center flex-shrink-0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
        {isHovering ? (
          <Image className="transition hover:rotate-45" src="/../public/navbar/logo-hovering@2x.png" width={36} height={36} alt="logo-hovering" />
        ) : (
          <Image className="transition" src="/../public/navbar/logo.svg" width={36} height={36} alt="logo-normal" />
        )}
    </div>
  );
};

const Navbar = () => {
  const router = useRouter();

  return (
    
    <div className="fixed z-10 flex w-full justify-between h-20 px-2 xl:px-10 text-white  mix-blend-difference">
      <div className = 'self-center '>
      <Link href="/">
              <a><Logo/></a>
              </Link>
        
      </div>
        <div className ='self-center uppercase '>
          <ul className="flex flex-row flex-wrap justify-between gap-20">
            <li className={router.pathname == "/" ? " font-bold" : " "}>
             <Link href="/">
              <a className="inline-block">All Work</a>
              </Link>
            </li>
            <li className={router.pathname == "/illustrations" ? "font-bold" : ""}>
            <Link href="/illustrations">
              <a className="inline-block">Illustrations</a>
              </Link>
            </li>
            <li className={router.pathname == "/about" ? " font-bold" : ""}>
            <Link href="/about">
              <a className="inline-block">About</a>
              </Link>
            </li>
            <li className="">
            <Link href="https://dribbble.com/mumumycat">
              <a className="inline-block">Dribbble</a>
              </Link>
            </li>
            </ul>
        </div>
        
          <Popover
           content={
            <Image className="mx-4"  src='/../public/navbar/qrcode@2x.png' alt='picture of website logo' width={240} height={240}/>}
            trigger="click"
            clickToHide={true}
            position= 'bottomRight'>
              <div className="self-center">
                <Image className=" hover:opacity-80 active:opacity-95"  src='/../public/navbar/qrcode.svg' alt='picture of website logo' width={36} height={36}/>
              </div>
          

          </Popover>
        
      </div>
       
  )
}

export default Navbar