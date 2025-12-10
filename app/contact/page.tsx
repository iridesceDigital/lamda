"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    // Capture the form element synchronously so we don't rely on the
    // synthetic event after any await (React may null out the event).
    const formEl = e.currentTarget as HTMLFormElement;
    const data = new FormData(formEl);
    const formData = new FormData();
    formData.append("firstName", String(data.get("firstName") || ""));
    formData.append("lastName", String(data.get("lastName") || ""));
    formData.append("company", String(data.get("company") || ""));
    formData.append("email", String(data.get("email") || ""));
    formData.append("phone", String(data.get("phone") || ""));
    formData.append("message", String(data.get("message") || ""));
    formData.append("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/info@lamdabuildingdesign.co.uk", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", res.status);
      console.log("Response ok:", res.ok);

      if (res.ok) {
        setStatus("Thanks, we'll be in touch shortly.");
        // Use the captured form element rather than the pooled event
        formEl.reset();
      } else {
        console.error("Response error:", res.statusText);
        setStatus("There was a problem sending your message. Please try again or email info@lamdabuildingdesign.co.uk");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStatus("There was a problem sending your message. Please email info@lamdabuildingdesign.co.uk");
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
