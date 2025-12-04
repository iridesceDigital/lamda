import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return <main className="pt-32 pb-20 px-6">Not found</main>;

  return (
    <main className="bg-[#1B1B1B] pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">{project.title}</h1>
        {project.description && (
          <p className="mt-4 text-neutral-300 max-w-3xl">{project.description}</p>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {project.gallery.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt={`${project.title} ${i + 1}`} className="w-full h-56 object-cover rounded-xl" />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
