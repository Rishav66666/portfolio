import { Trophy, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { achievements } from "@/data/profile";

export default function AchievementSection() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="08" title="Achievements & leadership" />

      <div className="grid sm:grid-cols-2 gap-4">
        {achievements.map((a) => (
          <div
            key={a.id}
            className={`panel rounded-xl p-5 ${a.isLeadership ? "border-accent/40" : ""}`}
          >
            <div className="flex items-start gap-3">
              {a.isLeadership ? (
                <Trophy size={18} className="text-accent shrink-0 mt-0.5" />
              ) : (
                <Award size={18} className="text-text-muted shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className="text-text-primary text-sm font-medium leading-snug">{a.title}</h3>
                <p className="text-xs text-text-muted mt-1">
                  {a.issuer} · {a.date}
                </p>
                {a.detail && (
                  <p className="text-sm text-text-secondary mt-2 leading-relaxed">{a.detail}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
