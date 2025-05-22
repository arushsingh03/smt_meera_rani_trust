import Image from "next/image";

const donors = [
  {
    name: "All India womens Conference Kanpur",
  },
  {
    name: "Sah Aziz Dharmarth Hospital Kanpur",
  },
  {
    name: "Ghadi Detergent Pvt. Ltd. Kanpur",
  },
  {
    name: "Gopal Das Sahab Dayal Sons, Kanpur",
  },
  {
    name: "Shivam Masala Pvt. Ltd. Kanpur",
  },
  {
    name: "Sapna Trading Company Kanpur",
  },
  {
    name: "Zaz Tannery Kanpur",
  },
  {
    name: "Inner Wheel Club, Kanpur",
  },
  {
    name: "J.S. International Kanpur",
  },
  {
    name: "Super Tannery (INDIA) Ltd. Kanpur",
  },
  {
    name: "Calico Trends Kanpur",
  },
  {
    name: "Lex International Pvt. Ltd. Kanpur",
  },
  {
    name: "Maruti Car",
  },
  {
    name: "Parle Biscuit Pvt. Ltd.",
  },
  {
    name: "G P L Industries",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl">
            Learn about our mission, vision, and the dedicated team behind our
            social impact initiatives.
          </p>
        </div>
      </section>

      {/* NGO Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
              Smt. Meera Rani Samajik Utthan Sansthan
            </h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div>
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Name of the NGO</h3>
                    <p className="text-lg font-semibold text-blue-700">Smt. Meera Rani Samajik Utthan Sansthan</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">President</h3>
                    <p className="text-lg font-semibold">Dr. A. K. Srivastava</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Secretary (Contact Person)</h3>
                    <p className="text-lg font-semibold">Ajay Khanna</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Postal Address</h3>
                    <p className="text-lg font-semibold">102- Murli Niwas, 851 - Lakhanpur, Vikas Nagar</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Pin Code</h3>
                    <p className="text-lg font-semibold">208024</p>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">District</h3>
                    <p className="text-lg font-semibold">Kanpur Nagar</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">State / Province</h3>
                    <p className="text-lg font-semibold">Uttar Pradesh</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Country</h3>
                    <p className="text-lg font-semibold">India</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">Phone No.</h3>
                    <p className="text-lg font-semibold">+91 9838678594</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-gray-500 text-sm font-medium mb-1">E-mail</h3>
                    <p className="text-lg font-semibold">meera_oraganisation@rediffmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                Our mission is to uplift the weaker sections of society through
                holistic social, cultural, educational, and mental development
                initiatives. We are committed to enhancing community health by
                organizing regular mobile health services and medical camps,
                with a special focus on women's health, eye care, and dental
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
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-600">
              <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Vision</h2>
              <p className="text-gray-600 text-lg">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <h2 className="text-3xl font-bold mb-6 text-blue-600">Our Experience</h2>
            <p className="text-gray-600 text-lg mb-4">
              From 2002, Amer Maritime Training Academy (Approved by D.G.
              Shipping Govt. of India), Arya Nagar, Kanpur has given us
              responsibility to give First-Aid Training to their students.
            </p>
            <p className="text-gray-600 text-lg">
              Over the years, we have grown from a small local initiative to a
              recognized organization making significant impact across
              multiple sectors. Our journey has been marked by numerous
              success stories and the trust of the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Our Esteemed Donors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            Our Esteemed Donors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {donors.map((donor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border-t-2 border-blue-600"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-800">{donor.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Together, we can create lasting positive change in our communities.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>
    </div>
  );
}