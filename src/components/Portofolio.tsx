import { ArrowRightSquareIcon } from "lucide-react";
import BadgeSection from "./custom-ui/BadgeSection";


export default function Portofolio() {
  return (
    <div className='bg-[#F5F7FA] w-full py-10' id='portofolio'>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-5">
        <div className="px-4 md:flex-none flex flex-col items-center md:items-start md:justify-normal justify-center text-center">
          <div className="flex mb-6">
            <BadgeSection name={'Portofolio'} borderColor={'#0A192F'} />
          </div>
          <div className="max-w-4xl mx-auto text-left">
            <h4 className="text-[#0A192F] md:text-[40px] text-xl font-bold leading-relaxed my-4">
              Portofolio yang dimiliki
            </h4>
            <p className="text-[#0A192F] text-lg leading-relaxed">
              Selama perjalanan saya sebagai pengembang web, saya telah mengerjakan berbagai proyek — baik secara individu, dalam tim, maupun melalui pekerjaan freelance. Setiap proyek ini mencerminkan kemampuan teknis, kreativitas, serta komitmen saya dalam menyelesaikan solusi digital yang fungsional dan berdampak.
            </p>
          </div>
          <div className="flex flex-col my-4 w-full">
            <div className="max-w-4xl text-left grid col-span-1 gap-2">
              <div className="bg-[#F5F7FA] py-1 mr-3">
                <div className="flex justify-between px-2 border-b-2 border-[#0A192F]">
                  <h3 className="text-[#0A192F] leading-relaxed"> Lorem</h3>
                  <p className="text-[#0A192F] leading-relaxed"> Lorem</p>
                  <ArrowRightSquareIcon className="text-[#0A192F]" />
                </div>
              </div>
              <div className="bg-[#0A192F] py-1 ml-3">
                <div className="flex justify-between px-2 border-b-2 border-[#F5F7FA]">
                  <h3 className="text-[#F5F7FA] leading-relaxed"> Lorem</h3>
                  <p className="text-[#F5F7FA] leading-relaxed"> Lorem</p>
                  <ArrowRightSquareIcon className="text-[#F5F7FA]" />
                </div>
              </div>
              

            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="flex flex-col">
            <div className="max-w-4xl mx-auto w-full text-left">
              <iframe
                className="w-full aspect-video my-4"
                src={`https://www.youtube.com/embed/7ynHVGCehoM?si=heerM3KnIDqdfrZJ`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              <p className="text-[#0A192F] text-lg leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}