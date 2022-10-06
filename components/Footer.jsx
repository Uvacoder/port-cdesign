import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (

    <div className="flex lg:justify-end justify-center lg:content-end">

    
    <div className="flex flex-col  px-6 lg:px-10">
    <div className='lg:self-end self-center mt-20'   style={{
      
      float:'right',
      width: '50%',
      height: '1px',
      borderTop: 'solid rgba(255,255,255,0.5) 1px',
    }}>

    </div>
    <div className="flex flex-row gap-8 mt-10 text-m lg:text-xl">
    
    <Link href='https://dribbble.com/mumumycat'>
    <a className=" text-white font-bold">
        Dribbble 
    </a>
    </Link>
    <Link href='https://github.com/Charles026'>
    <a className=" text-white font-bold">
        Github 
    </a>
    </Link>
    <Link href='https://www.instagram.com/bancs_pine/'>
    <a className=" text-white font-bold">
        Instagram 
    </a>
    </Link>
    </div>
    <div className="text-center text-sm flex flex-col text-gray-400 my-10">
     <p className=" lg:text-right">Build with love for Ahdai</p> 
     <p className=" lg:text-right">
     Copyright © 2014-present Charles
     </p>
    </div>
    </div>
    </div>
  )
}

export default Footer