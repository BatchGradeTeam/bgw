"use client";

import { useState } from "react";

type Platform = "windows" | "macos" | "linux";

const platforms: { id: Platform; label: string; icon: string }[] = [
  { id: "windows", label: "Windows", icon: "🪟" },
  { id: "macos", label: "macOS", icon: "🍎" },
  { id: "linux", label: "Linux", icon: "🐧" },
];

function InlineCode({ children }: { children: string }) {
  return (
    <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-800 font-mono text-xs">
      {children}
    </code>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-zinc-900 text-zinc-100 rounded-xl p-4 overflow-x-auto text-sm font-mono leading-relaxed">
      <code>{code}</code>
    </pre>
  );
}

export default function InstallTabs() {
  const [active, setActive] = useState<Platform>("windows");

  return (
    <div>
      {/* Platform selector. */}
      <div className="flex gap-1 p-1 bg-zinc-100 rounded-xl w-fit mb-6">
        {platforms.map(({ id, label, icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              active === id
                ? "bg-white text-zinc-900 shadow-sm"
                : "text-zinc-500 hover:text-zinc-900"
            }`}
          >
            <span>{icon}</span>
            {label}
          </button>
        ))}
      </div>

      {active === "windows" && (
        <ol className="list-decimal list-outside ml-4 space-y-3 text-zinc-600 text-sm">
          <li>
            Download{" "}
            <InlineCode>BatchGrade-Setup-x.x.x.exe</InlineCode> from the{" "}
            <a
              href="https://github.com/UNLV-CS472-672/2026-S-GROUP3-BatchGrade/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              releases page
            </a>
            .
          </li>
          <li>Run the installer and follow the installation wizard.</li>
          <li>Launch BatchGrade from the Start Menu or the desktop shortcut.</li>
          <li>
            If Windows SmartScreen appears, click{" "}
            <strong className="text-zinc-800">More info &rarr; Run anyway</strong>.
          </li>
        </ol>
      )}

      {active === "macos" && (
        <ol className="list-decimal list-outside ml-4 space-y-3 text-zinc-600 text-sm">
          <li>
            Download <InlineCode>BatchGrade-x.x.x.dmg</InlineCode> from the{" "}
            <a
              href="https://github.com/UNLV-CS472-672/2026-S-GROUP3-BatchGrade/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              releases page
            </a>
            .
          </li>
          <li>
            Open the <InlineCode>.dmg</InlineCode> and drag BatchGrade into{" "}
            <strong className="text-zinc-800">Applications</strong>.
          </li>
          <li>
            On first launch, right-click &rarr;{" "}
            <strong className="text-zinc-800">Open</strong> to bypass macOS
            Gatekeeper if a security warning appears.
          </li>
        </ol>
      )}

      {active === "linux" && (
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold text-zinc-700 mb-2">
              AppImage (any distro)
            </p>
            <CodeBlock
              code={`chmod +x BatchGrade-x.x.x.AppImage\n./BatchGrade-x.x.x.AppImage`}
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-700 mb-2">
              Debian / Ubuntu (.deb)
            </p>
            <CodeBlock code={`sudo dpkg -i BatchGrade-x.x.x.deb`} />
          </div>
        </div>
      )}
    </div>
  );
}
