interface BadgeSectionProps {
  name: string;
  borderColor: string
}

export default function BadgeSection({ name, borderColor }: BadgeSectionProps) {
  return (
    <p className={`text-[${borderColor}] border-2 border-[${borderColor}] px-3 py-1 rounded-full`}>
      {name}
    </p>
  );
}