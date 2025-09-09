import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import Services from "./services";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-[#1B1B1B] pt-28">
        <Spotlight className="md:flex md:-top-80 left-80" fill="#CFAA4E" />
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold text-white">
              Lamda Building Design
            </h1>
            <p className="mt-6 text-neutral-300 leading-relaxed">
              Experience a smarter design process. By merging architecture and structural engineering, we provide homeowners, developers, and contractors with a single, comprehensive solution that streamlines projects and reduces costs. Let&apos;s build your vision together.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <button className="px-6 py-3 rounded-md bg-[#CFAA4E] text-black font-medium hover:bg-[#c29b3c] transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About split section */}
      <section className="bg-[#1B1B1B]">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <img src="/images/L1.jpg" alt="Lamda studio" className="w-full h-72 md:h-96 object-cover rounded-xl" />
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-white">Integrated Architecture + Engineering</h2>
            <p className="mt-4 text-neutral-300">
              We combine creative architectural design with rigorous structural and civil engineering expertise. From concept to completion, we simplify coordination, reduce costs, and improve buildability.
            </p>
            <div className="mt-6 flex gap-4">
              <Link href="/services" className="underline text-[#CFAA4E]">Explore services</Link>
              <Link href="/portfolio" className="underline text-[#CFAA4E]">View portfolio</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview grid */}
      <section className="bg-[#1B1B1B]">
        <Services />
      </section>
    </main>
  );
}



