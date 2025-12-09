"use client";

export default function ContactPage() {
  return (
    <main className="bg-[#1B1B1B] pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-semibold">Contact Us</h1>
        <p className="mt-4 text-neutral-300">Tell us about your project and we&apos;ll get back to you.</p>
        <form
          action="https://formsubmit.co/info@lamdabuildingdesign.co.uk"
          method="POST"
          className="mt-8 grid grid-cols-1 gap-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input name="firstName" required placeholder="First name" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
            <input name="lastName" required placeholder="Last name" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
          </div>
          <input name="company" placeholder="Company" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
          <input name="email" type="email" required placeholder="Email" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
          <input name="phone" type="tel" placeholder="Phone" className="bg-black/50 border border-white/10 rounded-md px-4 py-3" />
          <textarea name="message" required placeholder="How can we help?" className="bg-black/50 border border-white/10 rounded-md px-4 py-3 min-h-40" />
          {/* Formsubmit anti-spam and redirect options */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="/contact?success=1" />
          <button type="submit" className="mt-2 px-6 py-3 rounded-md bg-[#CFAA4E] text-black font-medium hover:bg-[#c29b3c]">Send message</button>
        </form>
      </div>
    </main>
  );
}
