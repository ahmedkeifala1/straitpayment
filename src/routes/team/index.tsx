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
              <div className="md:w-1/3"></div>
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
                      Analyzing situations and turning information into
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
              <div className="md:w-1/3"></div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Chief Financial & Digital Strategy Officer
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Tendai Nyamarebvu
                </h3>
                <p className="text-black-600 mb-6">
                  Tendai Nyamarebvu is a Chartered Global Management Accountant
                  (CGMA) and digital finance leader with more than 15 years of
                  experience driving financial strategy, operational excellence,
                  and large-scale business transformation across diverse
                  industries. He holds a Postgraduate Diploma in Management
                  Information Systems from the University of Cape Town,
                  complementing his financial expertise with strong technical
                  grounding in the systems that enable modern digital finance.
                </p>
                <p className="text-black-600">
                  Before joining Strait Payments Advisory, Tendai played a
                  central role in a major SAP S/4HANA implementation at a
                  multinational organisation, where he led the finance
                  workstream during post–go-live stabilisation. His
                  responsibilities included optimising financial processes,
                  enabling seamless digital adoption, and ensuring system-driven
                  efficiencies across multiple business units. His work
                  supported the transition to an integrated, real-time financial
                  environment strengthening financial controls, reporting, and
                  governance.
                </p>
                <p className="text-black-600">
                  Tendai’s career spans key sectors such as financial services,
                  biotechnology, and retail, giving him deep exposure to complex
                  financial ecosystems, regulatory environments, and
                  technology-enabled business models. This cross-industry
                  insight positions him uniquely at the intersection of
                  financial strategy and digital transformation. At Strait
                  Payments Advisory, Tendai leverages his expertise in financial
                  systems, data analytics, digital adoption, and strategic
                  planning to oversee the firm’s financial stewardship. He plays
                  a pivotal role in shaping sustainable growth pathways and
                  ensuring operational resilience as the company delivers
                  innovative, inclusive, and accessible cross-border payment
                  solutions across Africa and beyond.
                </p>
              </div>
            </div>
          </div>

          <div
            id="Prosper Kachidza"
            className="max-w-5xl mx-auto mb-20 bg-white rounded-xl shadow-md overflow-hidden team-member transition duration-300"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:w-1/3"></div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Chief Architect
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Prosper Kachidza
                </h3>
                <p className="text-black-600 mb-6">
                  Prosper Kachidza is a seasoned fintech entrepreneur and
                  digital payments specialist with more than two decades of
                  experience driving financial technology innovation across
                  Southern Africa. As the Founder and Managing Director of
                  eSwitch, a leading Zimbabwean fintech company, he has played a
                  pivotal role in developing digital payment solutions that
                  enhance financial inclusion and strengthen national
                  transaction ecosystems. Prosper has led major initiatives
                  spanning mobile money, digital wallets, and payment
                  interoperability. His expertise includes the design and
                  deployment of scalable payment infrastructures, forging
                  partnerships between financial institutions and technology
                  providers, and navigating regulatory frameworks across
                  emerging markets. He also serves as a Director at NECOR
                  Professional Services Limited, overseeing strategic technology
                  projects aimed at modernising financial services. Prosper
                  holds a Master’s degree in Information Systems Management and
                  is widely recognised for advancing secure, accessible, and
                  innovative digital payment systems across the region.
                </p>
              </div>
            </div>
          </div>

          <div
            id="Aiyappa Arun Chendira"
            className="max-w-5xl mx-auto mb-20 bg-white rounded-xl shadow-md overflow-hidden team-member transition duration-300"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:w-1/3"></div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Director of Digital Payments & Technology
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Aiyappa Arun Chendira
                </h3>
                <p className="text-black-600 mb-6">
                  Aiyappa Arun Chendira is an accomplished digital payments and
                  banking technology specialist with nearly 20 years of
                  experience delivering and managing fintech solutions across
                  India and Africa. He currently serves as Development Manager
                  at Standard Chartered Bank, leading digital transformation
                  projects centred on secure, scalable, and modern financial
                  services. Aiyappa’s background spans advisory consulting,
                  enterprise delivery, and product innovation. His earlier roles
                  include Advisory Consultant at IBM, where he led large-scale
                  digital initiatives, and Senior Product Consultant at CR2, a
                  global leader in digital and self-service banking platforms.
                  During his nine years at CR2, he deployed card switches,
                  planned ATM/POS rollouts, executed back-office integrations,
                  and led training programmes for financial institutions. His
                  international assignments cover South Africa, Kenya, Botswana,
                  Zambia, Ethiopia, Egypt, Jordan, and the United Kingdom.
                  Aiyappa holds a Global Certificate in Product Management and a
                  First Class Distinction degree in Electrical, Electronics &
                  Communications Engineering. He is a Certified SAFe® Agilist,
                  PSPO I, PSM I, IBM Design Thinking Practitioner, and PCI DSS
                  certified, with additional training in blockchain foundations.
                  Aiyappa is recognised for his practical expertise in digital
                  banking strategy, card issuing and acquiring systems, switch
                  configuration, secure payment technologies, and the
                  application of Agile methodologies in complex delivery
                  environments.
                </p>
              </div>
            </div>
          </div>

          <div
            id="Tafadzwa Munashe Shumba"
            className="max-w-5xl mx-auto mb-20 bg-white rounded-xl shadow-md overflow-hidden team-member transition duration-300"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:w-1/3"></div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Chief Integration & Payments Architecture Officer
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Tafadzwa Munashe Shumba
                </h3>
                <p className="text-black-600 mb-6">
                  Tafadzwa Munashe Shumba is a seasoned technology and financial
                  services professional with deep expertise in API architecture,
                  payment system integration, and digital financial services
                  design. As the Chief Executive Officer of Timomo Consulting, a
                  boutique advisory firm specialising in payments integration
                  and fintech transformation, he provides strategic consulting
                  services to leading financial institutions across Africa. His
                  work with Letshego Africa Holdings Limited has been
                  instrumental in enabling secure, seamless, and scalable
                  digital financial services across multiple markets. With more
                  than a decade of experience in fintech and telecommunications,
                  Tafadzwa has led major technology deployments focused on API
                  integrations, ISO 20022 migration, mobile financial services,
                  and real-time digital payment ecosystems. He is recognised for
                  designing scalable architectures that support instant
                  payments, card switching, and high-performance banking APIs
                  across diverse regulatory and technical environments. Tafadzwa
                  holds a Bachelor of Science (Honours) degree in Computer
                  Science from the National University of Science and Technology
                  in Zimbabwe. He further strengthened his professional
                  capabilities with industry-leading credentials including
                  Project Management Professional (PMP), Oracle Cloud
                  Infrastructure 2019 Cloud Operations Certified Associate, and
                  a specialised certification in EMV and Card Payment Systems
                  from KIIP in Estonia. With strong technical foundations in
                  database administration, real-time transaction processing, and
                  secure API development, Tafadzwa brings a rare combination of
                  hands-on engineering expertise and strategic systems design
                  capability. His proficiency with enterprise tools such as MS
                  SQL Server, Visio, and Excel complements his ability to
                  deliver modern, secure, and interoperable payment solutions
                  for banks, fintechs, and regional digital ecosystems.
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
              <div className="md:w-1/3"></div>
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
            id="Trust"
            className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden team-member transition duration-300"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:w-1/3"></div>
              <div className="p-8 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-black-600 font-semibold mb-1">
                  Chief Cybersecurity & Payments Risk Officer
                </div>
                <h3 className="text-2xl font-bold text-black-800 mb-4">
                  Trust Munyuki
                </h3>
                <p className="text-black-600 mb-6">
                  Trust Munyuki is a globally experienced technology and
                  financial services professional specialising in IT risk
                  management, cybersecurity, PCI-DSS compliance, and secure
                  digital payment systems. With more than 15 years of industry
                  experience, he has built an extensive track record of
                  architecting resilient payment infrastructures and
                  strengthening security frameworks across Africa, Europe, and
                  the Caribbean.
                </p>
                <p className="text-black-600 mb-6">
                  He currently serves as Manager of IT Core Banking Systems at
                  Cayman National in the Cayman Islands, where he leads payment
                  innovation, security enhancement, and regulatory compliance
                  initiatives aligned with global standards such as PCI-DSS.
                </p>
                <p className="text-black-600 mb-6">
                  Trust’s previous roles include Payments Design Manager at
                  IQbusiness, Senior Payments Consultant at Veneka, and Cards
                  Technical Specialist at Investec. Across these positions, he
                  played a central role in designing secure payment
                  architectures, guiding PCI-DSS readiness programmes, and
                  ensuring strong integration controls across complex banking
                  ecosystems. He is a certified Payment Card Industry
                  Professional (PCIP). Trust holds dual MBA degrees from Indiana
                  University’s Kelley School of Business and The University of
                  Manchester, complemented by executive fintech specialisations
                  at Harvard University (Distinction) and the University of
                  Oxford (Distinction). His academic journey also includes
                  studies in public policy at The Washington Campus and a
                  Bachelor of Science (Honours) in Information Systems from
                  Midlands State University. Combining global business insight
                  with deep technical expertise, Trust is recognised as a
                  leading voice at the intersection of fintech innovation,
                  regulation, and cybersecurity. He is committed to helping
                  financial institutions build secure, compliant, and
                  future-ready digital platforms.
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
