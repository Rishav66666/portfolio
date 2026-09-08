import SectionHeading from "./SectionHeading";
import { education } from "@/data/profile";

export default function EducationTimeline() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="06" title="Education" />

      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-border" />
        <ol className="space-y-8">
          {education.map((item) => (
            <li key={item.id} className="relative">
              <span className="absolute -left-6 sm:-left-10 top-1 h-3.5 w-3.5 rounded-full bg-bg border-2 border-accent" />
              <div className="panel rounded-xl p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-text-primary font-medium">
                    {item.degree} — {item.field}
                  </h3>
                  <span className="text-numeric text-xs text-accent">{item.duration}</span>
                </div>
                <p className="text-sm text-text-secondary">{item.institution}</p>
                <span className="inline-block mt-2 text-xs text-data-positive">{item.status}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
