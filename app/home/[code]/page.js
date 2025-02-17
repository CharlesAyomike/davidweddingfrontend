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
        className="bg-cover h-[400px] bg-center md:h-[650px] text-white"
        style={{backgroundImage: `url('/banner.jpeg')`}}
    >
            <div className='p-20 md:p-0 md:absolute bottom-10 left-16'>
                <h2 className='font-dancing_script font-extrabold text-5xl md:text-8xl'>Ayomide & </h2>
                <h2 className='font-dancing_script font-extrabold text-5xl md:text-8xl'> David </h2>
                    
                <h4 className='text-xl md:text-2xl font-bold'>March 29, 2025</h4>

            <div className='mt-10'>
                <button className='bg-[#800020] px-6 py-3 text-white rounded-bl-lg rounded-tr-lg'>
                    <Link href={`/accesscard/${code}`}>
                        Access Card
                    </Link>
                </button>
            </div>
            </div>
           

          
        </div>
      

        <div className='md:flex justify-between py-24 bg-[#FFE5B4]'>
            <div className='flex-1 flex justify-center item-center px-4'>
                <div>
                    <h3 className='mb-10 md:mb-4 font-bold text-5xl font-dancing_script text-center'>Our Story</h3>
                    <Image src="/ph17.jpeg" width={250} height={300} className='h-[300px] mb-3 mx-auto w-[250px]  border border-black p-1 rounded-br-xl rounded-tl-xl'/>
                    
                <p className='mb-2 text-justify'>
                David and I were work buddies before anything. I knew him as that dependable contact who always went the extra mile to give unwavering support to me whenever I needed a service from where he worked, but things took a little turn after a meeting I had with his team in January 2024. I was a bit under the weather and although I had managed to be at work on that day, I still looked a mess. 
                </p>
                <p className='mb-2 text-justify'>
                He literally called every day after that to check on me and in that simple act of kindness, I began to see him in a new, more profound light. As our friendship budded and grew stronger, I saw his thoughtfulness and the depth of his character, his genuineness and commitment. And today, we are living a beautiful story.
                <br/>- Ayomide
                </p>
                   
                </div>



            </div>
            <div className='flex-1 p-2 flex justify-center item-center mt-10 md:mt-0 px-4'>
                <div>
                <Image src="/ph21.jpeg" width={250} height={300} className='h-[300px] w-[280px] mb-3 object-center border mx-auto md:hidden border-black p-1'/>

                <p className='mb-2 text-justify'>
                I got to meet Ayomide when I resumed a new job and was assigned the account of a company in which she worked. She was to be the main contact person from the company I would be in talks with. On the first day I saw her, everything about her screamed different. She was so good-natured and stood out in such a special way. Her smile, her voice, her warmth, her professionalism, her beauty!  
                    
                    </p>
                    <p className='mb-2 text-justify'>

                    As time went on, I found myself curious. I found myself looking forward to the next visit, to her emails, to her work calls.  
                    
                    </p>
                    <p className='mb-2 text-justify'>
                    There were days I would go to her office and she gives the serious and busy face, In my mind “She’s serious today,” and other days, we would just sit and have work discussions. She would simply say, “The service is nice, no complaints,” keeping the conversation short and straight to the point.  
                    
                    </p>
                    <p className='mb-2 text-justify'>

                        I became distinctively mindful of her, and looking back now, I realize it was never just about work. It was about her.  
                    
                    </p>
                    <p className='mb-2 text-justify'>

                    Then came the day I told my colleague, “Let’s go to her office.” My mind was made up that very day. When I got there, as usual, she still came out with that serious and busy face. I had tried already. It had been a little over a year, and there it was. We got talking, random stuff here and there, and there it was, I couldn’t see the busy face anymore. She was more relaxed. I just made sure the conversation didn’t end there. I waited that long to be as ready as I could for her because I knew I wanted her as my wife.  
                     </p>
                     <p>
                    At every step after then, I have known peace and joy like no other.  
                     </p>
                    <p className='mb-2 text-justify'>
                    And now, the journey that started with simple meetings and unspoken admiration has birthed our union.  
                    <br/>
                    -David
                </p>


                <Image src="/ph21.jpeg" width={250} height={300} className='h-[300px] w-[280px] object-center border hidden md:block ml-10 mt-10 border-black p-1'/>
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
                <Image src="/ph3.jpeg" width={250} height={300} className='w-[250px] h-[270px] mx-auto md:mx-0 object-center rounded-tl-[20px] mb-7 md:mb-0 rounded-br-[20px] md:h-[350px] border border-black p-1'/>
                <Image src="/ph9.jpeg" width={250} height={300} className='w-[250px] h-[270px] mx-auto md:mx-0 object-center rounded-tr-[20px] rounded-bl-[20px] md:h-[350px] border border-black p-1'/>
            </div>
            <div className='w-[80%] md:w-[50%] mx-auto mt-5 text-center'>
                <p className='font-bold font-dancing_script text-xl'>
                We can’t imagine this special day without the people who mean the most to us. It would be our greatest joy to have you celebrate this beautiful moment with us.
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
                <h3 className='mb-4 font-bold text-4xl font-dancing_script'>RSVP</h3>
                <div className='my-10 flex item-center gap-2'>
                     Mojisola : 08108657188
                </div>
                <div className='my-10 flex item-center gap-2'>
                    Kolapo : 09024894290
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default page