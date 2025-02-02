

const Home = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/banner.jpg')`
        }}
      />
      
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
        
        <form className="space-y-6">
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Please enter your name"
              className="w-full px-4 py-3 rounded-md border border-[#FFE5B4] focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <input
              type="text"
              placeholder="Please enter your email"
              className="w-full px-4 py-3 rounded-md border border-[#FFE5B4] focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#800020] text-white py-3 px-6 rounded-md hover:bg-rose-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;