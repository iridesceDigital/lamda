"use client";
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The engineering team at Lamda delivered innovative solutions for our complex renovation project. Their attention to detail and commitment to safety exceeded our expectations.",
    name: "Sarah Thompson",
    title: "Residential Renovation Client",
  },
{
  quote:
    "Lamda guided us through a challenging planning dispute with professionalism and expertise. Their strategic approach helped us secure approval for our new development.",
  name: "James Patel",
  title: "Commercial Developer",
},
{
  quote:
    "From concept to completion, Lamda’s architects were responsive and creative. The final design perfectly balanced aesthetics and functionality for our workspace.",
  name: "Emily Carter",
  title: "Office Fit-Out Client",
},
{
  quote:
    "We faced significant hurdles with local regulations, but Lamda’s planning consultants navigated the process smoothly. Their knowledge made all the difference.",
  name: "Michael O’Connor",
  title: "Planning Consultation Client",
},
{
  quote:
    "Lamda’s engineering team provided clear communication and reliable project management throughout our extension build. We highly recommend their services.",
  name: "Priya Singh",
  title: "Home Extension Client",
},
];