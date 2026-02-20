"use client";

import { MotionDiv } from "./Motion";
import { Check, X } from "lucide-react";
import { ScrollAnimation } from "./ScrollAnimation";

export default function ComparisonSection() {
  const rows = [
    { label: "Soft tapered bristles", pb: true, other: false },
    { label: "Eco-friendly materials", pb: true, other: false },
    { label: "Minimal design", pb: true, other: false },
    { label: "Dentist approved", pb: true, other: true },
  ];

  return (
    <section className="bg-[#faf7f2] flex justify-center flex-col mx-3 py-20">
      {/* Heading */}
      <ScrollAnimation>
        <MotionDiv className="text-center mb-12">
          <h3 className="text-xl font-semibold">Why PureBrush?</h3>
          <p className="text-sm text-neutral-600">
            A simple choice that makes your daily care feel better.
          </p>
        </MotionDiv>
      </ScrollAnimation>

      {/* Comparison Box */}
      <ScrollAnimation>
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-md p-6 md:p-10">
          {/* Header Row */}
          <div className="grid grid-cols-3 text-base font-semibold mb-2">
            <p className="text-left">Feature</p>
            <p className="text-center">PureBrush</p>
            <p className="text-center">Others</p>
          </div>
          <div className="border-b border-black/10 mb-2" />

          {/* Feature Rows */}
          {rows.map((r, i) => (
            <div key={i}>
              <div className="grid grid-cols-3 items-center py-4">
                <p className="text-left text-lg text-black font-normal">
                  {r.label}
                </p>
                <div className="flex justify-center">
                  {r.pb ? (
                    <Check className="w-7 h-7 text-white bg-black rounded-full p-1" />
                  ) : (
                    <X className="w-7 h-7 text-white bg-black rounded-full p-1" />
                  )}
                </div>
                <div className="flex justify-center">
                  {r.other ? (
                    <Check className="w-7 h-7 text-white bg-black rounded-full p-1" />
                  ) : (
                    <X className="w-7 h-7 text-white bg-black rounded-full p-1" />
                  )}
                </div>
              </div>
              {i < rows.length - 1 && (
                <div className="border-b border-black/10" />
              )}
            </div>
          ))}
        </div>
      </ScrollAnimation>
    </section>
  );
}
