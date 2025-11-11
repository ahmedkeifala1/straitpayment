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
                Established in 2016, Strait Payments Advisory has its
                headquarters in the United Kingdom (33 Torridge Road Thornton
                Heath, Surrey CR7 7EZ), and COE in South Africa (Menlyn Maine,
                Pretoria).
              </p>
              <p className="text-gray-600">
                We are an integrated professional services firm that provides
                business & IT consulting and Contract Resourcing focused on
                Financial Technology solutions to clients across emerging
                markets. Our clients are organizations within the financial
                services industry.
              </p>
            </div>

            <div className="mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our Approach
              </h2>
              <p className="text-gray-600 mb-4">
                Founded on our expertise in consulting, research and
                contracting; we use this flexible approach to solve clients'
                problems by providing innovative, fast, and cost-effective
                solutions, backed by teams with real expertise and proven
                experience.
              </p>
              <p className="text-gray-600 mb-6">
                We boldly challenge the status quo, and as architects of
                transformation, we help businesses reimagine change as an
                opportunity for growth.
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
                Our expertise is properly leveraged to assist clients manage the
                challenges and opportunities of new technologies in the rapidly
                changing financial services environments to meet the demands of
                customers and the market.
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
                    Our Managing Principals and Consultants bring their diverse
                    background of setting strategy and managing technology,
                    operations, product development, marketing, and business
                    development to each of our client engagements.
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
                    We are a team focusing on delivering consultants with the
                    appropriate right skills, experience, and knowledge to each
                    project we support.
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
