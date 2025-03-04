import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Header from '@/components/Header'
import { redirect } from 'next/navigation'
import React from 'react'

async function getData(code) {
    const res =  await fetch(`https://davidbackend-gi5p.onrender.com/guest/${code}`)
     if(!res.ok){
        throw new Error("fail to fetch data")
     }

     return res.json()
}

const page = async ({params}) => {
    const code = (await params).code
    const data = await getData(code)

    if(data?.status === 404){
        redirect("/")
    }

    if(data?.link !== "home" || !data?.guest?.name){
        redirect("/")
    }


  return (
    <div className='min-h-screen flex flex-col bg-[#FFE5B4]'>
        <Header code={code}/>

        <div className='flex-1 mb-24 mt-5'>
          <div className='text-center mb-4'>
            <h2 className='font-bold text-xl md:text-3xl font-dancing_script '>Enjoy our lovely pre wedding shoot</h2>
          </div>
          <Grid/>
        </div>

      <Footer/>
    </div>
  )
}

export default page