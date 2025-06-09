import {
  Building2,
  Flag,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Pin,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";

const donors = [
  {
    name: "All India womens Conference Kanpur",
    icon: "👥",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Sah Aziz Dharmarth Hospital Kanpur",
    icon: "🏥",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Ghadi Detergent Pvt. Ltd. Kanpur",
    icon: "🧼",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Gopal Das Sahab Dayal Sons, Kanpur",
    icon: "🏢",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Shivam Masala Pvt. Ltd. Kanpur",
    icon: "🌶️",
    gradient: "from-red-500 to-pink-500",
  },
  {
    name: "Sapna Trading Company Kanpur",
    icon: "📦",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    name: "Zaz Tannery Kanpur",
    icon: "🧳",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Inner Wheel Club, Kanpur",
    icon: "⚙️",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "J.S. International Kanpur",
    icon: "🌍",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Super Tannery (INDIA) Ltd. Kanpur",
    icon: "🏭",
    gradient: "from-pink-500 to-red-500",
  },
  {
    name: "Calico Trends Kanpur",
    icon: "✨",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Lex International Pvt. Ltd. Kanpur",
    icon: "🔗",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Maruti Car",
    icon: "🚗",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Parle Biscuit Pvt. Ltd.",
    icon: "🍪",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "G P L Industries",
    icon: "🏗️",
    gradient: "from-teal-500 to-emerald-500",
  },
];

const organizationDetails = [
  {
    label: "Name of the NGO",
    value: "Smt. Meera Rani Samajik Utthan Sansthan",
    icon: "🏛️",
  },
  {
    label: "President",
    value: "Dr. A. K. Srivastava",
    icon: <User className="w-5 h-5" />,
  },
  {
    label: "Secretary (Contact Person)",
    value: "Ajay Khanna",
    icon: <Users className="w-5 h-5" />,
  },
  {
    label: "Postal Address",
    value: "102- Murli Niwas, 851 - Lakhanpur, Vikas Nagar",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    label: "Pin Code",
    value: "208024",
    icon: <Pin className="w-5 h-5" />,
  },
  {
    label: "District",
    value: "Kanpur Nagar",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    label: "State / Province",
    value: "Uttar Pradesh",
    icon: <Landmark className="w-5 h-5" />,
  },
  {
    label: "Country",
    value: "India",
    icon: <Flag className="w-5 h-5" />,
  },
  {
    label: "Phone No.",
    value: "+91 9838678594",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    label: "E-mail",
    value: "meera_oraganisation@rediffmail.com",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function About() {
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
              🌟 Empowering Communities Since 1998
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                About Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Learn about our mission, vision, and the dedicated team behind our
              social impact initiatives transforming lives across communities.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: "25+", label: "Years of Service", icon: "⏰" },
                { number: "1L+", label: "Lives Transformed", icon: "❤️" },
                { number: "500+", label: "Communities Served", icon: "🏘️" },
                { number: "15+", label: "Trusted Partners", icon: "🤝" },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
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

      {/* Organization Details */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Organization Details
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get to know the foundation and leadership behind our impactful
              work
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white text-3xl mb-4 mx-auto">
                  <Image
                    src="/logo.avif"
                    alt="logo"
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Smt. Meera Rani Samajik Utthan Sansthan
                </h3>
                <p className="text-emerald-100">
                  Transforming Lives Through Service
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-slate-50">
              {organizationDetails.slice(1).map((detail, index) => (
                <div
                  key={index}
                  className="bg-white p-6 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {detail.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                        {detail.label}
                      </h4>
                      <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Driving positive change through comprehensive community
              development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Our mission is to uplift the weaker sections of society through
                holistic social, cultural, educational, and mental development
                initiatives. We are committed to enhancing community health by
                organizing regular mobile health services and medical camps,
                with a special focus on women&apos;s health, eye care, and dental
                hygiene. Prioritizing the well-being of women and children, we
                conduct targeted health awareness programs, vaccination drives,
                and pathology camps to prevent diseases like Hepatitis-B.
                Through lectures, seminars, and workshops in schools, colleges,
                and public spaces, we aim to promote preventive healthcare and
                general well-being. By integrating education, healthcare, and
                awareness, we strive to empower underprivileged communities and
                foster long-lasting social impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  👁️
                </div>
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Social, cultural, Educational & Mental Development of the people
                belonging to the Weaker Section of the society. Mobile Health
                Services organized with special reference to Breast Cancer of
                Ladies, Testing of Eye-vision, and Dental Diseases for General
                Public. General public Medical Camps are organized specially for
                ladies and children. Organizing lectures and Seminars among
                students, General Public for health awareness. Conducting
                vaccination camps for Hepatitis-B and blood Pathology etc.
                Conducting medical camps for students in School/College/
                Institutions/ factories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Our Experience
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Two decades of dedicated service and continuous growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Training Partnership
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                From 2002, Amer Maritime Training Academy (Approved by D.G.
                Shipping Govt. of India), Arya Nagar, Kanpur has given us
                responsibility to give First-Aid Training to their students.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                <span className="text-blue-600 font-semibold">Since 2002</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-slate-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl shadow-xl">
                  📈
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Growth Journey
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg mb-6">
                Over the years, we have grown from a small local initiative to a
                recognized organization making significant impact across
                multiple sectors. Our journey has been marked by numerous
                success stories and the trust of the communities we serve.
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                <span className="text-purple-600 font-semibold">
                  Continuous Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Esteemed Donors */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Esteemed Donors
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Grateful to our trusted partners who make our mission possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donors.map((donor, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${donor.gradient} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {donor.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-white group-hover:text-emerald-100 transition-colors duration-300">
                      {donor.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <p className="text-emerald-200 text-sm mb-4">
              Trusted partnerships • Transparent operations • Community focused
            </p>
            <div className="flex justify-center items-center space-x-8 text-white/60">
              <span className="text-xs">🤝 15+ Partners</span>
              <span className="text-xs">💎 25+ Years Trust</span>
              <span className="text-xs">🏆 Proven Impact</span>
              <span className="text-xs">🌟 Community Recognition</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Join Our Mission
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 leading-relaxed">
              Together, we can create lasting positive change in our
              communities. Your support and involvement can make a real
              difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/volunteer"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-10 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                 Get Involved
              </a>
              <a
                href="/programs"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl hover:bg-white hover:text-slate-700 transition-all duration-300 font-bold text-lg"
              >
                 View Programs
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-slate-700 transition-all duration-300 font-bold text-lg"
              >
                 Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
