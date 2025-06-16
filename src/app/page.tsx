import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Stethoscope,
  BookOpen,
  Handshake,
  Heart,
  Building2,
  Users,
  Trophy,
} from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-teal-800/70 to-emerald-700/60 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse delay-300"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Star className="w-4 h-4 mr-2" /> Transforming Lives Since 1999
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                Healing Communities,
              </span>
              <br />
              <span className="text-white">Building Hope</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl leading-relaxed text-emerald-50">
              SMT Meera Rani Samajik Utthan Sansthan empowers communities
              through comprehensive healthcare, education, and sustainable
              development programs that create lasting positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programs"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Impact
              </Link>
              <Link
                href="/donate"
                className="border-2 border-emerald-300 text-emerald-100 px-8 py-4 rounded-xl hover:bg-emerald-300 hover:text-emerald-900 transition-all duration-300 font-semibold"
              >
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Our Key Programs
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive initiatives designed to address the fundamental
              needs of our communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare & Wellness",
                description:
                  "Providing comprehensive healthcare services, mobile clinics, and preventive care programs to ensure everyone has access to quality medical treatment.",
                icon: <Stethoscope className="w-8 h-8" />,
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-500/10 to-teal-500/10",
              },
              {
                title: "Education & Skills",
                description:
                  "Empowering individuals through quality education, vocational training, and skill development programs that open doors to better opportunities.",
                icon: <BookOpen className="w-8 h-8" />,
                gradient: "from-orange-500 to-amber-500",
                bgGradient: "from-orange-500/10 to-amber-500/10",
              },
              {
                title: "Community Development",
                description:
                  "Building resilient communities through infrastructure development, women's empowerment, and sustainable livelihood programs.",
                icon: <Handshake className="w-8 h-8" />,
                gradient: "from-teal-500 to-cyan-500",
                bgGradient: "from-teal-500/10 to-cyan-500/10",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-emerald-100 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div className="relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${program.gradient} text-white text-2xl mb-6 shadow-lg`}
                  >
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-slate-900">
                    {program.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700">
                    {program.description}
                  </p>
                  <div
                    className={`mt-6 w-12 h-1 bg-gradient-to-r ${program.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Measuring success through the lives we&apos;ve touched and
              communities we&apos;ve transformed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "1,00,000+",
                label: "Lives Impacted",
                icon: <Heart className="w-6 h-6 text-white" />,
                bgColor: "bg-white/20",
                borderColor: "border-white/30",
              },
              {
                number: "10,000+",
                label: "Health Camps Conducted",
                icon: <Building2 className="w-6 h-6 text-white" />,
                bgColor: "bg-orange-500/20",
                borderColor: "border-orange-300/40",
              },
              {
                number: "500+",
                label: "Active Volunteers",
                icon: <Users className="w-6 h-6 text-white" />,
                bgColor: "bg-blue-500/20",
                borderColor: "border-blue-300/40",
              },
              {
                number: "25+",
                label: "Years of Service",
                icon: <Trophy className="w-6 h-6 text-white" />,
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
                <div className="text-4xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200">
                  {stat.number}
                </div>
                <div className="text-sm text-emerald-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-emerald-100 leading-relaxed">
              Every contribution, every volunteer hour, every shared story helps
              us reach more communities and transform more lives. Join our
              mission today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/volunteer"
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-10 py-4 rounded-xl hover:from-orange-600 hover:to-orange-500 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Become a Volunteer
              </Link>
              <Link
                href="/donate"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300 font-bold text-lg"
              >
                Make a Donation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-emerald-700 transition-all duration-300 font-bold text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
