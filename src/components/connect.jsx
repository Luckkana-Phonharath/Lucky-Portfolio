import { Button } from "./button";
import { ArrowOutwardIcon } from "../components/icons";

export function Connect() {
  return (
    <section className="relative overflow-hidden px-10 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-slate-950 to-blue-950/30 px-12 py-10 shadow-[0_0_50px_rgba(37,99,235,0.12)]">
          <div className="flex items-center gap-8">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 shadow-[0_0_35px_rgba(59,130,246,0.35)]">
              <ArrowOutwardIcon className="h-12 w-12" />
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-500">
                Let&apos;s Work Together
              </p>

              <h2 className="text-4xl font-bold text-white">
                Have a project in mind?
              </h2>

              <p className="mt-3 text-slate-300">
                I&apos;d love to hear about it. Let&apos;s create something amazing together!
              </p>
            </div>
          </div>

          <Button
            to="/contact"
            variant="filled"
            shape="square"
            icon={ArrowOutwardIcon}
            size="md"
          >
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
}