import { motion } from "framer-motion";
import Link from "next/link";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  return (
    <motion.div
      className="
    w-screen
    h-screen
    bg-[#1B1B1B]
     text-white
     p-6
     space-y-4
     absolute
     top-28
     left-0
     right-0
     z-50
     rounded-t-3xl
    "
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex-col flex space-y-10" onClick={onClose}>
        <Link href="/" className="text-white text-2xl hover:text-[#CFAA4E]">
          Home
        </Link>
        <Link href="/services" className="text-white text-2xl hover:text-[#CFAA4E]">
          Services
        </Link>
        <Link href="/portfolio" className="text-white text-2xl hover:text-[#CFAA4E]">
          Portfolio
        </Link>

        <Link href="/contact" className="text-white text-2xl hover:text-[#CFAA4E]">
          Contact
        </Link>

        
      </div>
    </motion.div>
  );
};

export default DropDownMenu;