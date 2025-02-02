import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen bg-[#FFE5B4] flex flex-col">
      <Header />

      <main className="flex-1 pt-16 px-16">

        <Image 
        alt="weddind invitation card" 
        src="/cards/invitationcard.jpg" 
        width={450} 
        height={0} 
        className="mx-auto"
        />


        <div className="flex justify-center my-5 items-center">
          <button className="border bg-[#800020] text-white px-3 py-2 rounded-lg">
            download card
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
  