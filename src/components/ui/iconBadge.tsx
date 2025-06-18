interface IconBadgeProps {
  name: string;
  image: string; 
}

export default function IconBadge({name,image}: IconBadgeProps) {
    return (
        <div className="border-3 rounded-full flex justify-center items-center lg:p-3 p-2"><img src={image}
            alt={name}
            className="lg:w-[40px] lg:h-[40px] w-[30px] h-[30px]" /></div>
    )
}
