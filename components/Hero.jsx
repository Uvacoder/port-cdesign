import Image from "next/image"

const Hero = () => {
  return (
    <div className="text-white mt-20 flex flex-col justify-center items-center p-auto h-180 gap-y-6">
        <Image className="justify-self-center" src='/../public/avatar@2x.png' alt='picture of my avatar' width={100} height={100}/>
        <div className="text-white font-bold text-4xl xl:text-6xl text-center">
        Hola! Amigos.
        </div>
        <div className='text-white font-bold text-2xl xl:text-4xl w-4/5 xl:w-3/5 text-center leading-normal'>
        I’m Chales. I’m an UI/UX designer✏️, sometime coder🧑‍💻, and sometime drunker🤮🌚
        </div>
    </div>
  )
}

export default Hero