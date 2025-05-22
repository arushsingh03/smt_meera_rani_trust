import Image from 'next/image';

const programs = [
  {
    title: 'School Health Program',
    description: 'Children are the backbone of the nation. Since 1998, a Mobile Medical Team has been conducting comprehensive health check-ups for students from Nursery to Degree College (around 30,000 annually) in government and private institutions. The program includes regular check-ups, health cards, prompt treatment, follow-ups, and focuses on issues related to teeth, eyes, ears, nose, throat, and overall physical and mental health.',
    image: '/program1.avif',
    impact: '500+ students supported annually',
  },
  {
    title: 'Rural Health Program',
    description: 'In June 2006, the U.P. Health Systems Development Project assigned our NGO to serve nine villages in Shivrajpur Block, Bilhour Tehsil, Kanpur Nagar. The goal is to provide preventive healthcare to underserved women, children, and the poor in remote areas. Services include antenatal and postnatal care, immunization, and health education for 1,106 families (6,292 people) to reduce maternal and infant mortality.',
    image: '/program2.avif',
    impact: '1000+ health camps',
  },
  {
    title: 'General Public Health Program',
    description: 'We are conducting many Health Camps such as School/College/Institution Health Camps, Public Health Camps, Blood Donation Camps, Pathology Camps, Vaccination Camps, etc. During these camps, expert doctors provide complete medical check-ups for HIV-AIDS, cancer, heart diseases, and other fatal and chronic illnesses. These camps play a vital role in early detection, timely treatment, and raising health awareness in the community.',
    image: '/program5.avif',
    impact: '10,000+ lives healed by health camps.',
  },
  {
    title: 'Industrial Health Program',
    description: 'Health Check-up Programme started by the organization during 2002 for the staff and workers of the factory. A Camp for the factory workers was organized in April, 2006 under the banner of "Ranbaxy Loboratories Ltd." Urology Division, Gurgaon (Haryana), a renowned pharmaceutical company.',
    image: '/program3.avif',
    impact: '100+ annual industrial checkups',
  },
  {
    title: 'Leprosy Program',
    description: 'Our NGO also worked in the field of Leprosy Project. It continues to be a great social and Public Health Problem because of some reasons. It is a chronic infectious disease. The fear of Leprosy is without parallel, it is mainly due to the deformities and dis-figuration on human health caused by the disease.',
    image: '/program4.avif',
    impact: '10+ villages supported',
  },
  {
    title: 'Aids Awareness Program',
    description: 'Camps in Kanpur Block educated people about AIDS causes and prevention. Through road shows and village meetings, the campaign raised awareness, reduced stigma, and promoted safe practices, empowering communities to protect themselves and their families, improving health outcomes significantly.',
    image: '/program6.jpg',
    impact: '5,000+ educated on AIDS awareness.',
  },
];

export default function Programs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl max-w-3xl">
            Discover our comprehensive range of initiatives designed to create lasting positive change in communities.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="text-sm text-blue-600 font-medium">
                    Impact: {program.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Support Our Programs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in our mission to create positive change. Your support can make a real difference.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
} 