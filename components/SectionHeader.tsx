type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-extrabold text-zinc-900">{title}</h2>
      {subtitle && (
        <p className="text-zinc-500 mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
