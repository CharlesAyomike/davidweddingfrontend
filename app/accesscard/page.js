import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const page = () => {
    return (
      <div className="bg-[#FFE5B4] h-screen">
        <Header/>
        
        
      <div className="pt-16 px-16">
  
          <Image alt="weddind invitation card" src="/cards/accesscard.jpg" width={500} height={0} className="mx-auto"/>
       

      </div>
      <div className="flex justify-center my-5 item-center">
        <button className="border bg-[#800020] text-white px-3 py-2 rounded-lg">download card</button>
      </div>

        <div className="absolute bottom-0 w-full">
            <Footer/>
        </div>
      </div>

    );
  };
  
  export default page;
  