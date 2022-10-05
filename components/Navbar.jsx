import React, { useState } from 'react';
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router';
import { Popover } from '@douyinfe/semi-ui';
import logo from '../public/navbar/logo.svg'
import logoHovering from '../public/navbar/logo-hovering@2x.png'
import iconQrcode from '../public/navbar/qrcode.svg'
import qrcode from '../public/navbar/qrcode@2x.png'


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
            <Image className="mx-4"  src={qrcode} alt='picture of wechat qrcode' width={240} height={240}/>}
            trigger="hover"
            clickToHide={true}
            position= 'bottomRight'>
              <button className="self-center">
                <Image className=" hover:opacity-80 active:opacity-95"  src={iconQrcode} alt='icon qrcode' width={36} height={36}/>
              </button>
          

          </Popover>
        
      </div>
       
  )
}

export default Navbar

