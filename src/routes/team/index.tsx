import { createFileRoute } from "@tanstack/react-router";
import Hero from "../../components/hero";

export const Route = createFileRoute("/team/")({
  component: Teams,
});

function Teams() {
  return (
    <>
      <Hero
        title="Meet Our Team"
        subtitle="Experts in Business, Project Management and Financial Technology."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-white-800 mb-4"
              data-aos="fade-up"
            >
              Leadership Team
            </h2>
            <div
              className="w-20 h-1 bg-black-600 mx-auto mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            ></div>
            <p
              className="text-xl text-white-600 max-w-3xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our Team composition includes Experts in Business, Project
              Management and IT (focused on Financial Technology).
            </p>
          </div>

          <div
            id="stephen"
            className="max-w-5xl mx-auto mb-20 bg-white rounded-xl shadow-md overflow-hidden team-member transition duration-300"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="http://static.photos/people/600x600/1"
                  alt="Stephen Mutusva"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Chief Executive and Co-Founder
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Stephen Mutusva
                </h3>
                <p className="text-black-600 mb-6">
                  Steve's career has always been characterised by a passion for
                  IT and a need to continuously meet new challenges whilst
                  helping others. He believes in his team members and work
                  colleagues alike. Steve is an entrepreneur at heart and enjoys
                  learning the principles which can then be applied along the
                  way. This gives him an integrated view of the business and how
                  things are related to each other.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-black-800 mb-3">
                    Steve has worked on:
                  </h4>
                  <ul className="list-disc pl-5 text-black-600 space-y-2">
                    <li>
                      Analysing situations and turning information into
                      strategy.
                    </li>
                    <li>
                      Driving strategic initiatives for business to bring the
                      best out of the technology.
                    </li>
                    <li>Consulting on strategic and transformation ideas.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-black-800 mb-3">
                    Key Highlights:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-white-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      National Payment Systems
                    </span>
                    <span className="bg-gray-100 text-white-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Card Payment Solutions
                    </span>
                    <span className="bg-gray-100 text-white-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Currency Rebasing
                    </span>
                    <span className="bg-gray-100 text-white-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Claims Process Transformation
                    </span>
                    <span className="bg-gray-100 text-white-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Banking Models
                    </span>
                    <span className="bg-gray-100 text-white-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      System Transformation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="tendai"
            className="max-w-5xl mx-auto mb-20 bg-white rounded-xl shadow-md overflow-hidden team-member transition duration-300"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="http://static.photos/people/600x600/2"
                  alt="Tendai Nyamarebvu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Finance Director
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Tendai Nyamarebvu
                </h3>
                <p className="text-black-600 mb-6">
                  Tendai is a Associate Chartered Management Accountant having
                  completed his studies in 2017 through the Chartered Institute
                  of Management Accountants (CIMA). He is a graduate from Solusi
                  University in Zimbabwe where he acquired a Bachelor of
                  Business Administration in Accounting degree in 2004.
                </p>
                <p className="text-black-600">
                  He moved to South Africa in 2006 and worked for a financial
                  services company for 2 years before joining a start-up
                  biotechnology company in 2008 where he held various roles in
                  management/operations and accounting. His hobbies include
                  cooking traditional food.
                </p>
              </div>
            </div>
          </div>

          <div
            id="shephard"
            className="max-w-5xl mx-auto mb-20 bg-white rounded-xl shadow-md overflow-hidden team-member transition duration-300"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="http://static.photos/people/600x600/3"
                  alt="Shephard Matsika"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Legal Secretary
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Shephard Matsika
                </h3>
                <p className="text-black-600">
                  Shephard is a registered legal practitioner with 16 years'
                  experience and is currently the managing Partner of Matsika
                  Legal Practitioners, based in Harare with prices in Mutare as
                  well. Shepherd's practice is mainly focused on corporate and
                  commercial law, banking law and real estate. He is also a
                  director in a number if entities that are in civil
                  construction, telecommunication infrastructure, and logistics.
                  Shephard oversees the legal requirements of Strait Payments.
                </p>
              </div>
            </div>
          </div>

          <div
            id="trust"
            className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden team-member transition duration-300"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src="http://static.photos/people/600x600/4"
                  alt="Trust Munyuki"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Delivery Executive
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Trust Munyuki
                </h3>
                <p className="text-black-600 mb-6">
                  Trust is a Global MBA candidate at Kelley School of
                  Business(USA) & Alliance Manchester Business School (UK),
                  focusing on Fintech Innovation and Developing global leaders.
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-black-800 mb-3">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Management Consulting
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Digital Payment Strategy
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Project Management
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Solution Architecture
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Business Analysis
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Product Development
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      FinTech
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Mobile Money
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Block Chain Technology
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      DevOps
                    </span>
                    <span className="bg-white-100 text-black-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      Open Banking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
