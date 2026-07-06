
import { ArrowOutwardIcon } from "../../../components/icons";

export function WorkCard({ title, category, image }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-slate-900/80 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex items-end justify-between px-4 py-5">
        <div>
          <h3 className="font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-400">{category}</p>
        </div>

        <ArrowOutwardIcon className="h-6 w-6 text-blue-500 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </article>
  );
}