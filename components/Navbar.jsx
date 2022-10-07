import React, { useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router';
import { SideSheet } from '@douyinfe/semi-ui';
import logo from '../public/navbar/logo.svg'
import logoHovering from '../public/navbar/logo-hovering@2x.png'
import Qrcode from './Qrcode'
import menuIcon from '../public/navbar/menuicon.svg'
import logoBlack from '../public/navbar/logo-black.svg'



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
          <Image className="transition hover:rotate-45" src={logoHovering} width={36} height={36} alt="logo-hovering" />
        ) : (
          <Image className="transition" src={logo} width={36} height={36} alt="logo-normal" />
        )}
    </div>
  );
};

const Navbar = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const change = () => {
      setVisible(!visible);
  };
  return (
    
    <div className="fixed z-10 flex w-full justify-between h-20 px-6 lg:px-10 text-white  mix-blend-difference">
      <div className = 'self-center '>
      {/* <Link href="/">
              <a><Logo/></a>
              </Link> */}
        
      </div>
        <div className ='self-center uppercase  '>
          <ul className="hidden md:flex flex-row flex-wrap justify-between gap-10 xl:gap-20">
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
        <div className="self-center hidden md:flex">
        <Qrcode/>
        </div>
        
        
        <SideSheet
        
        //  title={
        //   <div className = 'self-center '>
        //   <Link href="/">
        //           <a>
        //             <Image src={logoBlack } width= {36} height={36}></Image>
        //           </a>
        //           </Link>
            
        //   </div>
        // }
         visible={visible} 
          onCancel={change}
          placement= 'top'>
            <div className="text-xl">
                <ul>
                <li className={router.pathname == "/" ? " font-bold py-4" : " py-4"}>
              <Link href="/">
                <a className="inline-block">All Work</a>
                </Link>
              </li>
                  <li className={router.pathname == "/illustrations" ? "font-bold py-4" : "py-4"}>
              <Link href="/illustrations">
                <a className="inline-block">Illustrations</a>
                </Link>
              </li>
              <li className={router.pathname == "/about" ? " font-bold py-4" : "py-4"}>
            <Link href="/about">
              <a className="inline-block">About</a>
              </Link>
            </li>
            <li className="py-4">
            <Link href="https://dribbble.com/mumumycat">
              <a className="inline-block">Dribbble</a>
              </Link>
            </li>
              </ul>
            </div>
            <div className="mt-20 text-gray-600">
            Copyright © 2014-present Charles
            </div>
        </SideSheet>

        <button onClick={change} className="self-center md:hidden ">
          <Image src={menuIcon} alt = "menu-icon" width={36} height={36}></Image>
        </button>

         
      </div>
       
  )
}

export default Navbar

