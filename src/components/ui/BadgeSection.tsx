interface BadgeSectionProps {
  name: string;
}

export default function BadgeSection({ name }: BadgeSectionProps) {
  return (
    <p className="text-[#F5F7FA] border-2 border-[#F5F7FA] px-3 py-1 rounded-full">
      {name}
    </p>
  );
}