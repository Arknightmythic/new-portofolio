import { Download, Linkedin, Github} from "lucide-react";
import { Button } from "./ui/button";
import BadgeSection from "./ui/badgeSection";


export default function About() {
  return (
    <div id="about" className='bg-[#0A192F] w-full py-10'>
      <div className="flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto">
        <div className="mb-6">
         <BadgeSection name={"about"}/>
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <p id="abouttext" className="text-[#F5F7FA] text-lg leading-relaxed my-4">
            Saya <span className="underline underline-offset-2 ">Albertus Reno Kristiardy</span>, lulusan S1 Informatika 2024 Universitas Gunadarma. Spesialisasi saya terletak pada pengembangan aplikasi web modern dan terbiasa
            menggunakan teknologi seperti React.js, Laravel, Node.js.
          </p>
          <p id="abouttext" className="text-[#F5F7FA] text-lg leading-relaxed my-4">
            saya telah menyelesaikan berbagai proyek freelance seperti website company profile, sistem database anggota, hingga aplikasi virtual tour.
            Selain teknikal, saya pernah aktif sebagai asisten lab dan instruktur workshop HTML & JavaScript. Saya senang belajar hal baru, terbiasa bekerja dalam tim, dan saat ini sedang mencari peluang kerja full-time atau proyek freelance baru.
          </p>
        </div>
        <div className="flex justify-center gap-3 my-4">
          <Button variant="outline" size="sm">
            <p>Download Resume</p> <Download />
          </Button>
          <Button variant="outline" size="sm"><Linkedin/> </Button>
          <Button variant="outline" size="sm"><Github/> </Button>
        </div>
      </div>
    </div>
  )
}