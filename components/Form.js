"use client"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { toast } from "react-hot-toast"

function Form() {
    const [code, setCode] = useState()
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleInput = (e) =>{
        setCode(e.target.value)
    }
    async function checkCode() {
        if(!code) {
          toast.error("code is compulsory")
          return
        }
        setLoading(true)
        const updateCode = code.toUpperCase()
        const response = await fetch(`https://davidbackend-gi5p.onrender.com/guest/${updateCode}`)
        if (response.status === 200) {

            const data = await response.json()
            if(data?.link){
                router.push(`/${data.link}/${data.guest.code}`)
            }else{
              toast.error(data?.message)
            }
            
            setLoading(false)

          } else {
            setLoading(false)
            toast.error("request error please try again")

          }

        }

  return (
    <div>
          <div className="space-y-2">
            <input
              type="text"
              value={code}
              onChange={e=>handleInput(e)}
              placeholder="Please enter your invite code"
              className="w-full px-4 py-3 rounded-md border border-[#FFE5B4] focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
              required
            />
          </div>
          
          <button
            disabled={loading}
            onClick={checkCode}
            type="submit"
            className="w-full mt-5 bg-[#800020] text-white py-3 px-6 rounded-md hover:bg-rose-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >

            {loading?"Loading...":"Submit"}
          </button>
    </div>
  )
}

export default Form