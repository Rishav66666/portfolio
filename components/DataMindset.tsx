"use client";

import { useState } from "react";
import { dataMindsetSteps } from "@/data/profile";

export default function DataMindset() {
  const [active, setActive] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-start gap-4 mb-10">
        <span className="text-numeric text-accent/70 text-sm pt-1.5">05</span>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-text-primary mb-2">Data mindset</h2>
          <p className="text-text-secondary max-w-xl leading-relaxed">
            The same six steps, every time — from a raw file to a decision someone can act on.
          </p>
        </div>
      </div>

      <div className="panel rounded-2xl p-6 sm:p-9">
        <div className="flex flex-col sm:flex-row items-stretch gap-1">
          {dataMindsetSteps.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setActive(i)}
              className="flex-1 group relative"
            >
              <div className="flex sm:flex-col items-center sm:items-stretch gap-3">
                <div
                  className={`h-9 sm:h-1.5 w-9 sm:w-full rounded-full sm:rounded-full flex items-center justify-center sm:block transition-colors ${
                    i <= active ? "bg-accent" : "bg-border"
                  }`}
                >
                  <span className="sm:hidden text-xs text-bg font-medium">{i + 1}</span>
                </div>
                <p
                  className={`text-sm mt-0 sm:mt-3 text-left sm:text-center transition-colors ${
                    i === active ? "text-text-primary" : "text-text-muted"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 pt-7 border-t border-border">
          <p className="text-numeric text-xs text-accent mb-2">
            0{active + 1} / 0{dataMindsetSteps.length}
          </p>
          <p className="text-text-primary text-lg leading-relaxed max-w-xl">
            {dataMindsetSteps[active].detail}
          </p>
        </div>
      </div>
    </section>
  );
}
