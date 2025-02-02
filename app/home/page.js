import CountdownTimer from '@/components/CountdownTimer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { FaBus } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";

function page() {
  return (
    <div>
        <Header/>
    <div 
        className="bg-cover h-[400px] bg-center md:h-[650px] text-white"
        style={{backgroundImage: `url('/banner.jpg')`}}
    >
            <div className='p-20 md:p-0 md:absolute bottom-10 left-16'>
                <h2 className='font-dancing_script font-extrabold text-5xl md:text-8xl'>Ayomide & </h2>
                <h2 className='font-dancing_script font-extrabold text-5xl md:text-8xl'> David </h2>
                    
                <h4 className='text-xl md:text-2xl font-bold'>March 29, 2025</h4>

            <div className='mt-10'>
                <button className='bg-[#800020] px-6 py-3 text-white rounded-bl-lg rounded-tr-lg'>
                    <Link href="/accesscard">
                        RSVP
                    </Link>
                </button>
            </div>
            </div>
           

          
        </div>
      

        <div className='md:flex justify-between py-24 bg-[#FFE5B4]'>
            <div className='flex-1 flex justify-center item-center'>
                <div>
                    <h3 className='mb-10 md:mb-4 font-bold text-5xl font-dancing_script text-center'>Our Story</h3>
                    <Image src="/ph2.jpg" width={300} height={300} className='h-[300px] w-[300px] border border-black p-1 rounded-br-xl rounded-tl-xl'/>
                </div>
            </div>
            <div className='flex-1 p-2 flex justify-center item-center mt-10 md:mt-0'>
                <div>

                <p className='mb-2'>
                    Joseph and Imogen are high school sweethearts who have been together for seven years.
                </p>
                <p className='mb-2'>
                    A natural-born charmer, Joseph proposed to Imogen in the classroom where they first met. 
                </p>
                <p className='mb-2'>
                    From that moment, Imogen knew that they were destined to be together.
                </p>
                <p className='mb-2'>
                    Now, they are ready for the next chapter of their relationship to begin.
                </p>
                <Image src="/ph2.jpg" width={300} height={300} className='h-[250px] w-[250px] border ml-10 mt-10 border-black p-1'/>
            </div>
            </div>

        </div>

        <div className='bg-black/90 text-white md:flex py-24'>
            <div className='flex-1 flex justify-center pt-16 item-center'>
                <div>
                    <h3 className='mb-4 font-bold text-5xl font-dancing_script w-[60%] mx-auto'>Join us as we tie the knot!</h3>
                    <div className='w-[60%] mt-4 mx-auto'>
                        <p>
                            When: March 29, 2025 | 2:00 PM onwards
                        </p>
                        <p>
                            Where: Sierra Lane Garden, 123 Anywhere St., Any City
                        </p>
                        <div className='mt-10'>
                            <CountdownTimer targetDate="28 Mar 2025 00:12:00 GMT"/>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex-1 flex justify-center item-center mt-10 md:mt-0'>
                <Image src="/ph2.jpg" width={550} height={400} className='w-[350px] h-[250px] md:w-[550px] md:h-[400px] border border-white p-1'/>
            </div>
        </div>

        <div className='py-24  bg-[#FFE5B4]'>
            <div className='md:flex justify-evenly w-full md:w-[70%] mx-auto'>
                <Image src="/ph2.jpg" width={250} height={300} className='w-[290px] mx-auto md:mx-0 rounded-tl-[20px] mb-7 md:mb-0 rounded-br-[20px] h-[350px] border border-black p-1'/>
                <Image src="/ph2.jpg" width={250} height={300} className='w-[290px] mx-auto md:mx-0 rounded-tr-[20px] rounded-bl-[20px] h-[350px] border border-black p-1'/>
            </div>
            <div className='w-[70%] mx-auto mt-5 text-center'>
                <h3 className='mb-4 font-bold text-3xl font-dancing_script'>What to Wear</h3>
                <p>
                    Suggested outfits for the ladies and gentlemen
                </p>
            </div>
        </div>

        <div className='bg-black/90 text-white md:flex py-24'>
            <div className='flex-1 px-10'>
            <div className='w-full'>
              
                
                        <iframe width="100%" height="350"   src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                            <a href="https://sprunkiphasez.com/">Sprunki Phase</a>
                        </iframe>
           
                
            </div>
            </div>
            <div className='flex-1 ml-16 my-16'>
                <h3 className='mb-4 font-bold text-4xl font-dancing_script'>Getting there</h3>
                <div className='my-10 flex item-center gap-2'>
                    <FaBus size={30}/> Sierralane Park Station
                </div>
                <div className='my-10 flex flex item-center gap-2'>
                    <FaMotorcycle size={30}/> Sierralane Park Station
                </div>
                <div className='my-10 flex flex item-center gap-2'>
                    <FaCar size={30}/> Sierralane Park Station
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default page