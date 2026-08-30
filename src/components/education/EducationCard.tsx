import { PortfolioCard } from "@/components/cards/PortfolioCard";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { education } from "@/data/education";

export function EducationCard() {
  return (
    <PortfolioCard className="min-h-[70vh] p-8 md:p-12 lg:p-16">
      <div className="relative z-10">
        <SectionLabel>Education</SectionLabel>

        <div className="mt-8 max-w-3xl">
          <h2 className="section-heading">
            Where I&apos;ve{" "}
            <span className="gradient-text">learned.</span>
          </h2>

          <p className="body-copy mt-6 max-w-2xl text-lg">
            My academic journey so far, focused on computer science and
            software engineering.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                {education.startYear} — {education.expectedCompletion}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-gray-950">
                {education.degree} — {education.branch}
              </h3>

              <p className="mt-2 text-lg text-gray-500">
                {education.institution}
              </p>

              <p className="mt-1 text-base text-gray-500">
                {education.location}
              </p>
            </div>

            <div className="rounded-xl border border-black/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                Current CGPA
              </p>

              <p className="mt-1 text-3xl font-semibold text-gray-950">
                {education.cgpa.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
              Academic journey
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {education.semesters.map((semester) => (
                <div
                  key={semester.number}
                  className="rounded-xl border border-black/10 p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-950">
                      Semester {semester.number}
                    </span>

                    <span className="text-xs uppercase tracking-wider text-gray-500">
                      {semester.status === "completed"
                        ? "Completed"
                        : "Current"}
                    </span>
                  </div>

                  {semester.tgpa !== undefined ? (
                    <p className="mt-3 text-2xl font-semibold text-gray-950">
                      {semester.tgpa.toFixed(2)}
                    </p>
                  ) : (
                    <p className="mt-3 text-lg font-medium text-gray-500">
                      In progress
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortfolioCard>
  );
}
