import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CaseCard = ({image,link,title,tag1,tag2,tag3}) => {
  return (
    <div>
    <div className='lg:mb-16 md:mb-8 sm:mb-8'>
    <Link href={link}>
    <a >
    <Image src={image}  className=" hover:scale-[98%] transition-all duration-300 w-full lg:w-full  ">
    </Image>
    </a>
    </Link>

    <Link href={link}>
    <a >
    <div className="text-xl text-white font-bold mt-4">
    {title}
    </div>
    </a>
    </Link>

   
    <div className= ' flex flex-row text-gray-400 font-normal mt-2'>
    <div className="mr-4"> {tag1}</div> 
    <div className='mr-4'> {tag2}</div>     
    <div> {tag3}</div>     
    </div>
    
    </div>
    </div>
  )
}

export default CaseCard