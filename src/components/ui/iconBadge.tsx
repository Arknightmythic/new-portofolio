interface IconBadgeProps {
  name: string;
  image: string; 
}

export default function IconBadge({name,image}: IconBadgeProps) {
    return (
        <div className="border-3 rounded-full flex justify-center items-center p-3"><img src={image}
            alt={name}
            className="w-[40px] h-[40px]" /></div>
    )
}
