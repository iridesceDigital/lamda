import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Lamda Building Design</h3>
          <p className="text-sm text-neutral-300 mt-2">
            Smarter design through integrated architectural building design and engineering.
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
            <li>
              M: <a className="underline" href="tel:+447506710209">+44 (7506) 710209</a>
            </li>
            <li>
              E: <a className="underline" href="mailto:info@LamdaBuildingDesign.co.uk">info@LamdaBuildingDesign.co.uk</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-neutral-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Lamda Building Design. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-white">
              <a
                href="https://www.facebook.com/profile.php?id=61583466672026&sk=about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lamda on Facebook"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                title="Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/lamdabuildingdesign/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lamda on Instagram"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                title="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
               <a
                href="https://www.linkedin.com/company/lamda-building-design-ltd"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lamda on Facebook"
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                title="Facebook"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link href="#">Privacy</Link>
              <Link href="#">Terms</Link>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 pb-6 -mt-2 text-[11px] text-neutral-400">
          Company registration number: 16136192 - Registered in England and Wales.
        </div>
      </div>
    </footer>
  );
}
