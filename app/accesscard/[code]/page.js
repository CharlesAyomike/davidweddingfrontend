import AccessCard from "@/components/AccessCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { redirect } from "next/navigation";


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
    <div className="min-h-screen bg-[#FFE5B4] flex flex-col">
      <Header code={code}/>


      <AccessCard name={data?.guest?.name}/>

      <Footer />
    </div>
  );
};

export default page;