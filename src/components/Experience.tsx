import BadgeSection from "./custom-ui/BadgeSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ExperienceItem {
  id: string;
  year: string;
  experiences: {
    period: string;
    title: string;
    company: string;
    responsibilities: string[];
  }[];
}

const experienceData: ExperienceItem[] = [
  {
    id: "item-1",
    year: "2025",
    experiences: [
      {
        period: "Januari 2025",
        title: "Freelance Web Developer",
        company: "Safa Translation Services",
        responsibilities: [
          "Membangun landing page statis menggunakan React.js & Framer Motion.",
          "Slicing desain UI/UX ke program."
        ]
      }
    ]
  },
  {
    id: "item-2",
    year: "2024",
    experiences: [
      {
        period: "Desember 2024 – Januari 2025",
        title: "Freelance Full-Stack Developer",
        company: "PT Mutiara Inti Bahari",
        responsibilities: [
          "Membangun website company profile dengan Laravel 11 dan CMS dashboard.",
          "Mendesain ERD, UI menangani hosting."
        ]
      },
      {
        period: "November 2024 – Januari 2025",
        title: "Freelance Frontend Developer",
        company: "Kongregasi Suster SFD",
        responsibilities: [
          "Membangun halaman profil & dashboard dengan React.js dan Tailwind.",
          "Integrasi dengan backend API dan implementasi sistem autentikasi JWT access & refresh token."
        ]
      },
      {
        period: "Agustus 2024",
        title: "Freelance Full-Stack Developer",
        company: "Jesuit Indonesia",
        responsibilities: [
          "Mengembangkan backend (CodeIgniter 3), perbaiki fitur autentikasi, dashboard, role management serta pengiriman email",
          "Menambahkan visualisasi data & responsif untuk perangkat mobile."
        ]
      }
    ]
  },
  {
    id: "item-3",
    year: "2023",
    experiences: [
      {
        period: "Agustus 2023 – Februari 2024",
        title: "Cloud Computing Cohort",
        company: "Bangkit Academy",
        responsibilities: [
          "Mengembangkan backend API untuk aplikasi penerjemah bahasa isyarat.",
          "menggunakan Stack: Node.js, Firebase, Cloud Run (GCP), Postman."
        ]
      }
    ]
  },
  {
    id: "item-4",
    year: "2022",
    experiences: [
      {
        period: "Agustus – Desember 2022",
        title: "Web Developer Magang",
        company: "Kedaireka.id, Penajam Paser Utara Sumatera",
        responsibilities: [
          "Membuat website virtual tour pengrajin batik Sekar Buen.",
          "Mengambil konten dengan kamera 360° dan merender ke HTML, CSS, JS."
        ]
      },
      {
        period: "Agustus 2022 – Oktober 2024",
        title: "Asisten Lab",
        company: "Universitas Gunadarma",
        responsibilities: [
          "Mengajar workshop HTML & JavaScript.",
          "Memelihara komputer dan revisi modul pembelajaran."
        ]
      }
    ]
  }
];

export default function Experience() {
  return (
    <div className='bg-[#F5F7FA] w-full py-10' id='experience'>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-5">
        <div className="px-4 md:flex-none flex flex-col items-center md:items-start md:justify-normal justify-center text-center">
          <div className="flex mb-6">
            <BadgeSection name={'Experience'} borderColor={'#0A192F'} />
          </div>
          <div className="max-w-4xl mx-auto text-left">
            <h4 className="text-[#0A192F] md:text-[40px] text-xl font-bold leading-relaxed my-4">
              Apa saja pengalamannya sebagai full-stack Developer?
            </h4>
            <p className="text-[#0A192F] text-lg leading-relaxed">
              Selama perjalanan saya sebagai Full-Stack Developer , saya telah menangani berbagai proyek — mulai dari website company profile, sistem manajemen data, hingga aplikasi interaktif. Setiap pengalaman ini memperkuat pemahaman saya akan pengembangan frontend dan backend, sekaligus membentuk cara mengajarkan saya cara untuk bekerja secara kolaboratif dan efisien.
            </p>
          </div>
        </div>
        
        <div className="px-4">
          <div className="flex flex-col">
            <div className="max-w-4xl mx-auto w-full text-left">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                {experienceData.map((yearData) => (
                  <AccordionItem key={yearData.id} value={yearData.id}>
                    <AccordionTrigger>
                      <div className="w-full">
                        <h2 className="text-[#0A192F] md:text-[30px] text-lg">
                          {yearData.year}
                        </h2>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      {yearData.experiences.map((experience, index) => (
                        <div key={index} className="space-y-2">
                          <h2>{experience.period}</h2>
                          <h3>{experience.title} – {experience.company}</h3>
                          <ul className="list-disc list-outside ps-4 space-y-2 text-muted-foreground">
                            {experience.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex}>
                                <p>{responsibility}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="max-w-4xl md:mr-auto md:mx-0 mx-auto mt-5 grid grid-cols-5 gap-5">
              {/* Additional content can go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}