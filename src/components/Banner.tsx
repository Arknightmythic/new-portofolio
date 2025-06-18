import MyPhoto from "../assets/erasebg-transformed.webp";

export default function Banner() {
  return (
    <div className="relative w-full mt-10 pt-20 bg-[#F5F7FA] flex flex-col justify-center text-center overflow-hidden">
      {/* Content on top of gradient */}
      <div className="relative z-10">
        <h4 className="text-[#0A192F] md:text-[30px] text-lg font-medium">Full Stack Developer</h4>
        <h2 className="text-[#0A192F] md:text-[50px] text-xl font-bold">ALBERTUS RENO KRISTIARDY</h2>
        <div className="w-[600px] h-[600px] overflow-hidden mx-auto mt-4">
          <img
            src={MyPhoto}
            alt="myphoto"
            className="w-full -mt-50"
          />
        </div>
      </div>

      {/* Ultra Smooth Gradient Overlay without blur */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/2 z-10"
        style={{
          background: `linear-gradient(to top, 
            #0A192F 0%, 
            #0A192Fe6 5%, 
            #0A192Fcc 10%, 
            #0A192Fb3 15%, 
            #0A192F99 20%, 
            #0A192F80 25%, 
            #0A192F66 30%, 
            #0A192F4d 35%, 
            #0A192F33 40%, 
            #0A192F26 45%, 
            #0A192F1a 50%, 
            #0A192F0d 55%, 
            #0A192F08 60%, 
            #0A192F05 65%, 
            #0A192F03 70%, 
            #0A192F01 75%, 
            transparent 80%
          )`
        }}
      ></div>
    </div>
  );
}