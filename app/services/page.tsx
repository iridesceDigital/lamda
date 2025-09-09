import Link from "next/link";
import { services } from "@/lib/content";

export default function ServicesPage() {
  return (
    <main className="bg-[#1B1B1B] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Services</h1>
        <p className="mt-4 text-neutral-300 max-w-2xl">Explore our full range of integrated architectural and engineering services.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-xl overflow-hidden border border-white/10 bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt={s.title} className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-neutral-300 mt-1">{s.excerpt}</p>
                <span className="inline-block mt-3 text-[#CFAA4E] underline">Learn more</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
