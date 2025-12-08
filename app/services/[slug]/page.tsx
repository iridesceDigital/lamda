import { services } from "@/lib/content";
import Link from "next/link";
import { Metadata } from "next";
import { JSX } from "react";

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service?.title || "Service",
    description: service?.excerpt || "",
  };
}

function ContentWithLinks({ html }: { html: string }) {
  // Parse HTML and convert <a> tags to Next.js Link components while keeping them inline
  const parts: (string | JSX.Element)[] = [];
  const lines = html.split("</p>");

  lines.forEach((line, idx) => {
    if (!line.trim()) return;

    const content = line.includes("<p") ? line.substring(line.indexOf(">") + 1) : line;

    // Parse links within this line
    const linkRegex = /<a\s+href="([^"]+)"\s+style="([^"]+)">([^<]+)<\/a>/g;
    const contentParts: (string | JSX.Element)[] = [];
    let lastIdx = 0;
    let linkMatch;

    while ((linkMatch = linkRegex.exec(content)) !== null) {
      // Add text before link
      if (linkMatch.index > lastIdx) {
        contentParts.push(content.substring(lastIdx, linkMatch.index));
      }

      // Add link
      contentParts.push(
        <Link key={`link-${idx}-${parts.length}`} href={linkMatch[1]} style={{ ...parseStyle(linkMatch[2]) }}>
          {linkMatch[3]}
        </Link>
      );

      lastIdx = linkRegex.lastIndex;
    }

    // Add remaining text
    if (lastIdx < content.length) {
      contentParts.push(content.substring(lastIdx));
    }

    // If no links, just add the content
    if (contentParts.length === 0 && content.trim()) {
      contentParts.push(content);
    }

    if (contentParts.length > 0) {
      parts.push(
        <p key={`p-${idx}`} className="mb-3">
          {contentParts}
        </p>
      );
    }
  });

  return <>{parts}</>;
}

function parseStyle(styleStr: string): React.CSSProperties {
  const styles: Record<string, string> = {};
  styleStr.split(";").forEach((style) => {
    const [key, value] = style.split(":").map((s) => s.trim());
    if (key && value) {
      const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styles[camelKey] = value;
    }
  });
  return styles as React.CSSProperties;
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return <div className="pt-32 px-6">Not found</div>;

  const htmlContent = service.content
    .split("\n")
    .map((line) => (line.trim() ? `<p class="mb-3">${line}</p>` : ""))
    .join("");

  return (
    <main className="bg-[#1B1B1B] pt-40 md:pt-48 pb-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-xl" />
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold">{service.title}</h1>
          <div className="text-neutral-300 mt-6">
            <ContentWithLinks html={htmlContent} />
          </div>

          <Link href="/contact" className="inline-block mt-8 px-6 py-3 rounded-md bg-[#CFAA4E] text-black hover:bg-[#c29b3c]">
            Discuss this service
          </Link>
        </div>
      </div>
    </main>
  );
}
