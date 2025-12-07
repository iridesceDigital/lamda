import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import Services from "./services";
import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-28 overflow-hidden"
        style={{
          backgroundImage: 'url(/Hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1B1B1B',
        }}
      >
        <Spotlight className="md:flex md:-top-80 left-80" fill="#CFAA4E" />
        {/* Fade-out overlay into site background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B1B1B]/0 to-[#1B1B1B]" />
        </div>
        <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Integrated Building Design and Structural Engineering 
            </h1>
            <p className="mt-6 text-neutral-300 leading-relaxed">
              Experience a smarter design process. By merging architectural building design and structural engineering, we provide homeowners, developers, and contractors with a single, comprehensive solution that streamlines projects and reduces costs.  Alternatively, we carry can work with others to produce individual packages.  Let&apos;s build your vision together.
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
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <Image src="/images/L1.jpg" alt="Lamda studio" width={500} height={400} className="w-full h-72 md:h-96 object-cover rounded-xl" />
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

      {/* Key stats row 
      <section className="bg-[#1B1B1B] pt-20">
        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-3 rounded-2xl border border-white/10 bg-black/50 p-8">
              <div className="p-4 rounded-xl bg-[#CFAA4E]/15 text-[#CFAA4E]">
                <Star className="w-14 h-14" />
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-white">Statistic 1</p>
              <p className="text-base md:text-lg text-neutral-300">Reviews</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 rounded-2xl border border-white/10 bg-black/50 p-8">
              <div className="p-4 rounded-xl bg-[#CFAA4E]/15 text-[#CFAA4E]">
                <House className="w-14 h-14" />
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-white">Statistic 2</p>
              <p className="text-base md:text-lg text-neutral-300">Homes</p>
            </div>
            <div className="flex flex-col items-center text-center gap-3 rounded-2xl border border-white/10 bg-black/50 p-8">
              <div className="p-4 rounded-xl bg-[#CFAA4E]/15 text-[#CFAA4E]">
                <BadgeCheck className="w-14 h-14" />
              </div>
              <p className="text-2xl md:text-3xl font-semibold text-white">Statistic 3</p>
              <p className="text-base md:text-lg text-neutral-300">Verified</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Services preview grid */}
  <section className="bg-[#1B1B1B] py-8">
        <Services />
      </section>

      {/* FAQ */}
  <section className="bg-[#1B1B1B] pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">FAQ</h2>
          <p className="mt-3 text-neutral-300 max-w-2xl">Answers to common questions about process, timelines, and working with us.</p>
          <div className="mt-8">
            <Accordion
              items={[
                {
                  question: "Do you handle both planning and building regulations?",
                  answer:
                    "Yes. We manage planning applications and provide building regulations drawings/specifications, coordinating with local authorities and approved inspectors.",
                },
                {
                  question: "How long does a typical project take?",
                  answer:
                    "Timeframes vary by scope. Planning can take 8–12 weeks depending on the authority. Technical design typically follows over 2–6 weeks. We’ll outline a tailored programme at kickoff.",
                },
                {
                  question: "Can you provide structural calculations only?",
                  answer:
                    "Absolutely. We often support homeowners, contractors and architects with standalone structural calculations and details for building control and construction.",
                },
                {
                  question: "Do you work nationwide?",
                  answer:
                    "We’re based in the UK and work remotely nationwide. For site visits, we’ll confirm travel feasibility and costs up front.",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}



