"use client"
import React, { useEffect, useRef } from 'react'

function AccessCard({name}) {

      const card = "/cards/accesscard.jpeg"
        const canvasRef = useRef(null)
    
        useEffect(()=>{
            const canvas = canvasRef.current
            const cxt = canvas.getContext("2d")
            const img = new Image()
    
            img.src = card
            img.crossOrigin = "anonymous"
    
            img.onload = () =>{
                canvas.width = img.width
                canvas.height = img.height
    
                cxt.drawImage(img, 0, 0)
    
                cxt.font = "35px Dancing_script"
                cxt.fillStyle = "#800020"
                cxt.strokeStyle = "#800020"
                cxt.lineWidth = 1
                cxt.textAlign = "center"
    
                const x = canvas.width / 2.6
                const y = canvas.height - 85
    
                cxt.strokeText(name, x, y)
                cxt.fillText(name, x, y)
    
            }
        },[])

        const download = () =>{
            const canvas = canvasRef.current
            const link = document.createElement("a")
            link.download = "Ayomide_and_David_access_card.png"
            link.href = canvas.toDataURL("image/png")
            link.click()
        }


  return (
    <main className="flex-1 pt-16 px-16">
   
  <canvas ref={canvasRef} className="md:mx-auto w-full max-w-[500px]"></canvas>


    <div className="flex justify-center my-5 items-center">
      <button onClick={download} className="border bg-[#800020] text-white px-3 py-2 rounded-lg">
        download card
      </button>
    </div>
  </main>
  )
}

export default AccessCard