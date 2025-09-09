import { projects } from "@/lib/content";
import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main className="bg-[#1B1B1B] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Portfolio</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">Selected work across residential, commercial, and mixed-use sectors.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} className="group rounded-xl overflow-hidden border border-white/10 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-neutral-300 mt-1">{p.category}</p>
                <span className="inline-block mt-2 text-[#CFAA4E] underline">View project</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
