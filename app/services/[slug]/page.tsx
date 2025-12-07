import { services } from "@/lib/content";
import Link from "next/link";

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return <div className="pt-32 px-6">Not found</div>;

  return (
    <main className="bg-[#1B1B1B] pt-40 md:pt-48 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-xl" />
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold">{service.title}</h1>
          <div
            className="text-neutral-300"
            dangerouslySetInnerHTML={{
              __html: service.content
                .split("\n")
                .map((line) =>
                  line.trim()
                    ? `<p class="mb-3">${line}</p>`
                    : ""
                )
                .join(""),
            }}
          />

          <Link href="/contact" className="inline-block mt-8 px-6 py-3 rounded-md bg-[#CFAA4E] text-black hover:bg-[#c29b3c]">Discuss this service</Link>
        </div>
      </div>
    </main>
  );
}
