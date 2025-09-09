"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("https://formspree.io/f/mkgwnjda", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
  setStatus("Thanks, we\'ll be in touch shortly.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("There was a problem sending your message. Please email info@lamdabuildingdesign.co.uk");
    }
  }

  return (
    <main className="bg-[#1B1B1B] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Contact Us</h1>
  <p className="mt-4 text-neutral-300">Tell us about your project and we&apos;ll get back to you.</p>
        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="firstName" required placeholder="First name" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
            <input name="lastName" required placeholder="Last name" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
          </div>
          <input name="company" placeholder="Company" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
          <input name="email" type="email" required placeholder="Email" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
          <input name="phone" type="tel" placeholder="Phone" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
          <textarea name="message" required placeholder="How can we help?" className="bg-black/50 border border-white/10 rounded-md px-4 py-3 min-h-40" />
          <button type="submit" className="mt-2 px-6 py-3 rounded-md bg-[#CFAA4E] text-black font-medium hover:bg-[#c29b3c]">Send message</button>
          {status && <p className="text-sm text-neutral-300">{status}</p>}
        </form>
      </div>
    </main>
  );
}
