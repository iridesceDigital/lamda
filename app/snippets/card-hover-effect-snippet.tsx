import { HoverEffect } from "@/components/ui/card-hover-effect";
import { services as serviceData } from "@/lib/content";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
  <HoverEffect items={serviceData.map(s => ({ title: s.title, description: s.excerpt, image: s.image }))} />
    </div>
  );
}
// data sourced from lib/content