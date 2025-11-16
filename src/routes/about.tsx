import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/hero";
import Icon from "../components/icon";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <Hero
        title="About Strait Payments Advisory"
        subtitle="We help central banks, regulators, and financial institutions design and modernize secure, inclusive, and innovative digital payment systems."
      />

      <section className="py-20" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2016, Strait Payments Advisory is a United
                Kingdom–based professional services and technology consulting
                firm, with its headquarters in London and a Centre of Excellence
                located in Menlyn Maine, Pretoria, South Africa. From these
                strategic hubs, we support financial institutions and fintech
                players across emerging markets.
              </p>
              <p className="text-gray-600">
                Strait Payments Advisory was established with a clear mission:
                to bridge the gap between business strategy, technology
                innovation, and financial inclusion. We provide integrated
                business and IT consulting services, supported by specialised
                contract resourcing, to help organisations design, build, and
                scale modern Financial Technology solutions.
              </p>
              <p className="text-gray-600">
                Our clients span the broader financial services ecosystem
                including banks, payment service providers, mobile money
                operators, regulators, and fintech innovators who rely on our
                expertise to navigate complex digital transformations and
                deliver secure, interoperable, and future-ready payment systems.
              </p>
            </div>

            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-4">
                To empower financial institutions across emerging markets
                through innovative, scalable, and cost-effective financial
                technology services; delivering expert consulting, strategic
                project management, and modern digital solutions that meet
                evolving customer expectations and drive sustainable growth.
              </p>
            </div>

            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-4">
                To redefine financial technology consulting in emerging markets
                by delivering responsive, flexible, and agile services that
                address the evolving challenges faced by financial institutions
                enabling them to innovate confidently, operate efficiently, and
                expand financial access for all.
              </p>
            </div>

            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Approach
              </h2>
              <p className="text-gray-600 mb-4">
                Our work is grounded in deep expertise across consulting,
                research, and specialised contracting. We leverage this
                flexible, multidisciplinary foundation to solve complex
                challenges and deliver innovative, fast, and cost-effective
                solutions, supported by teams with proven experience in digital
                payments, regulation, and technology transformation.
              </p>
              <p className="text-gray-600 mb-6">
                We challenge the status quo with intention and courage. As
                architects of transformation, we help organisations reimagine
                change as a catalyst for growth, guiding them to build systems
                and strategies that are resilient, scalable, and future-ready.
              </p>
              <p className="text-gray-600 mb-6">
                At Strait Payments Advisory, we do not accept limitations. We
                approach every engagement with a problem-solver’s mindset,
                looking beyond technology to uncover root causes, identify new
                possibilities, and deliver practical solutions to the most
                stubborn challenges. Our strength lies in combining creativity,
                analytical rigour, and real-world delivery expertise to achieve
                meaningful, lasting impact.
              </p>

              <div
                className="bg-black-50 p-6 rounded-lg border-l-4 border-gray-900-600"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <p className="text-black font-medium">
                  At Strait Payments Advisory, we are problem-solvers who never
                  accept that something cannot be done. We think beyond IT and
                  technology, applying creative approaches to stubborn
                  challenges.
                </p>
              </div>
            </div>

            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Expertise
              </h2>
              <p className="text-gray-600 mb-6">
                We combine deep industry knowledge with hands-on delivery
                experience to help clients navigate the challenges and
                opportunities of rapidly evolving financial technologies. Our
                expertise enables financial institutions, regulators, and
                fintechs to adopt new innovations with confidence, meeting the
                demands of their customers, strengthening operational
                efficiency, and staying ahead in a competitive market.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                      <Icon name="users" size={17} className="text-gray-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Diverse Background
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Our Managing Principals and Consultants bring a rich blend
                    of expertise across strategy, technology, operations,
                    product development, marketing, business development,
                    regulatory compliance, and policy formulation. This
                    diversity of experience allows us to approach every
                    engagement holistically integrating strategic insight,
                    technical depth, and regulatory understanding to deliver
                    solutions that are innovative, compliant, and operationally
                    sound.
                  </p>
                </div>
                <div
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-100 p-2 rounded-full mr-4">
                      <Icon name="target" size={17} className="text-gray-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Focused Team
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    We are a highly focused team committed to deploying
                    consultants with the right skills, experience, and domain
                    knowledge for every project we undertake. By aligning the
                    specific expertise of our professionals with each client’s
                    needs, we ensure precision, efficiency, and consistently
                    high-quality delivery.
                  </p>
                </div>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Flexible and Agile Approach
              </h2>
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200"></div>

                <div className="relative mb-8 timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Consulting
                  </h3>
                  <p className="text-gray-600">
                    Assigning our teams to design and implement solutions
                  </p>
                </div>

                <div className="relative mb-8 timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Research
                  </h3>
                  <p className="text-gray-600">
                    Leveraging our research and that of our partners
                  </p>
                </div>

                <div className="relative timeline-item">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Contracting
                  </h3>
                  <p className="text-gray-600">
                    Deploying our experts to fill skills gaps
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
