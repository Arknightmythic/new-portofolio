// import ReactSVG from '../assets/react.svg'
// import LaravelSVG from '../assets/laravel.svg'
// import bootstrapSVg from '../assets/bootstrap.svg'
// import codeIgnitierSVG from '../assets/codeigniter.svg'
// import cssSVg from '../assets/css.svg'
// import djangoVg from '../assets/django.svg'
// import pythonSVg from '../assets/python.svg'
// import DockerSVg from '../assets/docker.svg'
// import ExpressSVg from '../assets/express.svg'
// import FirebaseSVg from '../assets/firebase.svg'
// import GoSVg from '../assets/go.svg'
// import GCSVg from '../assets/googlecloud.svg'
// import HtmlSVg from '../assets/html5.svg'
// import LaragonSVg from '../assets/laragon.svg'
// import MysqlSVg from '../assets/mysql.svg'
// import NextSVg from '../assets/nextdotjs.svg'
// import PHPSVg from '../assets/php.svg'
// import TailwindsSVg from '../assets/tailwindcss.svg'
// import TsSVg from '../assets/typescript.svg'
// import xamppSVg from '../assets/xampp.svg'
// import NodeSVg from '../assets/nodedotjs.svg'
// import JsSVg from '../assets/javascript.svg'
// import MongoSVg from '../assets/mongodb.svg'
// import BadgeSection from './custom-ui/BadgeSection'
// import IconBadge from './custom-ui/iconBadge'

import BadgeSection from "./custom-ui/BadgeSection";





export default function Experience() {
 
  return (
   
    <div className='bg-[#F5F7FA] w-full py-10' id='skills'>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-5">
        <div className="px-4 md:flex-none flex flex-col items-center md:items-start md:justify-normal justify-center text-center">
          <div className="flex mb-6">
            <BadgeSection name={'Experience'} borderColor={'#0A192F'}/>
          </div>
          <div className="max-w-4xl mx-auto text-left">
            <h4 className="text-[#0A192F] md:text-[50px] text-xl font-bold leading-relaxed my-4">
              Apa saja Pengalaman kamu sebagai full-stack Developer?
            </h4>

          </div>

        </div>
        <div className="px-4">
          <div className="flex flex-col">
            <div className="max-w-4xl mx-auto text-left">
              <p id="about" className="text-[#0A192F] text-lg leading-relaxed">
                Memang fokus utama saya ada di <span className="underline underline-offset-2 ">3 teknologi</span> tersebut , namun pengalaman belajar selama +-1 tahun telah membawa saya mengeksplorasi lebih banyak tools dan teknologi. Berikut adalah beberapa stack yang pernah saya gunakan dalam berbagai kesempatan — mulai dari proyek akademik, magang, hingga pekerjaan freelance.
              </p>

            </div>
            <div className="max-w-4xl md:mr-auto md:mx-0 mx-auto mt-5 grid grid-cols-5 gap-5">
              


            </div>
          </div>

        </div>
      </div>

    </div>
  )
}