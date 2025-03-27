"use client"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

function Videos() {

    const [videoSrc, setVideoSrc] = useState("https://res.cloudinary.com/dlgjcthok/video/upload/v1743021483/Ayo_David_reels_2_erekfh.mp4")
    const videoRef = useRef()

    const handleVideo = (videoSrc) => {
        setVideoSrc(videoSrc);
    };
    
    useEffect(() => {
        if (videoRef.current && videoSrc) {
            videoRef.current.load();
            videoRef.current.play().catch(error => console.error("Error playing video:", error));
        }
    }, [videoSrc]);
    
    

  return (
    <div className="container mx-auto p-4">

        <div className="flex justify-center mb-9">
            <video ref={videoRef} width={500} height={300} className="w-[300] h-[200]  md:w-[500] md:h-[300] rounded-md" controls>
                <source src={videoSrc} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>

  
<div className="md:flex md:justify-center md:space-x-6">
    <Image src="/video1.png" alt="" width={200} height={140} className='h-[140px] w-[230px] mx-auto md:mx-0 rounded-md cursor-pointer' onClick={()=>handleVideo("https://res.cloudinary.com/dlgjcthok/video/upload/v1743021483/Ayo_David_reels_2_erekfh.mp4")}/>
    <Image src="/ph1.jpg" alt="" width={200} height={140} className='h-[140px] w-[230px] mx-auto md:mx-0 my-3 md:my-0 rounded-md cursor-pointer' onClick={()=>handleVideo("")}/>
</div>
        
    
        
    </div>
  )
}

export default Videos