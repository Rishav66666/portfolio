import { personal } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p className="text-xs text-text-muted">Designed and built with data in mind.</p>
      </div>
    </footer>
  );
}
