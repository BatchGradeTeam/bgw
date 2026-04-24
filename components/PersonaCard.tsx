type Props = {
  icon: string;
  role: string;
  description: string;
  benefits: string[];
  highlight?: boolean;
};

export default function PersonaCard({
  icon,
  role,
  description,
  benefits,
  highlight = false,
}: Props) {
  return (
    <div
      className={`p-8 rounded-2xl ${
        highlight ? "bg-blue-600 text-white" : "bg-white border border-zinc-100"
      }`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3
        className={`font-bold text-xl mb-3 ${
          highlight ? "text-white" : "text-zinc-900"
        }`}
      >
        {role}
      </h3>
      <p
        className={`text-sm leading-relaxed mb-6 ${
          highlight ? "text-blue-100" : "text-zinc-500"
        }`}
      >
        {description}
      </p>
      <ul className="space-y-2">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className={`flex items-start gap-2 text-sm ${
              highlight ? "text-blue-100" : "text-zinc-600"
            }`}
          >
            <span
              className={`mt-0.5 font-bold shrink-0 ${
                highlight ? "text-blue-200" : "text-blue-500"
              }`}
            >
              ✓
            </span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}
