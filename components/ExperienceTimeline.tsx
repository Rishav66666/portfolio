import SectionHeading from "./SectionHeading";
import { experience } from "@/data/profile";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        index="02"
        title="Experience"
        description="Where the skills get tested against real data and real deadlines."
      />

      <div className="grid gap-5">
        {experience.map((job) => (
          <div key={job.id} className="panel rounded-2xl p-6 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-text-primary font-medium text-lg">{job.role}</h3>
                <p className="text-text-secondary text-sm mt-0.5">
                  {job.org} · {job.location}
                </p>
              </div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full border ${
                  job.current
                    ? "border-data-positive/40 text-data-positive"
                    : "border-border text-text-muted"
                }`}
              >
                {job.duration}
              </span>
            </div>
            <ul className="space-y-2">
              {job.responsibilities.map((r) => (
                <li key={r} className="text-sm text-text-secondary flex gap-2.5 leading-relaxed">
                  <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
