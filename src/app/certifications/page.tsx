"use client";

import { useState } from "react";
import {
  Award,
  Shield,
  FileCheck,
  X,
  Eye,
  Calendar,
  Building,
  FileText,
  CheckCircle,
  Trophy,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const certifications = [
  {
    src: "/12A.webp",
    title: "12-A Certificate",
    description:
      "Certification granted to NGOs for tax exemption under section 12A of the Income Tax Act, confirming the organization's legal status and compliance.",
    year: "2002",
    category: "Tax Exemption",
    authority: "Income Tax Department",
  },
  {
    src: "/society.webp",
    title: "Society Registration",
    description:
      "Official registration of the organization as a society under the Societies Registration Act, establishing its legal identity.",
    year: "2018",
    category: "Legal Registration",
    authority: "Registrar of Societies",
  },
  {
    src: "/FCRA.webp",
    title: "FCRA Registration",
    description:
      "Registration under the Foreign Contribution Regulation Act allowing the NGO to receive foreign donations legally and transparently.",
    year: "2017",
    category: "Foreign Donations",
    authority: "Ministry of Home Affairs",
  },
  {
    src: "/NITI.webp",
    title: "Neeti Ayog",
    description:
      "Recognition by NITI Aayog for the organization's effective contributions towards national development and policy implementation.",
    year: "2018",
    category: "Government Recognition",
    authority: "NITI Aayog",
  },
  {
    src: "/Shipping.avif",
    title: "D.G. Shipping Govt. of India",
    description:
      "Certification issued by Directorate General of Shipping acknowledging compliance with maritime and shipping regulations.",
    year: "2002",
    category: "Maritime Compliance",
    authority: "Directorate General of Shipping",
  },
  {
    src: "/pan.avif",
    title: "PAN Card Of NGO",
    description:
      "Permanent Account Number (PAN) issued to the NGO for tax purposes and financial identification.",
    year: "2017",
    category: "Financial ID",
    authority: "Income Tax Department",
  },
];

const categories = [
  {
    name: "All",
    icon: Award,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    count: certifications.length,
  },
  {
    name: "Tax Exemption",
    icon: Shield,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
    count: certifications.filter(
      (cert) =>
        cert.category === "Tax Exemption" || cert.category === "Financial ID"
    ).length,
  },
  {
    name: "Legal Registration",
    icon: FileCheck,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    count: certifications.filter(
      (cert) =>
        cert.category === "Legal Registration" ||
        cert.category === "Foreign Donations" ||
        cert.category === "Government Recognition" ||
        cert.category === "Maritime Compliance"
    ).length,
  },
];

type Certification = {
  src: string;
  title: string;
  description: string;
  year: string;
  category: string;
  authority: string;
};

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  const filteredCertifications =
    selectedCategory === "All"
      ? certifications
      : selectedCategory === "Tax Exemption"
      ? certifications.filter(
          (cert) =>
            cert.category === "Tax Exemption" ||
            cert.category === "Financial ID"
        )
      : certifications.filter(
          (cert) =>
            cert.category === "Legal Registration" ||
            cert.category === "Foreign Donations" ||
            cert.category === "Government Recognition" ||
            cert.category === "Maritime Compliance"
        );

  const selectedCategoryData = categories.find(
    (cat) => cat.name === selectedCategory
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Trophy className="w-5 h-5 mr-2" />
              <span>Official Certifications & Recognition</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                Our Certifications
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Discover our journey of excellence through official recognitions
              and certifications that validate our commitment to transparency
              and social impact.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: "6",
                  label: "Certifications",
                  icon: <FileText className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-white/25 via-white/10 to-white/5",
                  borderGradient: "from-white/40 via-white/20 to-white/10",
                },
                {
                  number: "3",
                  label: "Categories",
                  icon: <Building className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-orange-400/25 via-orange-400/10 to-orange-400/5",
                  borderGradient: "from-orange-300/40 via-orange-300/20 to-orange-300/10",
                },
                {
                  number: "20+",
                  label: "Years Certified",
                  icon: <Calendar className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-pink-400/25 via-pink-400/10 to-pink-400/5",
                  borderGradient: "from-pink-300/40 via-pink-300/20 to-pink-300/10",
                },
                {
                  number: "100%",
                  label: "Compliance",
                  icon: <CheckCircle className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-teal-400/25 via-teal-400/10 to-teal-400/5",
                  borderGradient: "from-teal-300/40 via-teal-300/20 to-teal-300/10",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className="mb-3 mx-auto w-16 h-16 backdrop-blur-xl rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl group-hover:shadow-3xl relative overflow-hidden border"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)`,
                      border: `1px solid rgba(255,255,255,0.3)`,
                      boxShadow: `
                        0 8px 32px rgba(0,0,0,0.2),
                        inset 0 1px 0 rgba(255,255,255,0.3),
                        inset 0 -1px 0 rgba(255,255,255,0.1)
                      `,
                      borderRadius: "16px",
                    }}
                  >
                    {/* Glass highlight effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50"
                      style={{ borderRadius: "16px" }}
                    ></div>
                    {/* Animated shimmer */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"
                      style={{ borderRadius: "16px" }}
                    ></div>
                    <span
                      className={`${stat.iconColor} relative z-10 drop-shadow-lg`}
                    >
                      {stat.icon}
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-white drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold mt-6 shadow-lg backdrop-blur-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Explore by Category
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              Filter our certifications to see specific compliance areas and
              legal recognition
            </p>
            
            <div className="inline-flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon;
                const isActive = selectedCategory === category.name;
                return (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                      isActive
                        ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                        : "bg-slate-800/70 text-white hover:bg-slate-700/70 border border-slate-600/30"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                    {category.count > 0 && (
                      <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                        isActive ? "bg-white/20" : "bg-slate-600"
                      }`}>
                        {category.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                {selectedCategory} Certifications
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {filteredCertifications.length} certifications showcasing our
              commitment to {selectedCategory.toLowerCase()} compliance and
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedCertification(cert)}
              >
                {/* Certificate Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                    width={500}
                    height={300}
                  />

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className={`inline-flex items-center space-x-2 bg-gradient-to-r ${
                        selectedCategoryData?.gradient ||
                        "from-emerald-500 to-teal-500"
                      } text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>{cert.year}</span>
                    </div>
                  </div>

                  {/* View Button */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-800 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${
                        selectedCategoryData?.gradient ||
                        "from-emerald-500 to-teal-500"
                      } rounded-lg flex items-center justify-center text-white shadow-lg`}
                    >
                      <Award className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-900">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-slate-500 text-base">
                      <Shield className="w-4 h-4" />
                      <span>{cert.authority}</span>
                    </div>
                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${
                        selectedCategoryData?.gradient ||
                        "from-emerald-500 to-teal-500"
                      } rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertification && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertification(null)}
        >
          <div className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <Image
                src={selectedCertification.src}
                alt={selectedCertification.title}
                className="w-full h-[70vh] object-contain bg-slate-100"
                width={1200}
                height={800}
              />
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full flex items-center justify-center hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCertification(null);
                }}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 bg-white">
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className={`w-10 h-10 bg-gradient-to-r ${
                    selectedCategoryData?.gradient ||
                    "from-emerald-500 to-teal-500"
                  } rounded-lg flex items-center justify-center text-white shadow-lg`}
                >
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {selectedCertification.title}
                </h3>
                <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedCertification.year}
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed mb-3">
                {selectedCertification.description}
              </p>
              <div className="flex items-center space-x-2 text-slate-500 text-base">
                <Shield className="w-4 h-4" />
                <span>Issued by: {selectedCertification.authority}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Award className="w-4 h-4 inline mr-2" />
            Join Our Mission
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Be Part of Excellence
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-emerald-100 leading-relaxed">
            Join our journey of creating positive change and earning recognition
            for meaningful contributions to society.
          </p>
          <Link
            href="/volunteer"
            className="inline-block bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get Involved Today
          </Link>
        </div>
      </section>
    </div>
  );
}
