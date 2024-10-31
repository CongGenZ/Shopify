import { useSelector } from "react-redux";

const Hero = () => {
  const isLightMode = useSelector((state)=>state.themeSlice.isLightMode);
  return (
    <div className="bg-[#e3edf6] dark:bg-slate-600 font-lora" style={{
      backgroundColor: isLightMode ? '#fff' : '#333', 
      color: isLightMode ? '#000' : '#fff' 
    }}>
      <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-black dark:text-white">
              Starting At <span className="font-bold">$999</span>
            </p>
            <h2 className="text-black font-bold text-4xl md:text-5xl dark:text-white">
              The best notebook collection 2024
            </h2>
            <h3 className="text-2xl dark:text-white">
              Exclusive offer <span className="text-red-600">-10%</span> off
              this week
            </h3>
            <a
              data-test="hero-btn"
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white cursor-pointer"
              style={{
                backgroundColor: isLightMode ? 'hover:rgb(59 130 246)' : '#333', 
                color: isLightMode ? '#000' : '#fff' 
              }}
            >
              Shop Now
            </a>
          </div>
        </div>
        <div>
          <img src="/hero.png" alt="hero" className="ml-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
