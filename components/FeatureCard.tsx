type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: Props) {
  return (
    <div className="group p-6 rounded-2xl border border-zinc-100 bg-zinc-50 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-sm transition-all duration-200">
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-200 transition-colors duration-200">
        {icon}
      </div>
      <h3 className="font-bold text-zinc-900 text-lg mb-2">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
