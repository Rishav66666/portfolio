export default function SectionHeading({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-10">
      <span className="text-numeric text-accent/70 text-sm pt-1.5">{index}</span>
      <div>
        <h2 className="font-display text-2xl sm:text-3xl text-text-primary mb-2">{title}</h2>
        {description && (
          <p className="text-text-secondary max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
