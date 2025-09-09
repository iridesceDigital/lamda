'use client'
import Link from "next/link";
import { services } from "@/lib/content";
import { HoverEffect } from "@/components/ui/card-hover-effect";

const Services = () => {
  return ( <div className="max-w-6xl mx-auto py-20">
   
        <div className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-white to-neutral-50 bg-opacity-50 mt-20">
          Build your dream using our services
        </div>
        <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto">
          From structural engineeringto planning disputes, We offer a wide range of services to help you grow your business. 
        </p>

        <HoverEffect items={services.map(s => ({ title: s.title, description: s.excerpt, image: s.image }))} />
        <div className="text-center mt-6">
          <Link href="/services" className="inline-block px-5 py-2 rounded-md bg-[#CFAA4E] text-black hover:bg-[#c29b3c] transition-colors">All services</Link>
        </div>

    </div> 
    
    );
}
 
export default Services;