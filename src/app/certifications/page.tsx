'use client';

import { useState } from 'react';
import Image from "next/image";

const certifications = [
  {
    title: "12-A Certificate",
    description:
      "Certification granted to NGOs for tax exemption under section 12A of the Income Tax Act, confirming the organization's legal status and compliance.",
    image: "/12A.webp",
    year: "2002",
  },
  {
    title: "Society Registration",
    description:
      "Official registration of the organization as a society under the Societies Registration Act, establishing its legal identity.",
    image: "/society.webp",
    year: "2018",
  },
  {
    title: "FCRA Registration",
    description:
      "Registration under the Foreign Contribution Regulation Act allowing the NGO to receive foreign donations legally and transparently.",
    image: "/FCRA.webp",
    year: "2017",
  },
  {
    title: "Neeti Ayog",
    description:
      "Recognition by NITI Aayog for the organization's effective contributions towards national development and policy implementation.",
    image: "/NITI.webp",
    year: "2018",
  },
  {
    title: "D.G. Shipping Govt. of India",
    description:
      "Certification issued by Directorate General of Shipping acknowledging compliance with maritime and shipping regulations.",
    image: "/Shipping.avif",
    year: "2002",
  },
  {
    title: "PAN Card Of NGO",
    description:
      "Permanent Account Number (PAN) issued to the NGO for tax purposes and financial identification.",
    image: "/pan.avif",
    year: "2017",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Certifications
          </h1>
          <p className="text-xl max-w-3xl">
            Recognitions and achievements that validate our commitment to
            excellence and social impact.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="relative h-48">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {cert.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-blue-600 font-medium mb-2">
                {selectedCert.year}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{selectedCert.title}</h3>
              <p className="text-gray-600 text-lg">{selectedCert.description}</p>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 bg-white rounded-full p-2 shadow-md"
              onClick={() => setSelectedCert(null)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Be part of our mission to create positive change and earn
            recognition for your contributions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}
