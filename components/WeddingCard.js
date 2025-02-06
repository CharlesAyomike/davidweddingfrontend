"use client"

import { useEffect, useRef } from "react"

function WeddingCard({code}) {
    const card = "/cards/invitationcard.jpeg"
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

            cxt.font = "17px Dancing_script"
            cxt.fillStyle = "#800020"
            cxt.strokeStyle = "#800020"
            cxt.lineWidth = 1
            cxt.textAlign = "center"

            const x = canvas.width / 1.65
            const y = canvas.height - 145

            cxt.strokeText(code, x, y)
            cxt.fillText(code, x, y)

        }
    },[])

    const download = () =>{
      const canvas = canvasRef.current
      const link = document.createElement("a")
      link.download = "Ayomide_and_David_wedding_card.png"
      link.href = canvas.toDataURL("image/png")
      link.click()
  } 

  return (
<main className="flex-1 pt-16 px-16">


  <canvas ref={canvasRef} className="mx-auto w-full max-w-[450px]"></canvas>


<div className="flex justify-center my-5 items-center">
  <button onClick={download} className="border bg-[#800020] text-white px-3 py-2 rounded-lg">
    download card
  </button>
</div>
</main>
  )
}

export default WeddingCard