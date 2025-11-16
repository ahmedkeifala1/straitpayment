import { createFileRoute } from "@tanstack/react-router";
import Hero from "../../components/hero";
import Icon from "../../components/icon";

export const Route = createFileRoute("/services/")({
  component: Services,
});

function Services() {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive financial technology solutions tailored to your business needs."
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <section
            id="technology"
            className="tab-content active"
            data-aos="fade-up"
          >
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-black-800 mb-6">
                Technology Solutions
              </h2>
              <p className="text-black-600 mb-8">
                Technology is already in a space none of us could ever have
                imagined just a few years ago, yet it continues to evolve at a
                rapid rate. At Strait Payments, we're mindful of ongoing
                innovations and trends, from which we draw insights to implement
                contemporary solutions and help organizations overcome their
                business challenges. We solve today's problems, with tomorrow's
                tools.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="service-card bg-white p-8 rounded-xl shadow-md transition duration-300">
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Icon name="cpu" size={24} className="text-black-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black-800 mb-4">
                    IT Consulting and Systems Integration
                  </h3>
                  <p className="text-black-600">
                    Our technology advisory services will help identify the
                    right blend of technology solutions, architecture and
                    platforms to support your business vision. Our system
                    integration specialists will partner with you and help you
                    navigate through the complexities governing technology
                    change within your business - from planning through to
                    deployment.
                  </p>
                </div>
                <div className="service-card bg-white p-8 rounded-xl shadow-md transition duration-300">
                  <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <Icon name="code" size={24} className="text-white-600" />
                  </div>
                  <h3 className="text-xl font-bold text-black-800 mb-4">
                    Software Engineering
                  </h3>
                  <p className="text-black-600">
                    Our software development team has extensive experience in
                    delivering cutting edge payments solutions using various
                    development tools. We believe that there is always room for
                    improvement and our software development team can help you
                    find it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div id="payments" className="tab-content" data-aos="fade-up">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-black-800 mb-6">
                Payment Solutions
              </h2>
              <p className="text-black-600 mb-8">
                Whether you're looking to integrate cards and new payment types
                into your operations, or simply change your existing system,
                it's worth having a skilled consultant that can assist every
                step of the way. With over two decades of experience in
                transaction-related change projects across Africa, and an
                extensive knowledge of the financial services sector, Strait
                Payments is the perfect partner for the job.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-black-800 mb-4">
                  Our successful track record spans:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Traditional payments",
                    "Latest and upcoming payments",
                    "Financial inclusion",
                    "All channels",
                  ].map((value, idx) => (
                    <div key={`core_${idx}`} className="flex items-start">
                      <div className="bg-gray-100 p-1 rounded-full mr-3 mt-1">
                        <Icon
                          name="check-check"
                          size={16}
                          className="text-white-600"
                        />
                      </div>
                      <p className="text-black-600">{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black-800 mb-4">
                  We have complementary offerings, methods, and frameworks that
                  assist you in designing and implementing card and payment
                  change projects in your organization.
                </h3>
                <p className="text-black-600 mb-6">We can:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Conduct primary and secondary research",
                    "Conduct market and competitive analyses",
                    "Develop payment products",
                    "Implement regulatory and compliance requirements",
                    "Provide payments education and training",
                    "Develop customized change management and training",
                    "Select and implement technology",
                    "Improve operational productivity",
                  ].map((value, idx) => (
                    <div key={`values_${idx}`} className="flex items-start">
                      <div className="bg-gray-100 p-1 rounded-full mr-3 mt-1">
                        <Icon
                          name="check-circle"
                          size={16}
                          className="text-gray-900"
                        />
                      </div>
                      <p className="text-gray-600">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="people" className="tab-content" data-aos="fade-up">
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-black-800 mb-6">
                People & Training
              </h2>
              <p className="text-black-600 mb-8">
                The demands of business are increasing, and the supply of
                skilled and experienced employees, decreasing. Do you have a
                plan to address these issues and bring together all the
                necessary steps to create a comprehensive workforce development
                solution? Is your organization prepared to learn at the speed of
                need?
              </p>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0"></div>
                  <div className="md:w-2/3 md:pl-8">
                    <h3 className="text-xl font-bold text-black-800 mb-4">
                      Industry-Leading Training
                    </h3>
                    <p className="text-black-600 mb-4">
                      Strait Payments offers the latest industry trainings
                      within around payments. We have carefully selected the
                      subjects that we provide training on; and can work with
                      clients in customizing the training requirements and
                      schedules.
                    </p>
                    <p className="text-black-600">
                      Our training programs are designed to bridge the skills
                      gap in the financial technology sector, ensuring your team
                      is equipped with the latest knowledge and practical
                      skills.
                    </p>
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
