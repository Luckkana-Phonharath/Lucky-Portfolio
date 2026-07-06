import { Button } from "../../components/button";
import { ArrowOutwardIcon } from "../../components/icons";
import { WorkCard } from "./home-components/work-card";
import { projects } from "../../lib/projects";

export function SelectedWork() {
  return (
    <section className="relative overflow-hidden px-10 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
          Selected Work
        </p>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            A selection of my recent work.
          </h2>

          <Button
            variant="plain"
            icon={ArrowOutwardIcon}
            className="text-gray-400"
            size="sm"
          >
            View All Projects
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              style={{ animationDelay: `${index * 140}ms` }}
              className="opacity-0 animate-[fadeSlideIn_0.6s_ease-out_forwards]"
            >
              <WorkCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}