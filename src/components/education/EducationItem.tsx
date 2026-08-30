type EducationItemProps = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

export function EducationItem({
  institution,
  degree,
  period,
  description,
}: EducationItemProps) {
  return (
    <article className="rounded-2xl border border-black/10 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
            {period}
          </p>

          <h3 className="mt-2 text-xl font-semibold text-gray-950">
            {degree}
          </h3>

          <p className="mt-1 text-base text-gray-500">
            {institution}
          </p>
        </div>
      </div>

      <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
        {description}
      </p>
    </article>
  );
}
