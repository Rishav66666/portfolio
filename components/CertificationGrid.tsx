import { BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/profile";

export default function CertificationGrid() {
  return (
    <section id="certificates" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="07" title="Certifications" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <div key={cert.id} className="panel rounded-xl p-5 hover:border-accent/40 transition-colors">
            <div className="flex items-start gap-3 mb-3">
              <BadgeCheck size={18} className="text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="text-text-primary text-sm font-medium leading-snug">{cert.name}</h3>
                <p className="text-xs text-text-muted mt-1">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </div>
            {cert.topics && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {cert.topics.map((t) => (
                  <span key={t} className="text-[11px] text-text-secondary px-2 py-0.5 rounded-full border border-border">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
