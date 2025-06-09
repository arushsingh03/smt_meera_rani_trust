import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-60 h-60 bg-orange-400 rounded-full blur-3xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-teal-400 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  SMT Meera Rani
                </h3>
                <p className="text-sm text-emerald-200">
                  Samajik Utthan Sansthan
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              Empowering communities through comprehensive healthcare,
              education, and sustainable development programs that create
              lasting positive change for over 25 years.
            </p>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-xl p-4 border border-emerald-500/20">
              <p className="text-emerald-200 text-sm italic">
                &quot;Building healthier communities, one life at a time&quot;
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              {[
                {
                  icon: <Facebook className="w-5 h-5" />,
                  name: "Facebook",
                  color: "hover:bg-blue-600",
                  href: "https://www.facebook.com/p/Smt-Meera-Rani-Samajik-Utthan-Sansthan-100071723495352/?_rdr",
                },
                {
                  icon: <Instagram className="w-5 h-5" />,
                  name: "Instagram",
                  color: "hover:bg-pink-600",
                  href: "https://www.instagram.com/smrsus/",
                },
                {
                  icon: <Linkedin className="w-5 h-5" />,
                  name: "LinkedIn",
                  color: "hover:bg-blue-700",
                  href: "https://in.linkedin.com/in/ajay-khanna-46ba1920a",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Our Programs", path: "/programs" },
                { name: "Gallery", path: "/gallery" },
                { name: "Certifications", path: "/certifications" },
                { name: "About Us", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Volunteer", path: "/volunteer" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="group flex items-center space-x-3 text-slate-300 hover:text-emerald-300 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="group-hover:text-white">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Donate Button */}
            <div className="mt-8">
              <Link
                href="/donate"
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-3 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm"
              >
                💝 Support Our Cause
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Address",
                  value:
                    "102, Murli Niwas, 851, Lakhanpur Rd, Vikas Nagar, Kanpur, Uttar Pradesh 208024",
                  gradient: "from-red-400 to-pink-400",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Phone",
                  value: "+91 98386 78594",
                  gradient: "from-green-400 to-emerald-400",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                  value: "meera_oraganisation@rediffmail.com",
                  gradient: "from-blue-400 to-cyan-400",
                },
              ].map((contact, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${contact.gradient} rounded-lg flex items-center justify-center text-white text-sm shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mt-0.5`}
                  >
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs text-emerald-300 font-medium uppercase tracking-wide">
                      {contact.label}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                      {contact.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                &copy; {new Date().getFullYear()} SMT Meera Rani Samajik Utthan
                Sansthan. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Registered NGO | 80G & 12A Certified | FCRA Approved
              </p>
            </div>

            <div className="flex items-center space-x-6 text-xs text-slate-400">
              <span className="hover:text-emerald-300 transition-colors">
                Privacy Policy
              </span>
              <span className="hover:text-emerald-300 transition-colors">
                Terms of Service
              </span>
              <span className="hover:text-emerald-300 transition-colors">
                Financial Transparency
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
