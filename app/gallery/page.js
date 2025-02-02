import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'

function Gallery() {
  return (
    <div className='bg-[#FFE5B4]'>
        <Header/>
        <div className='mb-24 mt-5'>
          <div className='text-center mb-4'>
            <h2 className='font-bold text-xl md:text-3xl font-dancing_script '>Enjoy our lovely pre wedding shoot</h2>
          </div>
          <Grid/>
        </div>
      <Footer/>
    </div>
  )
}

export default Gallery