"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="divide-y divide-white/10 rounded-xl border border-white/10 overflow-hidden bg-black/30">
      {items.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: AccordionItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-black/30">
      <button
        className="w-full flex items-center justify-between text-left px-5 py-4 focus:outline-none hover:bg-white/5"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="text-white font-medium pr-6">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#CFAA4E] transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="px-5 pb-5 text-neutral-300 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
