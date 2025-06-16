"use client";

import { useState } from "react";
import {
  Camera,
  Building2,
  GraduationCap,
  X,
  Play,
  Eye,
  Calendar,
  Code,
  Dna,
} from "lucide-react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/pic1.jpg",
    alt: "Education Program",
    category: "Industry",
    description:
      "Comprehensive educational initiatives in industrial settings, focusing on skill development and knowledge enhancement for workers and their families.",
    location: "Kanpur Industrial Zone",
  },
  {
    src: "/gallery/pic2.jpg",
    alt: "Healthcare Camp",
    category: "Industry",
    description:
      "Mobile medical units providing essential healthcare services to industrial workers, ensuring regular health monitoring and preventive care.",
    location: "Manufacturing District",
  },
  {
    src: "/gallery/pic3.jpg",
    alt: "Women Empowerment Workshop",
    category: "Industry",
    description:
      "Empowering women in industrial communities through skill training, awareness programs, and leadership development initiatives.",
    location: "Industrial Community Center",
  },
  {
    src: "/gallery/pic4.jpg",
    alt: "Community Development Project",
    category: "Industry",
    description:
      "Holistic community development programs addressing infrastructure, health, and social needs in industrial areas.",
    location: "Industrial Township",
  },
  {
    src: "/gallery/pic5.jpg",
    alt: "Environmental Conservation",
    category: "Schools",
    description:
      "Teaching environmental awareness and conservation practices to students, fostering eco-friendly habits from an early age.",
    location: "Government Schools",
  },
  {
    src: "/gallery/pic6.jpg",
    alt: "Youth Development Program",
    category: "Schools",
    description:
      "Comprehensive programs for youth development including career guidance, life skills, and personality development sessions.",
    location: "Rural Schools",
  },
  {
    src: "/gallery/pic7.jpg",
    alt: "Health Awareness Session",
    category: "Schools",
    description:
      "Interactive health education sessions covering nutrition, hygiene, and preventive healthcare for school children.",
    location: "Primary Schools",
  },
  {
    src: "/gallery/pic8.jpg",
    alt: "Skill Development Workshop",
    category: "Industry",
    description:
      "Vocational training and skill development workshops for industrial workers to enhance their capabilities and career prospects.",
    location: "Training Centers",
  },
  {
    src: "/gallery/pic9.jpg",
    alt: "Student Health Checkup",
    category: "Schools",
    description:
      "Regular health checkups and medical examinations for students, ensuring early detection and treatment of health issues.",
    location: "School Health Centers",
  },
  {
    src: "/gallery/pic10.jpg",
    alt: "Community Outreach",
    category: "Schools",
    description:
      "Community outreach programs connecting schools with local communities to address broader social and health challenges.",
    location: "Village Schools",
  },
  {
    src: "/gallery/pic11.jpg",
    alt: "Educational Support",
    category: "Schools",
    description:
      "Providing educational support materials, resources, and infrastructure improvements to enhance learning environments.",
    location: "Public Schools",
  },
  {
    src: "/gallery/pic12.jpg",
    alt: "Mental Health Awareness",
    category: "Schools",
    description:
      "Mental health awareness programs addressing psychological well-being of students and providing counseling support.",
    location: "Secondary Schools",
  },
];

const categories = [
  {
    name: "All",
    icon: Camera,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    count: galleryImages.length,
  },
  {
    name: "Industry",
    icon: Building2,
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
    count: galleryImages.filter((img) => img.category === "Industry").length,
  },
  {
    name: "Schools",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    count: galleryImages.filter((img) => img.category === "Schools").length,
  },
];

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  description: string;
  location: string;
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

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
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-emerald-100 px-6 py-3 rounded-full text-base font-semibold mb-8 border border-white/30">
              <Camera className="w-5 h-5" />
              <span>Visual Journey of Impact</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                Our Gallery
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Witness the transformative power of our programs through powerful
              visual stories that showcase real impact in communities across
              India.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: "12",
                  label: "Featured Photos",
                  icon: <Camera className="w-6 h-6" />,
                  bgColor: "bg-white/20",
                  borderColor: "border-white/30",
                },
                {
                  number: "2",
                  label: "Program Areas",
                  icon: <Code className="w-6 h-6" />,
                  bgColor: "bg-orange-500/20",
                  borderColor: "border-orange-300/40",
                },
                {
                  number: "25+",
                  label: "Years Documented",
                  icon: <Calendar className="w-6 h-6" />,
                  bgColor: "bg-blue-500/20",
                  borderColor: "border-blue-300/40",
                },
                {
                  number: "1L+",
                  label: "Lives Captured",
                  icon: <Dna className="w-6 h-6" />,
                  bgColor: "bg-teal-500/20",
                  borderColor: "border-teal-300/40",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`mb-3 mx-auto w-14 h-14 ${stat.bgColor} backdrop-blur-sm border ${stat.borderColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-emerald-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Our Story in Motion
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience our journey through this comprehensive video showcase
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden">
              {/* Video Section */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 to-teal-50/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <iframe
                  src="https://www.youtube.com/embed/dlgzm31ABVU"
                  title="SMT Meera Rani Samajik Utthan Sansthan Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>

                {/* Video Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    <Play className="w-4 h-4" />
                    <span>Featured Video</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Play className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900">
                    About SMT Meera Rani Samajik Utthan Sansthan
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700">
                  SMT Meera Rani Samajik Utthan Sansthan is dedicated to
                  uplifting the weaker sections of society through holistic
                  social, cultural, educational, and health initiatives. Our
                  mission is to empower communities by providing access to
                  healthcare, education, and awareness programs, with a special
                  focus on women and children.
                </p>

                {/* Action Button */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <a
                    href="https://www.youtube.com/watch?v=dlgzm31ABVU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 font-semibold hover:underline transition-all duration-300"
                  >
                    Watch Full Story →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Explore by Category
            </h2>
            <p className="text-lg text-slate-300">
              Filter our gallery to see specific program areas and their impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`group relative p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isActive
                      ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl`
                      : "bg-slate-800/50 backdrop-blur-sm text-white hover:bg-slate-700/50 border border-slate-600/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive
                          ? "bg-white/20"
                          : `bg-gradient-to-r ${category.gradient}`
                      } shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className={`text-2xl font-bold ${
                        isActive ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {category.count}
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isActive ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {category.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      isActive ? "text-white/80" : "text-slate-400"
                    }`}
                  >
                    {category.name === "All"
                      ? "All program areas"
                      : category.name === "Industry"
                      ? "Industrial health programs"
                      : "School-based initiatives"}
                  </p>
                  {isActive && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Images Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                {selectedCategory} Gallery
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {filteredImages.length} photos showcasing our impactful work in{" "}
              {selectedCategory.toLowerCase()} programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      selectedCategoryData?.bgGradient ||
                      "from-emerald-50 to-teal-50"
                    } opacity-90 group-hover:opacity-0 transition-opacity duration-300 z-10`}
                  ></div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    width={500}
                    height={300}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className={`inline-flex items-center space-x-2 bg-gradient-to-r ${
                        selectedCategoryData?.gradient ||
                        "from-emerald-500 to-teal-500"
                      } text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                    >
                      {selectedCategoryData && (
                        <selectedCategoryData.icon className="w-4 h-4" />
                      )}
                      <span>{image.category}</span>
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
                      <Camera className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-900">
                      {image.alt}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4 group-hover:text-slate-700">
                    {image.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-slate-500 text-base">
                      <Building2 className="w-4 h-4" />
                      <span>{image.location}</span>
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

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-[70vh] object-contain bg-slate-100"
                width={1200}
                height={800}
              />
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full flex items-center justify-center hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
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
                  <Camera className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {selectedImage.alt}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-3">
                {selectedImage.description}
              </p>
              <div className="flex items-center space-x-2 text-slate-500 text-sm">
                <Building2 className="w-4 h-4" />
                <span>{selectedImage.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
