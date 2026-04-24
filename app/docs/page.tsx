import type { Metadata } from "next";
import Link from "next/link";
import Callout from "@/components/Callout";
import InstallTabs from "@/components/docs/InstallTabs";
import { GITHUB_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Installation guides, configuration references, and usage docs for BatchGrade.",
};

const sidebarSections = [
  { id: "quick-start", label: "Quick Start" },
  { id: "installation", label: "Installation" },
  { id: "test-cases", label: "Defining Test Cases" },
  { id: "running", label: "Running the Grader" },
  { id: "exporting", label: "Exporting Results" },
  { id: "faq", label: "FAQ" },
];

function SectionDivider({ id, title }: { id: string; title: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-24 text-2xl font-extrabold text-zinc-900 mb-6 pb-3 border-b border-zinc-100"
    >
      {title}
    </h2>
  );
}

function InlineCode({ children }: { children: string }) {
  return (
    <code className="bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-800 font-mono text-xs">
      {children}
    </code>
  );
}

function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800 my-4">
      {lang && (
        <div className="bg-zinc-800 px-4 py-1.5 text-xs font-mono text-zinc-400">
          {lang}
        </div>
      )}
      <pre className="bg-zinc-900 text-zinc-100 p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const testCaseExample = `{
  "assignment": "Project 1 — Linked List",
  "language": "python",
  "entrypoint": "main.py",
  "tests": [
    {
      "name": "Insert single element",
      "input": "insert 5\\nprint",
      "expected_output": "5"
    },
    {
      "name": "Insert and delete",
      "input": "insert 1\\ninsert 2\\ndelete 1\\nprint",
      "expected_output": "2"
    }
  ],
  "rubric": {
    "points_per_test": 10,
    "partial_credit": true,
    "feedback_enabled": true
  }
}`;

const faqItems = [
  {
    q: "What programming languages does BatchGrade support?",
    a: "BatchGrade currently supports Python, Java, C, and C++. Additional language support is planned for future releases.",
  },
  {
    q: "Is any student data sent to a server or third party?",
    a: "No. BatchGrade runs entirely on your local machine. No submission files, grades, or student information ever leave your computer.",
  },
  {
    q: "Can I use a custom test runner or testing framework?",
    a: "Yes. BatchGrade supports custom test runner configurations via the test config file. You can specify a custom command that BatchGrade will execute for each submission.",
  },
  {
    q: "How do I export grades to Canvas, Blackboard, or Moodle?",
    a: "BatchGrade exports a CSV file formatted for common LMS platforms. From the results screen, click Export → CSV and select your LMS format from the dropdown.",
  },
  {
    q: "How do I update BatchGrade?",
    a: "BatchGrade checks for updates on launch. You can also download the latest release manually from the GitHub releases page at any time.",
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Introduces the documentation page. */}
      <div
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #3730a3 100%)",
        }}
        className="text-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Documentation
          </p>
          <h1 className="text-4xl font-extrabold mb-3">Getting Started</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Everything you need to install, configure, and run BatchGrade in
            your classroom.
          </p>
        </div>
      </div>

      {/* Holds the documentation navigation and content. */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex gap-14">
          {/* Keeps section links visible on large screens. */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                On this page
              </p>
              <nav className="space-y-0.5">
                {sidebarSections.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block py-1.5 px-3 rounded-lg text-sm text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-zinc-100">
                <p className="text-xs text-zinc-400 mb-2">Something missing?</p>
                <a
                  href={`${GITHUB_URL}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Open an issue &rarr;
                </a>
              </div>
            </div>
          </aside>

          {/* Contains the documentation sections. */}
          <main className="flex-1 min-w-0">
            {/* Helps new users run BatchGrade quickly. */}
            <section id="quick-start" className="mb-16 scroll-mt-24">
              <SectionDivider id="quick-start" title="Quick Start" />
              <p className="text-zinc-600 leading-relaxed mb-8">
                Get BatchGrade running in under five minutes.
              </p>
              <div className="space-y-5">
                {[
                  {
                    n: 1,
                    text: "Download the installer for your platform from the releases page.",
                  },
                  {
                    n: 2,
                    text: "Run the installer — no accounts, no cloud setup needed.",
                  },
                  {
                    n: 3,
                    text: "Point BatchGrade at your submissions folder, define your test cases, and click Run.",
                  },
                ].map(({ n, text }) => (
                  <div key={n} className="flex gap-4 items-start">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold flex items-center justify-center">
                      {n}
                    </span>
                    <p className="text-zinc-600 pt-0.5">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={`${GITHUB_URL}/releases`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Download Latest Release &rarr;
                </a>
              </div>
            </section>

            {/* Covers platform-specific installation. */}
            <section id="installation" className="mb-16 scroll-mt-24">
              <SectionDivider id="installation" title="Installation" />
              <p className="text-zinc-600 leading-relaxed mb-6">
                BatchGrade ships as a native desktop installer for all major
                platforms. Select your operating system below.
              </p>
              <InstallTabs />
              <Callout type="note">
                Installer filenames use semantic versioning. Replace{" "}
                <InlineCode>x.x.x</InlineCode> with the actual version number
                from the releases page.
              </Callout>
            </section>

            {/* Documents the test configuration format. */}
            <section id="test-cases" className="mb-16 scroll-mt-24">
              <SectionDivider id="test-cases" title="Defining Test Cases" />
              <p className="text-zinc-600 leading-relaxed mb-4">
                Test cases are defined in a JSON configuration file that you
                create once per assignment. BatchGrade applies the same test
                suite to every submission in the batch.
              </p>

              <h3 className="text-base font-bold text-zinc-900 mb-3 mt-6">
                Config file structure
              </h3>
              <CodeBlock code={testCaseExample} lang="batchgrade.config.json" />

              <h3 className="text-base font-bold text-zinc-900 mb-3 mt-8">
                Field reference
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="py-2.5 pr-6 font-semibold text-zinc-700 w-40">
                        Field
                      </th>
                      <th className="py-2.5 pr-6 font-semibold text-zinc-700 w-24">
                        Type
                      </th>
                      <th className="py-2.5 font-semibold text-zinc-700">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    {[
                      ["assignment", "string", "Display name for the assignment."],
                      ["language", "string", "Target language: python, java, c, cpp."],
                      ["entrypoint", "string", "Filename to execute within each submission folder."],
                      ["tests[].name", "string", "Human-readable label shown in the results view."],
                      ["tests[].input", "string", "Stdin passed to the student program. Use \\n for newlines."],
                      ["tests[].expected_output", "string", "Expected stdout. Trailing whitespace is ignored."],
                      ["rubric.points_per_test", "number", "Points awarded for each passing test case."],
                      ["rubric.partial_credit", "boolean", "Award fractional points for partially correct output."],
                      ["rubric.feedback_enabled", "boolean", "Generate per-student explanations alongside scores."],
                    ].map(([field, type, desc]) => (
                      <tr key={field}>
                        <td className="py-2.5 pr-6">
                          <InlineCode>{field}</InlineCode>
                        </td>
                        <td className="py-2.5 pr-6 text-zinc-400 font-mono text-xs">
                          {type}
                        </td>
                        <td className="py-2.5 text-zinc-600">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <Callout type="tip">
                Load an existing config file via{" "}
                <strong>File &rarr; Open Config</strong> to reuse it across
                multiple grading sessions.
              </Callout>
            </section>

            {/* Explains how to start a grading session. */}
            <section id="running" className="mb-16 scroll-mt-24">
              <SectionDivider id="running" title="Running the Grader" />
              <p className="text-zinc-600 leading-relaxed mb-6">
                Once your submissions folder and config file are set up, running
                a batch takes three clicks.
              </p>
              <ol className="list-decimal list-outside ml-4 space-y-4 text-zinc-600 text-sm">
                <li>
                  Open BatchGrade and click{" "}
                  <strong className="text-zinc-800">New Session</strong>.
                </li>
                <li>
                  Select the <strong className="text-zinc-800">submissions folder</strong> —
                  each sub-folder is treated as one student submission.
                </li>
                <li>
                  Click <strong className="text-zinc-800">Load Config</strong> and
                  choose your <InlineCode>batchgrade.config.json</InlineCode> file.
                </li>
                <li>
                  Click <strong className="text-zinc-800">Run</strong>. A
                  progress bar shows per-submission status in real time.
                </li>
                <li>
                  When complete, the results panel shows each student&rsquo;s
                  score, test breakdown, and generated feedback.
                </li>
              </ol>
              <Callout type="warning">
                Ensure each student submission is in its own sub-folder named
                after the student (e.g. <InlineCode>john_doe/</InlineCode>).
                BatchGrade uses folder names as student identifiers in the
                results export.
              </Callout>
            </section>

            {/* Describes available export formats. */}
            <section id="exporting" className="mb-16 scroll-mt-24">
              <SectionDivider id="exporting" title="Exporting Results" />
              <p className="text-zinc-600 leading-relaxed mb-6">
                Grades are stored locally in a SQLite database and can be
                exported at any time.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: "📄",
                    title: "CSV / Spreadsheet",
                    desc: "Export a flat CSV compatible with Excel, Google Sheets, and most LMS grade import tools.",
                    action: "Results → Export → CSV",
                  },
                  {
                    icon: "🎓",
                    title: "Canvas LMS",
                    desc: "Export in Canvas gradebook format for direct upload via the LMS grade import workflow.",
                    action: "Results → Export → Canvas",
                  },
                  {
                    icon: "📋",
                    title: "Feedback Report",
                    desc: "Generate a per-student PDF report containing their score, test results, and AI-generated feedback.",
                    action: "Results → Export → PDF Reports",
                  },
                  {
                    icon: "🗄️",
                    title: "Raw SQLite",
                    desc: "Access the underlying database directly for custom queries or integration with other tools.",
                    action: "File → Show Database Location",
                  },
                ].map(({ icon, title, desc, action }) => (
                  <div
                    key={title}
                    className="p-5 rounded-xl border border-zinc-100 bg-zinc-50"
                  >
                    <div className="text-2xl mb-2">{icon}</div>
                    <h4 className="font-bold text-zinc-900 text-sm mb-1">{title}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed mb-3">{desc}</p>
                    <InlineCode>{action}</InlineCode>
                  </div>
                ))}
              </div>
            </section>

            {/* Answers common setup questions. */}
            <section id="faq" className="mb-8 scroll-mt-24">
              <SectionDivider id="faq" title="FAQ" />
              <div className="space-y-0 divide-y divide-zinc-100">
                {faqItems.map(({ q, a }) => (
                  <div key={q} className="py-5">
                    <p className="font-semibold text-zinc-900 mb-2">{q}</p>
                    <p className="text-zinc-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-zinc-900 mb-1">
                    Still have questions?
                  </p>
                  <p className="text-zinc-500 text-sm">
                    Open an issue on GitHub and the team will get back to you.
                  </p>
                </div>
                <a
                  href={`${GITHUB_URL}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  Open an Issue &rarr;
                </a>
              </div>
            </section>

            {/* Links to nearby pages. */}
            <div className="border-t border-zinc-100 pt-8 flex justify-between items-center text-sm">
              <Link href="/" className="text-zinc-500 hover:text-zinc-900 transition-colors">
                &larr; Home
              </Link>
              <Link
                href="/about"
                className="text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                About the Project &rarr;
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
