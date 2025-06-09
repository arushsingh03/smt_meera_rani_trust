import Image from "next/image";

const programs = [
  {
    title: "School Health Program",
    description:
      "Children are the backbone of the nation. Since 1998, a Mobile Medical Team has been conducting comprehensive health check-ups for students from Nursery to Degree College (around 30,000 annually) in government and private institutions. The program includes regular check-ups, health cards, prompt treatment, follow-ups, and focuses on issues related to teeth, eyes, ears, nose, throat, and overall physical and mental health.",
    image: "/program1.avif",
    impact: "500+ students supported annually",
    icon: "🎓",
    category: "Education & Health",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Rural Health Program",
    description:
      "In June 2006, the U.P. Health Systems Development Project assigned our NGO to serve nine villages in Shivrajpur Block, Bilhour Tehsil, Kanpur Nagar. The goal is to provide preventive healthcare to underserved women, children, and the poor in remote areas. Services include antenatal and postnatal care, immunization, and health education for 1,106 families (6,292 people) to reduce maternal and infant mortality.",
    image: "/program2.avif",
    impact: "1000+ health camps",
    icon: "🏘️",
    category: "Rural Healthcare",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    title: "General Public Health Program",
    description:
      "We are conducting many Health Camps such as School/College/Institution Health Camps, Public Health Camps, Blood Donation Camps, Pathology Camps, Vaccination Camps, etc. During these camps, expert doctors provide complete medical check-ups for HIV-AIDS, cancer, heart diseases, and other fatal and chronic illnesses. These camps play a vital role in early detection, timely treatment, and raising health awareness in the community.",
    image: "/program5.avif",
    impact: "10,000+ lives healed by health camps",
    icon: "🏥",
    category: "Public Health",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    title: "Industrial Health Program",
    description:
      'Health Check-up Programme started by the organization during 2002 for the staff and workers of the factory. A Camp for the factory workers was organized in April, 2006 under the banner of "Ranbaxy Laboratories Ltd." Urology Division, Gurgaon (Haryana), a renowned pharmaceutical company.',
    image: "/program3.avif",
    impact: "100+ annual industrial checkups",
    icon: "🏭",
    category: "Occupational Health",
    gradient: "from-purple-500 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50",
  },
  {
    title: "Leprosy Program",
    description:
      "Our NGO also worked in the field of Leprosy Project. It continues to be a great social and Public Health Problem because of some reasons. It is a chronic infectious disease. The fear of Leprosy is without parallel, it is mainly due to the deformities and dis-figuration on human health caused by the disease.",
    image: "/program4.avif",
    impact: "10+ villages supported",
    icon: "🤝",
    category: "Disease Control",
    gradient: "from-teal-500 to-emerald-500",
    bgGradient: "from-teal-50 to-emerald-50",
  },
  {
    title: "AIDS Awareness Program",
    description:
      "Camps in Kanpur Block educated people about AIDS causes and prevention. Through road shows and village meetings, the campaign raised awareness, reduced stigma, and promoted safe practices, empowering communities to protect themselves and their families, improving health outcomes significantly.",
    image: "/program6.jpg",
    impact: "5,000+ educated on AIDS awareness",
    icon: "📢",
    category: "Health Education",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50",
  },
];

export default function Programs() {
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
              🌟 Transformative Healthcare Programs
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                Our Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Discover our comprehensive range of initiatives designed to create
              lasting positive change in communities through healthcare,
              education, and sustainable development.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { number: "6", label: "Active Programs", icon: "🎯" },
                { number: "25+", label: "Years Experience", icon: "⏰" },
                { number: "1L+", label: "Lives Impacted", icon: "❤️" },
                { number: "500+", label: "Villages Served", icon: "🏘️" },
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

      {/* Programs Grid */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Healthcare Programs
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each program is designed with care to address specific community
              needs and create sustainable impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-90 z-10`}
                  ></div>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div
                      className={`inline-flex items-center space-x-2 bg-gradient-to-r ${program.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                    >
                      <span>{program.icon}</span>
                      <span>{program.category}</span>
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-2 rounded-xl text-sm font-bold shadow-lg">
                      {program.impact}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${program.gradient} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}
                    >
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900">
                      {program.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700">
                    {program.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-16 h-1 bg-gradient-to-r ${program.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                    ></div>
                    <button
                      className={`text-transparent bg-clip-text bg-gradient-to-r ${program.gradient} font-semibold hover:underline transition-all duration-300`}
                    >
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-orange-400 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Program Impact Overview
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our programs have created measurable, lasting change across
              communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Healthcare Access",
                description:
                  "Providing comprehensive medical services to underserved communities",
                stats: [
                  "10,000+ Health Camps",
                  "1L+ Lives Impacted",
                  "500+ Villages Served",
                ],
                icon: "🏥",
                gradient: "from-emerald-400 to-teal-400",
              },
              {
                title: "Disease Prevention",
                description:
                  "Early detection and prevention programs for better health outcomes",
                stats: [
                  "30,000+ Annual Checkups",
                  "5,000+ AIDS Awareness",
                  "1,000+ Rural Camps",
                ],
                icon: "🛡️",
                gradient: "from-orange-400 to-amber-400",
              },
              {
                title: "Community Development",
                description:
                  "Building stronger, healthier communities through sustainable programs",
                stats: [
                  "25+ Years Service",
                  "6 Major Programs",
                  "100+ Industrial Checkups",
                ],
                icon: "🌱",
                gradient: "from-blue-400 to-cyan-400",
              },
            ].map((impact, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-slate-500/50 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${impact.gradient} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-xl`}
                >
                  {impact.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {impact.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {impact.description}
                </p>
                <ul className="space-y-2">
                  {impact.stats.map((stat, statIndex) => (
                    <li
                      key={statIndex}
                      className="flex items-center space-x-3 text-slate-300"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${impact.gradient} rounded-full`}
                      ></div>
                      <span>{stat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
              Want to Support Our Programs?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-emerald-100 leading-relaxed">
              Join us in our mission to create positive change. Your support can
              make a real difference in transforming lives and building
              healthier communities.
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
              <p className="text-emerald-200 text-sm mb-4">
                Trusted by communities • 80G & 12A Certified • FCRA Approved
              </p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                <span className="text-xs">🏆 25+ Years</span>
                <span className="text-xs">❤️ 1L+ Lives</span>
                <span className="text-xs">🏥 10K+ Camps</span>
                <span className="text-xs">👥 500+ Volunteers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
