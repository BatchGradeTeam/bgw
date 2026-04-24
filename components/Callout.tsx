import { ReactNode } from "react";

type CalloutType = "tip" | "note" | "warning";

type Props = {
  type: CalloutType;
  children: ReactNode;
};

const variants: Record<
  CalloutType,
  {
    bg: string;
    border: string;
    icon: string;
    label: string;
    labelColor: string;
    textColor: string;
  }
> = {
  tip: {
    bg: "bg-green-50",
    border: "border-green-200",
    icon: "💡",
    label: "Tip",
    labelColor: "text-green-700",
    textColor: "text-green-800",
  },
  note: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    icon: "ℹ️",
    label: "Note",
    labelColor: "text-blue-700",
    textColor: "text-blue-800",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    icon: "⚠️",
    label: "Warning",
    labelColor: "text-yellow-700",
    textColor: "text-yellow-800",
  },
};

export default function Callout({ type, children }: Props) {
  const v = variants[type];
  return (
    <div className={`${v.bg} ${v.border} border rounded-xl p-4 flex gap-3 my-6`}>
      <span className="text-lg shrink-0 mt-0.5">{v.icon}</span>
      <div>
        <p className={`font-semibold text-sm ${v.labelColor} mb-1`}>{v.label}</p>
        <div className={`text-sm ${v.textColor} leading-relaxed`}>{children}</div>
      </div>
    </div>
  );
}
