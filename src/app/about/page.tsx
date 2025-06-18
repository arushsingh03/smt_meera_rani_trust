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
  Globe,
  Heart,
  Award,
  Handshake,
  Star,
  GraduationCap,
  TrendingUp,
  Building,
  Package,
  Briefcase,
  Settings,
  Factory,
  Sparkles,
  Link,
  Car,
  Cookie,
  Construction,
  Landmark as BuildingIcon,
  Eye,
  Target,
} from "lucide-react";
import Image from "next/image";

const donors = [
  {
    name: "All India womens Conference Kanpur",
    icon: <Users className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Sah Aziz Dharmarth Hospital Kanpur",
    icon: <Building2 className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Ghadi Detergent Pvt. Ltd. Kanpur",
    icon: <Package className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Gopal Das Sahab Dayal Sons, Kanpur",
    icon: <Building className="w-5 h-5" />,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Shivam Masala Pvt. Ltd. Kanpur",
    icon: <Package className="w-5 h-5" />,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Sapna Trading Company Kanpur",
    icon: <Package className="w-5 h-5" />,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Zaz Tannery Kanpur",
    icon: <Briefcase className="w-5 h-5" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Inner Wheel Club, Kanpur",
    icon: <Settings className="w-5 h-5" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "J.S. International Kanpur",
    icon: <Globe className="w-5 h-5" />,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Super Tannery (INDIA) Ltd. Kanpur",
    icon: <Factory className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Calico Trends Kanpur",
    icon: <Sparkles className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Lex International Pvt. Ltd. Kanpur",
    icon: <Link className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Maruti Car",
    icon: <Car className="w-5 h-5" />,
    gradient: "from-red-500 to-rose-500",
  },
  {
    name: "Parle Biscuit Pvt. Ltd.",
    icon: <Cookie className="w-5 h-5" />,
    gradient: "from-red-500 to-rose-500",
  },
  {
    name: "G P L Industries",
    icon: <Construction className="w-5 h-5" />,
    gradient: "from-red-500 to-rose-500",
  },
];

const organizationDetails = [
  {
    label: "Name of the NGO",
    value: "Smt. Meera Rani Samajik Utthan Sansthan",
    icon: <BuildingIcon className="w-5 h-5" />,
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
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Star className="w-5 h-5 mr-2" />
              <span>Established in 1998</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                About Our Trust
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Committed to improving lives through healthcare, education, and
              community development since 1998.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: "25+",
                  label: "Years of Service",
                  icon: <Globe className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-white/25 via-white/10 to-white/5",
                  borderGradient: "from-white/40 via-white/20 to-white/10",
                },
                {
                  number: "1000+",
                  label: "Projects Completed",
                  icon: <Award className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-orange-400/25 via-orange-400/10 to-orange-400/5",
                  borderGradient: "from-orange-300/40 via-orange-300/20 to-orange-300/10",
                },
                {
                  number: "1L+",
                  label: "Lives Transformed",
                  icon: <Heart className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-pink-400/25 via-pink-400/10 to-pink-400/5",
                  borderGradient: "from-pink-300/40 via-pink-300/20 to-pink-300/10",
                },
                {
                  number: "50+",
                  label: "Team Members",
                  icon: <Users className="w-6 h-6" />,
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

      {/* Organization Details */}
      <section className="py-24 bg-white">
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
                    src="/logo.png"
                    alt="logo"
                    width={80}
                    height={80}
                    className="w-full h-full rounded-full"
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
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
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
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                Our mission is to uplift the weaker sections of society through
                holistic social, cultural, educational, and mental development
                initiatives. We are committed to enhancing community health by
                organizing regular mobile health services and medical camps,
                with a special focus on women&apos;s health, eye care, and
                dental hygiene. Prioritizing the well-being of women and
                children, we conduct targeted health awareness programs,
                vaccination drives, and pathology camps to prevent diseases like
                Hepatitis-B. Through lectures, seminars, and workshops in
                schools, colleges, and public spaces, we aim to promote
                preventive healthcare and general well-being. By integrating
                education, healthcare, and awareness, we strive to empower
                underprivileged communities and foster long-lasting social
                impact.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8" />
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
      <section className="py-24 bg-white">
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
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <GraduationCap className="w-8 h-8" />
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <TrendingUp className="w-8 h-8" />
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
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full blur-2xl"></div>
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
                    className={`w-12 h-12 bg-gradient-to-r ${donor.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
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
            <p className="text-emerald-200 text-base mb-4">
              Trusted partnerships • Transparent operations • Community focused
            </p>
            <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-4">
              <div className="flex items-center space-x-2 text-white">
                <Handshake className="w-5 h-5" />
                <span className="text-base">15+ Partners</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Award className="w-5 h-5" />
                <span className="text-base">25+ Years Trust</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-5 h-5" />
                <span className="text-base">Proven Impact</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Users className="w-5 h-5" />
                <span className="text-base">Community Recognition</span>
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
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-emerald-100 leading-relaxed">
              Together, we can create meaningful change. Partner with us to
              transform communities and build a healthier, more sustainable
              future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/volunteer"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-10 py-4 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Become a Volunteer
              </a>
              <a
                href="/donate"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300 font-bold text-lg"
              >
                Support Our Cause
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300 font-bold text-lg"
              >
                Get in Touch
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-emerald-200 text-base mb-4">
                Trusted by communities • 80G & 12A Certified • FCRA Approved
              </p>
              <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-4">
                <div className="flex items-center space-x-2 text-white">
                  <Handshake className="w-5 h-5" />
                  <span className="text-base">15+ Partners</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Award className="w-5 h-5" />
                  <span className="text-base">25+ Years Trust</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Star className="w-5 h-5" />
                  <span className="text-base">Proven Impact</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Users className="w-5 h-5" />
                  <span className="text-base">Community Recognition</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
