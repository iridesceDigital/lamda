import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Lamda Building Design</h3>
          <p className="text-sm text-neutral-300 mt-2">
            Smarter design through integrated architecture & engineering.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Pages</h4>
          <ul className="space-y-2 text-neutral-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li>Email: <a className="underline" href="mailto:info@lamdabuildingdesign.co.uk">info@lamdabuildingdesign.co.uk</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-neutral-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Lamda Building Design. All rights reserved.</span>
          <div className="space-x-4">
            <Link href="#">Privacy</Link>
            <Link href="#">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
