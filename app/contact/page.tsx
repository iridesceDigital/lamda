"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const data = new FormData(e.currentTarget);
    const formData = new FormData();
    formData.append("firstName", data.get("firstName") || "");
    formData.append("lastName", data.get("lastName") || "");
    formData.append("company", data.get("company") || "");
    formData.append("email", data.get("email") || "");
    formData.append("phone", data.get("phone") || "");
    formData.append("message", data.get("message") || "");
    formData.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/polishgingertom@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Thanks, we'll be in touch shortly.");
        e.currentTarget.reset();
      } else {
        setStatus("There was a problem sending your message. Please try again or email polishgingertom@gmail.com");
      }
    } catch (error) {
      setStatus("There was a problem sending your message. Please email polishgingertom@gmail.com");
    } finally {
      setIsSubmitting(false);
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
          <button type="submit" disabled={isSubmitting} className="mt-2 px-6 py-3 rounded-md bg-[#CFAA4E] text-black font-medium hover:bg-[#c29b3c] disabled:opacity-50">
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
          {status && <p className={`text-sm ${status.includes("Thanks") ? "text-green-400" : "text-red-400"}`}>{status}</p>}
        </form>
      </div>
    </main>
  );
}
