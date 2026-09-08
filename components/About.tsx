import SectionHeading from "./SectionHeading";
import { personal, careerJourney } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="About" description={personal.summary} />

      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-[7px] sm:left-[11px] top-2 bottom-2 w-px bg-border" />
        <ol className="space-y-9">
          {careerJourney.map((item) => (
            <li key={item.year} className="relative">
              <span className="absolute -left-6 sm:-left-10 top-1 h-3.5 w-3.5 rounded-full bg-bg border-2 border-accent" />
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="text-numeric text-accent text-sm w-16 shrink-0">{item.year}</span>
                <div>
                  <p className="text-text-primary font-medium">{item.label}</p>
                  <p className="text-text-secondary text-sm mt-0.5 max-w-lg">{item.detail}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
