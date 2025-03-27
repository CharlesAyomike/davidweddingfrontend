"use client"
import { useState } from 'react'
import toast from 'react-hot-toast'

function HasEntered({hasEntered, guestC}) {

    const [checkHasEntered, setCheckHasEntered] = useState(hasEntered)


    const handleHasEntered = async (guestCode) => {
        if(checkHasEntered) return
        setCheckHasEntered(prev => !prev)

        const response = await fetch(`https://davidbackend-gi5p.onrender.com/guest/hasEntered/${guestCode}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ hasEntered: checkHasEntered ? false : true }),
        })
        if (response.status === 200) {

           
            }else{
               
              setCheckHasEntered(prev => !prev)  
              toast.error("there was an error, please try")
            }

          }

     
  return (
    <input type="checkbox" checked={checkHasEntered} onClick={()=>handleHasEntered(guestC)}/>
  )
}

export default HasEntered