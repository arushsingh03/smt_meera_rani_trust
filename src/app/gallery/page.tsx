"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/gallery/pic1.jpg",
    alt: "Education Program",
    category: "Industry",
  },
  {
    src: "/gallery/pic2.jpg",
    alt: "Healthcare Camp",
    category: "Industry",
  },
  {
    src: "/gallery/pic3.jpg",
    alt: "Women Empowerment Workshop",
    category: "Industry",
  },
  {
    src: "/gallery/pic4.jpg",
    alt: "Community Development Project",
    category: "Industry",
  },
  {
    src: "/gallery/pic5.jpg",
    alt: "Environmental Conservation",
    category: "Schools",
  },
  {
    src: "/gallery/pic6.jpg",
    alt: "Youth Development Program",
    category: "Schools",
  },
  {
    src: "/gallery/pic7.jpg",
    alt: "Youth Development Program",
    category: "Schools",
  },
  {
    src: "/gallery/pic8.jpg",
    alt: "Youth Development Program",
    category: "Industry",
  },
  {
    src: "/gallery/pic9.jpg",
    alt: "Youth Development Program",
    category: "Schools",
  },
  {
    src: "/gallery/pic10.jpg",
    alt: "Youth Development Program",
    category: "Schools",
  },
  {
    src: "/gallery/pic11.jpg",
    alt: "Youth Development Program",
    category: "Schools",
  },
  {
    src: "/gallery/pic12.jpg",
    alt: "Youth Development Program",
    category: "Schools",
  },
];

const categories = ["All", "Industry", "Schools"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl max-w-3xl">
            A visual journey through our impactful programs and community
            initiatives.
          </p>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg mb-8">
            <iframe
              src="https://www.youtube.com/embed/dlgzm31ABVU"
              title="SMT Meera Rani Samajik Utthan Sansthan Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[500px]"
            ></iframe>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">
              About SMT Meera Rani Samajik Utthan Sansthan
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              SMT Meera Rani Samajik Utthan Sansthan is dedicated to uplifting
              the weaker sections of society through holistic social, cultural,
              educational, and health initiatives. Our mission is to empower
              communities by providing access to healthcare, education, and
              awareness programs, with a special focus on women and children. We
              strive to create lasting positive change and foster a healthier,
              more equitable society.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={selectedImage}
              alt="Selected image"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
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
    </div>
  );
}
