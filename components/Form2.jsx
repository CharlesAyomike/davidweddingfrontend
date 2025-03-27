"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'


function Form2({code}) {

        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [loading, setLoading] = useState(false)
        const router = useRouter()
        const handleName = (e) =>{
            setName(e.target.value)
        }
        const handleEmail = (e) =>{
            setEmail(e.target.value)
        }
        async function submit(guestCode) {
            if(!name || !email) return
            setLoading(true)
            const response = await fetch(`https://davidbackend-gi5p.onrender.com/guest/${guestCode}`, {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name:name, email:email, hasEntered:false }),
            })
            if (response.status === 200) {
    
                const data = await response.json()
                if(data?.code){
                router.push(`/home/${data.code}`)
                }else{
                  toast.error("there was an error, please try")
                }
                
                setLoading(false)

    
              } else {
                setLoading(false)
                toast.error("invalid email address")
              }

    
            }

  return (
    <div>
          <div className="my-4">
            <input
              type="text"
              value={name}
              onChange={e=>handleName(e)}
              placeholder="Please enter your name"
              className="w-full px-4 py-3 rounded-md border border-[#FFE5B4] focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
              required
            />
          </div>

          <div className="my-4">
            <input
              type="text"
              value={email}
              onChange={(e)=>handleEmail(e)}
              placeholder="Please enter your email"
              className="w-full px-4 py-3 rounded-md border border-[#FFE5B4] focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
              required
            />
          </div>
          
          <button
            disabled={loading}
            onClick={()=>submit(code)}
            type="submit"
            className="w-full my-4 bg-[#800020] text-white py-3 px-6 rounded-md hover:bg-rose-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            {loading ? "Loading..." :"Submit"}
          </button>
    </div>
  )
}

export default Form2