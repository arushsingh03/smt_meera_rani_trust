"use client";

import { useState } from "react";
import {
  Users,
  Heart,
  BookOpen,
  Microscope,
  GraduationCap,
  Clock,
  MapPin,
} from "lucide-react";
import { sendVolunteerEmail } from "@/utils/emailjs";
import { toast } from "react-hot-toast";

const volunteerOpportunities = [
  {
    title: "Education Support",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Help children with their studies and educational activities",
    time: "2-4 hours/week",
    location: "School Centers",
    requirements: "Teaching experience preferred",
  },
  {
    title: "Healthcare Assistant",
    icon: <Heart className="w-6 h-6" />,
    description: "Support medical camps and health awareness programs",
    time: "4-6 hours/week",
    location: "Medical Camps",
    requirements: "Medical background helpful",
  },
  {
    title: "Community Outreach",
    icon: <Users className="w-6 h-6" />,
    description: "Engage with communities and organize awareness programs",
    time: "3-5 hours/week",
    location: "Various Locations",
    requirements: "Good communication skills",
  },
  {
    title: "Research & Documentation",
    icon: <Microscope className="w-6 h-6" />,
    description: "Help document our programs and their impact",
    time: "2-3 hours/week",
    location: "Office/Remote",
    requirements: "Research skills",
  },
];

export default function Volunteer() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(
    null
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    experience: "",
    availability: "",
    interests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await sendVolunteerEmail({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: "",
        occupation: formData.occupation,
        skills: "",
        availability: formData.availability,
        interests: formData.interests,
        message: formData.experience,
      });

      if (response.success) {
        toast.success("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          occupation: "",
          experience: "",
          availability: "",
          interests: "",
        });
      } else {
        toast.error("Failed to submit application. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-300 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-emerald-100 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
              🧑‍🤝‍🧑 Join Our Team
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                Become a Volunteer
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Make a difference in your community by joining our team of
              dedicated volunteers. Share your skills, learn new ones, and help
              create lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Volunteer Opportunities
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from various roles that match your skills and interests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div
                key={index}
                onClick={() => setSelectedOpportunity(opportunity.title)}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 cursor-pointer ${
                  selectedOpportunity === opportunity.title
                    ? "border-emerald-500"
                    : "border-slate-100"
                }`}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg mb-4">
                    {opportunity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {opportunity.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {opportunity.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{opportunity.time}</span>
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{opportunity.location}</span>
                    </div>
                    <div className="text-slate-500 text-sm">
                      <span className="font-medium">Requirements:</span>{" "}
                      {opportunity.requirements}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Volunteer Application
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-slate-700 mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="18"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                    placeholder="25"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium text-slate-700 mb-2">
                  Current Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                  placeholder="Software Engineer"
                />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                  Relevant Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                  placeholder="Tell us about your relevant experience..."
                ></textarea>
              </div>
              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-slate-700 mb-2">
                  Availability
                </label>
                <textarea
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                  placeholder="When are you available to volunteer? (e.g., Weekends, Evenings, etc.)"
                ></textarea>
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-slate-700 mb-2">
                  Areas of Interest
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-400"
                  placeholder="What areas are you interested in volunteering for?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Benefits of Volunteering
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our team and experience the rewards of making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Skill Development",
                description:
                  "Learn new skills and gain valuable experience in various fields",
                icon: <GraduationCap className="w-8 h-8" />,
              },
              {
                title: "Community Impact",
                description:
                  "Make a direct impact on the lives of those in need",
                icon: <Heart className="w-8 h-8" />,
              },
              {
                title: "Networking",
                description:
                  "Connect with like-minded individuals and professionals",
                icon: <Users className="w-8 h-8" />,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white shadow-lg mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
