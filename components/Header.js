"use client"
import Link from 'next/link'
import { useRef } from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Header({code}) {

  const sideBarRef = useRef(null)

  const openSideBar = () => {
    sideBarRef.current.style.width = "100%"
  }

  const closeSideBar = () =>{
    sideBarRef.current.style.width = "0"
  }

  return (
    <>

      <header className='hidden md:flex justify-between item-center py-4 px-20 shadow-md bg-[#800020] text-white'>
        <Link href="/home" className='font-dancing_script font-extrabold text-2xl block'>Ayomike & David</Link>
        <nav className='flex gap-3 mt-1'>
            <Link href={`/invitationcard/${code}`} className='font-bold hover:text-white/80'>Wedding Card</Link>
            <Link href={`/accesscard/${code}`} className='font-bold hover:text-white/80'>Access Card</Link>
            <Link href={`/gallery/${code}`} className='font-bold hover:text-white/80'>Pre Wedding Photos</Link>
        </nav>
      </header>

      <header className='md:hidden p-4 shadow-md bg-[#800020] text-white'>
      <button onClick={openSideBar}> 
        <IoMenuSharp size={25}/>
      </button>
      </header>

    

      <div ref={sideBarRef} className='fixed overflow-hidden text-white top-0 bottom-0 h-screen w-0 z-10 bg-black/40 transition-all'>
          <div className='w-[40%] bg-[#800020] h-full pt-5 p-4'>
            <div>
              <button onClick={closeSideBar}> 
                <IoMdClose size={25}/>
              </button>
            </div>

            <div className='pt-16'>
              <Link href="/home" className='font-dancing_script font-extrabold text-xl block'>Ayomike & David</Link>
              <div className='my-4'>
                <Link href="/invitationcard" className='font-bold hover:text-white/80'>Wedding Card</Link>
              </div>
              <div className='my-4'>
                <Link href="/accesscard" className='font-bold hover:text-white/80'>Access Card</Link>
              </div>
              <div className='my-4'>
                <Link href="/gallery" className='font-bold hover:text-white/80'>Pre Wedding Photos</Link>
              </div>
            </div>
            
          </div>
      </div>
     

    </>
   
  )
}

export default Header