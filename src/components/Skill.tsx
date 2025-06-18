import ReactSVG from '../assets/react.svg'
import LaravelSVG from '../assets/laravel.svg'
import bootstrapSVg from '../assets/bootstrap.svg'
import codeIgnitierSVG from '../assets/codeigniter.svg'
import cssSVg from '../assets/css.svg'
import djangoVg from '../assets/django.svg'
import pythonSVg from '../assets/python.svg'
import DockerSVg from '../assets/docker.svg'
import ExpressSVg from '../assets/express.svg'
import FirebaseSVg from '../assets/firebase.svg'
import GoSVg from '../assets/go.svg'
import GCSVg from '../assets/googlecloud.svg'
import HtmlSVg from '../assets/html5.svg'
import LaragonSVg from '../assets/laragon.svg'
import MysqlSVg from '../assets/mysql.svg'
import NextSVg from '../assets/nextdotjs.svg'
import PHPSVg from '../assets/php.svg'
import TailwindsSVg from '../assets/tailwindcss.svg'
import TsSVg from '../assets/typescript.svg'
import xamppSVg from '../assets/xampp.svg'
import NodeSVg from '../assets/nodedotjs.svg'
import JsSVg from '../assets/javascript.svg'
import MongoSVg from '../assets/mongodb.svg'
import BadgeSection from './custom-ui/BadgeSection'
import IconBadge from './custom-ui/iconBadge'





export default function Skill() {
  const skills = [
    { name: 'React', icon: ReactSVG },
    { name: 'Laravel', icon: LaravelSVG },
    { name: 'Node.js', icon: NodeSVg },
    { name: 'Next.js', icon: NextSVg },
    { name: 'Tailwind CSS', icon: TailwindsSVg },
    { name: 'Bootstrap', icon: bootstrapSVg },
    { name: 'JavaScript', icon: JsSVg },
    { name: 'HTML5', icon: HtmlSVg },
    { name: 'CSS3', icon: cssSVg },
    { name: 'PHP', icon: PHPSVg },
    { name: 'Laragon', icon: LaragonSVg },
    { name: 'MongoDB', icon: MongoSVg },
    { name: 'MySQL', icon: MysqlSVg },
    { name: 'Express', icon: ExpressSVg },
    { name: 'XAMPP', icon: xamppSVg },
    { name: 'TypeScript', icon: TsSVg },
    { name: 'Google Cloud', icon: GCSVg },
    { name: 'Firebase', icon: FirebaseSVg },
    { name: 'CodeIgniter', icon: codeIgnitierSVG },
    { name: 'Python', icon: pythonSVg },
    { name: 'Django', icon: djangoVg },
    { name: 'Go', icon: GoSVg },
    { name: 'Docker', icon: DockerSVg },
  ];
  return (
    <div className='bg-[#0A192F] w-full py-10' id='skills'>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-5">
        <div className="px-4 md:flex-none flex flex-col items-center md:items-start md:justify-normal justify-center text-center">
          <div className="flex mb-6">
            <BadgeSection name={'skill'} borderColor={'#F5F7FA'}/>
          </div>
          <div className="max-w-4xl mx-auto text-left">
            <h4 className="text-[#F5F7FA] md:text-[50px] text-xl font-bold leading-relaxed my-4">
              Hanya bisa React, Node Js, Laravel saja?
            </h4>

          </div>

        </div>
        <div className="px-4">
          <div className="flex flex-col">
            <div className="max-w-4xl mx-auto text-left">
              <p id="about" className="text-[#F5F7FA] text-lg leading-relaxed">
                Memang fokus utama saya ada di <span className="underline underline-offset-2 ">3 teknologi</span> tersebut , namun pengalaman belajar selama +-1 tahun telah membawa saya mengeksplorasi lebih banyak tools dan teknologi. Berikut adalah beberapa stack yang pernah saya gunakan dalam berbagai kesempatan — mulai dari proyek akademik, magang, hingga pekerjaan freelance.
              </p>

            </div>
            <div className="max-w-4xl md:mr-auto md:mx-0 mx-auto mt-5 grid grid-cols-5 gap-5">
              {
                skills.map((tech, index) => (
                  <IconBadge key={index} name={tech.name} image={tech.icon} />
                ))
              }


            </div>
          </div>

        </div>
      </div>

    </div>
  )
}