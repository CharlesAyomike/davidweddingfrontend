import CountdownTimer from '@/components/CountdownTimer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import { FaBus } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { redirect } from 'next/navigation'

async function getData(code) {
    const res =  await fetch(`https://davidbackend-gi5p.onrender.com/guest/${code}`)
     if(!res.ok){
        throw new Error("fail to fetch data")
     }

     return res.json()
}

async function page({params}) {
    const code = (await params).code
    const data = await getData(code)

    if(data?.status === 404){
        redirect("/")
    }

    if(data?.link !== "home" || !data?.guest?.name){
        redirect("/")
    }


  return (
    <div>
        <Header code={code}/>
    <div 
        className="bg-cover h-[400px] bg-center md:h-[650px] text-[#800020]"
        style={{backgroundImage: `url('/banner2.jpg')`}}
    >
            <div className='p-20 md:p-0 md:absolute bottom-10 left-16'>
                <h2 className='font-dancing_script font-extrabold text-5xl md:text-8xl'>Ayomide & </h2>
                <h2 className='font-dancing_script font-extrabold text-5xl md:text-8xl'> David </h2>
                    
                <h4 className='text-xl md:text-2xl font-bold'>March 29, 2025</h4>

            <div className='mt-10'>
                <button className='bg-[#800020] px-6 py-3 text-white rounded-bl-lg rounded-tr-lg'>
                    <Link href={`/accesscard/${code}`}>
                        RSVP
                    </Link>
                </button>
            </div>
            </div>
           

          
        </div>
      

        <div className='md:flex justify-between py-24 bg-[#FFE5B4]'>
            <div className='flex-1 flex justify-center item-center px-5'>
                <div>
                    <h3 className='mb-10 md:mb-4 font-bold text-5xl font-dancing_script text-center'>Our Story</h3>
                    <Image src="/ph9.jpeg" width={300} height={300} className='h-[300px] mb-3 mx-auto object-cover w-[300px]  border border-black p-1 rounded-br-xl rounded-tl-xl'/>
                    
                <p className='mb-2'>
                David and I were work buddies before anything. I knew him as that dependable contact who always went the extra mile to give unwavering support to me whenever I needed a service from where he worked, but things took a little turn after a meeting I had with his team in January 2024. I was a bit under the weather and although I had managed to be at work on that day, I still looked a mess. 
                </p>
                <p className='mb-2'>
                He literally called every day after that to check on me and in that simple act of kindness, I began to see him in a new, more profound light. As our friendship budded and grew stronger, I saw his thoughtfulness and the depth of his character, his genuineness and commitment. And today, we are living a beautiful story.
                <br/>- Ayomide
                </p>
                   
                </div>

                

            </div>
            <div className='flex-1 p-2 flex justify-center item-center mt-10 md:mt-0'>
                <div>

                <p className='mb-2 text-justify'>
                    I got to meet Ayomide when I resumed a new job and was assigned the account of a company in which she worked. She was to be the main contact person from the company I would be working with. On the first day I saw her, everything about her screamed different. She was so good-natured and stood out in such a special way. Her smile, her voice, her warmth, her professionalism, her beauty!
                    </p>
                    <p className='mb-2 text-justify'>

                    As time went on, I found myself curious. I found myself looking forward to the next visit, to her emails, to her work calls. I became distinctively mindful of her, till I made up my mind to take a step a little over a year after and ask her out on a date. I waited that long to be as ready as I could for her because I knew I wanted her as my wife. At every step after then, I have known peace and joy like no other.
                    </p>
                    <p className='mb-2 text-justify'>
                    There were days I would go to her office and think, She’s serious today, and other days, we would just sit and have work discussions. She would simply say, The service is nice, no complaints. But whenever I got back to work, I would still bring up ways to improve things. My colleague, who usually accompanied me to the meetings, would be puzzled, saying, But she didn’t complain about anything. And I’d insist, It can be better.
                    </p>
                    <p className='mb-2 text-justify'>

                    They would just look at me and say, Okay, no problem.
                    </p>
                    <p className='mb-2 text-justify'>

                    Looking back now, I realize it was never just about work, it was about her. And now, the journey that started with simple meetings and unspoken admiration has led us here.
                     </p>
                    <p className='mb-2 text-justify'>
                    Now, they are ready for the next chapter of their relationship to begin.

                    <br/>
                    -David
                </p>


                <Image src="/ph11.jpeg" width={300} height={300} className='h-[250px] w-[250px] object-center border ml-10 mt-10 border-black p-1'/>
            </div>
            </div>

        </div>

        <div className='bg-black/90 text-white md:flex py-24'>
            <div className='flex-1 flex justify-center pt-4 md:pt-16 item-center'>
                <div className='w-[80%] md:w-[60%] mx-auto'>
                    <h3 className='mb-4 font-bold text-5xl font-dancing_script'>Join us as we tie the knot!</h3>
                    <div className='mt-4'>
                        <p>
                            March 29, 2025 | 11:00 AM onwards
                        </p>
                        <p className='mt-3'>
                            Abundant Life Gosple Church
                            <br/>
                            69, Iju Road, Agege, Lagos.
                        </p>
                        <div className='mt-10'>
                            <CountdownTimer targetDate="28 Mar 2025 00:12:00 GMT"/>
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex-1 flex justify-center item-center mt-10 md:mt-0 px-4 md:px-0'>
                <Image src="/banner.jpeg" width={550} height={400} className='w-[350px] h-[250px] md:w-[550px] md:h-[400px] border border-white p-1'/>
            </div>
        </div>

        <div className='py-24  bg-[#FFE5B4]'>
            <div className='md:flex justify-evenly w-full md:w-[70%] mx-auto'>
                <Image src="/ph6.jpeg" width={250} height={300} className='w-[250px] h-[270px] mx-auto md:mx-0 object-cover rounded-tl-[20px] mb-7 md:mb-0 rounded-br-[20px] md:h-[350px] border border-black p-1'/>
                <Image src="/ph7.jpeg" width={250} height={300} className='w-[250px] h-[270px] mx-auto md:mx-0 object-cover rounded-tr-[20px] rounded-bl-[20px] md:h-[350px] border border-black p-1'/>
            </div>
            <div className='w-[70%] mx-auto mt-5 text-center'>
                <h3 className='mb-4 font-bold text-3xl font-dancing_script'>What to Wear</h3>
                <p>
                    Suggested outfits for the ladies and gentlemen
                </p>
            </div>
        </div>

        <div className='bg-black/90 text-white md:flex py-24'>
            <div className='flex-1 px-4 md:px-10'>
            <div className='w-full'>
              
            

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3963.1122933684164!2d3.321446673589163!3d6.632973421884377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1738797949866!5m2!1sen!2sng" width="100%" height="350" className='border-0' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           
                
            </div>
            </div>
            <div className='flex-1 ml-16 my-16'>
                <h3 className='mb-4 font-bold text-4xl font-dancing_script'>Getting there</h3>
                <div className='my-10 flex item-center gap-2'>
                    <FaBus size={30}/> Sierralane Park Station
                </div>
                <div className='my-10 flex item-center gap-2'>
                    <FaMotorcycle size={30}/> Sierralane Park Station
                </div>
                <div className='my-10 flex item-center gap-2'>
                    <FaCar size={30}/> Sierralane Park Station
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default page