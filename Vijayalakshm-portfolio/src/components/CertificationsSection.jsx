import { useState } from "react";
import { cn } from "@/lib/utils";

const certifications = [
  {
    name: "Introduction to Modern AI",
    provider: "CISCO",
  },
  {
    name: "AWS - Solutions Architecture Job Simulation",
    provider: "FORAGE",
  },
  {
    name: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
    provider: "Oracle University",
  },
  {
    name: "Red Hat® Certified System Administrator (RHCSA®)",
    provider: "Red Hat Academy",
  },
  {
    name: "IT Specialist in HTML and CSS",
    provider: "Pearson",
  },
  {
    name: "IT Specialist in Python and Java",
    provider: "Pearson",
  },
];

export const CertificationsSection = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-4 relative bg-secondary/10"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-left"
            >
              <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
              <p className="text-muted-foreground text-sm">
                Issued by: <span className="font-medium">{cert.provider}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
