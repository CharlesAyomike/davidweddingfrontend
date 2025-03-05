import Form2 from "@/components/Form2";
import { redirect } from 'next/navigation'

async function getData(code) {
    const res =  await fetch(`https://davidbackend-gi5p.onrender.com/guest/${code}`)
     if(!res.ok){
        throw new Error("fail to fetch data")
     }
     return res.json()
}
const  page = async ({params}) => {

  const code = (await params).code
      const data = await getData(code)
  
      if(data?.status === 404){
          redirect("/")
      }
  
      if(data?.link === "home"){
          redirect("/home")
      }

  

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0 bg-[url('/ph1.jpg')] md:bg-[url('/banner.jpeg')]"/>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#FFE5B4]/30 backdrop-blur-sm z-10" />
      
      {/* Form Container */}
      <div className="relative z-20 bg-white/90 p-10 rounded-lg shadow-lg max-w-md w-11/12 text-center">
        {/* Decorative Border */}
        <div className="absolute -inset-3 border-2 border-[#FFE5B4] rounded-xl pointer-events-none" />
        
        {/* Content */}
        <h1 className="text-2xl text-[#800020] mb-8">
          Welcome to Our Wedding
        </h1>
        
        <Form2 code={code}/>
      </div>
    </div>
  );
};

export default page;