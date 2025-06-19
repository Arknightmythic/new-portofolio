import { ArrowRightSquare } from "lucide-react";
import { useEffect, useRef, useState, useMemo } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { gsap } from 'gsap';
import { Skeleton } from "@/components/ui/skeleton"


// Mock BadgeSection component for demo
const BadgeSection = ({ name, borderColor }: { name: string; borderColor: string }) => (
  <div className={`px-3 py-1 border-2 rounded-full`} style={{ borderColor }}>
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<string>('');
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [loading, setLoading] = useState(true);
  
  // Sample data - wrapped in useMemo to fix exhaustive-deps warning
  const listItems = useMemo(() => [
    { id: 'item1', title: 'Web Application', subtitle: 'React & Node.js' },
    { id: 'item2', title: 'Mobile App', subtitle: 'Flutter' },
    { id: 'item3', title: 'E-commerce Platform', subtitle: 'Full Stack Development' },
  ], []);

  useEffect(() => {
    // Initialize refs array
    itemRefs.current = itemRefs.current.slice(0, listItems.length);

    // Set initial state for all items
    itemRefs.current.forEach((element) => {
      if (element) {
        gsap.set(element, {
          backgroundColor: '#F5F7FA',
          marginLeft: '0',
          marginRight: '0.75rem',
        });
      }
    });
  }, [listItems]);

  const handleValueChange = (value: string) => {
    const previousSelected = selectedItem;
    setSelectedItem(value);

    // If clicking the same item (deactivate)
    if (value === previousSelected) {
      setSelectedItem('');
      const index = listItems.findIndex(item => item.id === value);
      const element = itemRefs.current[index];
      if (element) {
        gsap.to(element, {
          backgroundColor: '#F5F7FA',
          marginLeft: '0',
          marginRight: '0.75rem',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
      return;
    }

    // Animate the newly selected item
    if (value) {
      const index = listItems.findIndex(item => item.id === value);
      const element = itemRefs.current[index];
      if (element) {
        gsap.to(element, {
          backgroundColor: '#0A192F',
          marginLeft: '0.75rem',
          marginRight: '0',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }

    // Animate the previously selected item back
    if (previousSelected) {
      const prevIndex = listItems.findIndex(item => item.id === previousSelected);
      const prevElement = itemRefs.current[prevIndex];
      if (prevElement) {
        gsap.to(prevElement, {
          backgroundColor: '#F5F7FA',
          marginLeft: '0',
          marginRight: '0.75rem',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }
  };

  return (
    <div className='bg-[#F5F7FA] w-full py-10' id='portfolio'>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-6xl mx-auto gap-5">
        <div className="px-4 md:flex-none flex flex-col items-center md:items-start md:justify-normal justify-center text-center">
          <div className="flex mb-6">
            <BadgeSection name={'Portfolio'} borderColor={'#0A192F'} />
          </div>
          <div className="max-w-4xl mx-auto text-left">
            <h4 className="text-[#0A192F] md:text-[40px] text-xl font-bold leading-relaxed my-4">
              Portfolio yang dimiliki
            </h4>
            <p className="text-[#0A192F] text-lg leading-relaxed">
              Selama perjalanan saya sebagai pengembang web, saya telah mengerjakan berbagai proyek — baik secara individu, dalam tim, maupun melalui pekerjaan freelance. Setiap proyek ini mencerminkan kemampuan teknis, kreativitas, serta komitmen saya dalam menyelesaikan solusi digital yang fungsional dan berdampak.
            </p>
          </div>
          <div className="sm:flex flex-col my-4 w-full hidden">
            <div className="max-w-4xl text-left grid col-span-1 gap-2">
              <ToggleGroup
                type="single"
                value={selectedItem}
                onValueChange={handleValueChange}
                className="flex flex-col gap-2 w-full rounded-none shadow-none"
              >
                {listItems.map((item, index) => (
                  <ToggleGroupItem
                    key={item.id}
                    value={item.id}
                    className="
                      w-full h-auto p-0 rounded-none shadow-none border-0 
                      hover:bg-current hover:text-current
                      focus-visible:ring-0 focus-visible:ring-offset-0 px-2
                    "
                    ref={el => { itemRefs.current[index] = el; }}
                  >

                    <div className="w-full py-1">
                      <div className={`
                        flex items-center px-2 border-b-2 gap-4
                        ${selectedItem === item.id ? 'border-[#F5F7FA]' : 'border-[#0A192F]'}
                      `}>
                        <h3 className={`
                          leading-relaxed font-medium flex-shrink-0
                          ${selectedItem === item.id ? 'text-[#F5F7FA]' : 'text-[#0A192F]'}
                        `}>
                          {item.title}
                        </h3>
                        <div className="flex-1"></div>
                        <p className={`
                          leading-relaxed text-sm flex-shrink-0
                          ${selectedItem === item.id ? 'text-[#F5F7FA]' : 'text-[#0A192F]'}
                        `}>
                          {item.subtitle}
                        </p>
                        <ArrowRightSquare className={`
                          w-5 h-5 flex-shrink-0 ml-2
                          ${selectedItem === item.id ? 'text-[#F5F7FA]' : 'text-[#0A192F]'}
                        `} />
                      </div>
                    </div>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="flex flex-col">
            <div className="max-w-4xl mx-auto w-full text-left">
              <div className="w-full">
                {loading && <Skeleton className="w-full h-full" />}
                <iframe
                className="w-full aspect-video my-4"
                src={`https://www.youtube.com/embed/7ynHVGCehoM?si=heerM3KnIDqdfrZJ`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
                onLoad={() => setLoading(false)}
              /></div>

              <p className="text-[#0A192F] text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}