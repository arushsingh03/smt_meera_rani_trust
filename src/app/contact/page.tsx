"use client";

import { Mail, MapPin, Phone, User, Award, Heart, Building2, Users, Clock, MapPinned } from "lucide-react";
import { useState } from "react";
import { sendContactEmail } from "@/utils/emailjs";
import { toast } from "react-hot-toast";

interface FormData {
  phone: string | number | readonly string[] | undefined;
  subject: string | number | readonly string[] | undefined;
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await sendContactEmail({
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      if (response.success) {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          phone: "",
          subject: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      title: "Visit Our Office",
      description: "Located in the heart of Kanpur for easy accessibility",
      details:
        "102- Murli Niwas, \n 851 - Lakhanpur Vikas Nagar,\n Kanpur Nagar, Uttar Pradesh, 208024, India",
      icon: <MapPin className="w-5 h-5" />,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      title: "Call Us Directly",
      description: "Speak with our team for immediate assistance",
      details: "+91 9838678594",
      icon: <Phone className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Email Us",
      description: "Send us your queries and we'll respond promptly",
      details: "meera_oraganisation@\nrediffmail.com",
      icon: <Mail className="w-5 h-5" />,
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      title: "Key Contacts",
      description: "Reach out to our leadership team directly",
      details: "Ajay Khanna (Secretary)\nDr. A. K. Srivastava (President)",
      icon: <User className="w-5 h-5" />,
      gradient: "from-teal-500 to-emerald-500",
      bgGradient: "from-teal-50 to-emerald-50",
    },
  ];

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
              <Mail className="w-5 h-5" />
              <span>Get in Touch</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                Contact Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Have questions about our programs or want to get involved? We&apos;d
              love to hear from you. Reach out to us using any of the methods
              below.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: "24/7",
                  label: "Support Available",
                  icon: <Clock className="w-6 h-6" />,
                  bgColor: "bg-white/20",
                  borderColor: "border-white/30",
                },
                {
                  number: "3",
                  label: "Office Locations",
                  icon: <MapPin className="w-6 h-6" />,
                  bgColor: "bg-orange-500/20",
                  borderColor: "border-orange-300/40",
                },
                {
                  number: "1L+",
                  label: "Lives Impacted",
                  icon: <Heart className="w-6 h-6" />,
                  bgColor: "bg-blue-500/20",
                  borderColor: "border-blue-300/40",
                },
                {
                  number: "15+",
                  label: "Years of Service",
                  icon: <Award className="w-6 h-6" />,
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

      {/* Contact Information Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Ways to Reach Us
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Multiple ways to connect with our team and get the support you
              need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden h-full"
              >
                {/* Header Section */}
                <div
                  className={`relative h-24 bg-gradient-to-br ${info.bgGradient} flex items-center justify-center`}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center text-white text-xl shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {info.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                    {info.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {info.description}
                  </p>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-slate-400 font-medium break-words text-sm">
                      {info.details}
                    </p>
                  </div>

                  {/* Action Line */}
                  <div className="mt-4">
                    <div
                      className={`w-12 h-1 bg-gradient-to-r ${info.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - FIXED */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Send Us a Message
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Have a question or want to get involved? We&apos;d love to hear from
              you
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-600/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-400 mb-2 "
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-500"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-500"
                    placeholder="How can we help?"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-slate-900 placeholder:text-slate-500"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Find Our Location
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Visit us at our office in Kanpur for face-to-face consultations
              and meetings
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.744499901618!2d80.2826965!3d26.4961702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c39ecdaf89d45%3A0x68dfdaed99d8eead!2sMurli%20niwas%20apartment!5e0!3m2!1sen!2sin!4v1747649438814!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="p-8 bg-gradient-to-r from-emerald-50 to-teal-50">
              <div className="flex items-center justify-center space-x-6">
                <div className="flex items-center space-x-2 text-slate-600">
                  <MapPinned className="w-5 h-5 text-emerald-600" />
                  <span className="font-medium">Exact location may vary</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span className="font-medium">
                    Call for precise directions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-emerald-100 leading-relaxed">
              Your generous donations help us continue our work in providing
              healthcare and education to underserved communities. Join our
              mission today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/donate"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-10 py-4 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Donate Now
              </a>
              <a
                href="/volunteer"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300 font-bold text-lg"
              >
                Volunteer With Us
              </a>
              <a
                href="/programs"
                className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300 font-bold text-lg"
              >
                View Programs
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-emerald-200 text-base mb-4">
                Trusted by communities • 80G & 12A Certified • FCRA Approved
              </p>
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-4">
                <div className="flex items-center space-x-2 text-white">
                  <Award className="w-5 h-5" />
                  <span className="text-base">25+ Years</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Heart className="w-5 h-5" />
                  <span className="text-base">1L+ Lives</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Building2 className="w-5 h-5" />
                  <span className="text-base">10K+ Camps</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Users className="w-5 h-5" />
                  <span className="text-base">500+ Volunteers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
