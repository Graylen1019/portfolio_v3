export type Metric = {
  value: string;
  label: string;
};

export type WorkEntry = {
  slug: string;
  index: string;
  current: boolean;
  period: string;
  company: string;
  role: string;
  desc: string;
  metrics: Metric[];
  stack: { name: string; reason: string }[];
  responsibilities: string[];
};

export const experience: WorkEntry[] = [
  {
    slug: "frontend-simplified",
    index: "01",
    current: true,
    period: "March 2025 — Present",
    company: "Frontend Simplified",
    role: "Peer Mentor — Frontend Development (React & Next.js)",
    desc: "Recognized in the top 5% of my cohort for technical excellence and mentorship. Guided 20+ students through code reviews, debugging sessions, and architecture decisions. Led workshops on frontend performance, then built reusable component libraries the cohort still ships against.",
    metrics: [
      { value: "~50%", label: "faster portfolio load times" },
      { value: "40%", label: "less build time via reusable UI" },
      { value: "90%", label: "students hit WCAG compliance" },
      { value: "85%", label: "adopted CI/CD pipelines" },
    ],
    stack: [
      { name: "React", reason: "Core framework taught and mentored across all student projects." },
      { name: "Next.js", reason: "App Router patterns, SSR, and deployment workflows." },
      { name: "Tailwind CSS", reason: "Utility-first styling used to build shared component libraries." },
      { name: "CI/CD", reason: "GitHub Actions pipelines introduced to 85% of student cohorts." },
    ],
    responsibilities: [
      "Conducted weekly 1:1 code reviews with 20+ students, identifying architectural issues before they became blockers.",
      "Led workshops on Core Web Vitals and performance optimization, resulting in ~50% faster portfolio load times across the cohort.",
      "Built and maintained a reusable component library that reduced redundant build work by 40%.",
      "Guided students through WCAG accessibility standards — 90% of projects achieved compliance before submission.",
      "Introduced CI/CD pipelines via GitHub Actions, with 85% of students adopting them before graduation.",
    ],
  },
  {
    slug: "skinstric-ai",
    index: "02",
    current: false,
    period: "June 2025 — July 2025",
    company: "Skinstric AI",
    role: "Frontend Engineer",
    desc: "Architected a real-time skin-analysis platform on Next.js using OpenAI's Vision API, achieving ~98% detection accuracy across diverse skin conditions. Built a responsive UI with TailwindCSS, GSAP and bespoke animations; leveraged Next.js Server Components and Lottie to keep analysis under two seconds. Designed a modular component library to enable rapid A/B testing and integrated a 4D Mini model for sharper texture and tone accuracy.",
    metrics: [
      { value: "~98%", label: "detection accuracy" },
      { value: "~60%", label: "engagement lift" },
      { value: "~40%", label: "retention boost" },
      { value: "<2s", label: "time-to-analysis" },
    ],
    stack: [
      { name: "Next.js", reason: "Server Components kept analysis payloads lean and initial load fast." },
      { name: "OpenAI Vision API", reason: "Core AI engine powering real-time skin condition detection." },
      { name: "GSAP", reason: "Bespoke animations for the analysis flow and results reveal." },
      { name: "Lottie", reason: "Lightweight animation format used to keep time-to-analysis under 2 seconds." },
      { name: "Tailwind CSS", reason: "Responsive UI built rapidly across breakpoints." },
    ],
    responsibilities: [
      "Architected the full frontend of a real-time skin analysis platform from the ground up.",
      "Integrated OpenAI Vision API achieving ~98% detection accuracy across diverse skin conditions.",
      "Built bespoke animations with GSAP and Lottie, keeping time-to-analysis under 2 seconds.",
      "Designed a modular component library enabling rapid A/B testing without design regression.",
      "Integrated a 4D Mini model for improved texture and tone accuracy beyond the base Vision API.",
    ],
  },
];