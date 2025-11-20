import { createFileRoute, Link } from "@tanstack/react-router";
import Icon from "../components/icon";
import type { IconName } from "lucide-react/dynamic";
import services from "../assets/data/services.json";
import Hero from "../components/hero";
import { members } from "../assets";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Financial Technology Solutions for Emerging Markets
            </h1>
            <p className="text-xl mb-8">
              Innovative, fast, and cost-effective solutions backed by teams
              with real expertise and proven experience.
            </p>
            <Link
              to="/contact"
              className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </div>
          <div className="md:w-1/2" data-aos="fade-left">
            <img
              src="/hero.png"
              alt="Financial Technology"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Hero>

      <section className="py-20 bg-gray-50" id="about">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              About Strait Payments Advisory
            </h2>
            <div className="w-20 h-1 bg-gray-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help financial institutions navigate the challenges and
              opportunities of new technologies in rapidly changing
              environments.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className="bg-white p-8 rounded-xl shadow-md"
              data-aos="fade-right"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Icon name="target" size={17} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To provide innovative, fast, and cost-effective solutions to
                financial institutions across emerging markets, helping them
                meet the demands of customers and the market.
              </p>
            </div>
            <div
              className="bg-white p-8 rounded-xl shadow-md"
              data-aos="fade-left"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Icon name="eye" size={17} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To redefine financial technology consulting by being more
                responsive to the various challenges financial institutions face
                today through our flexible and agile approach.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/about"
              className="text-gray-900 font-semibold hover:text-black transition duration-300 inline-flex items-center"
            >
              Learn more about us <Icon name="arrow-right" className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <div className="w-20 h-1 bg-gray-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your financial technology
              needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, idx) => (
              <div
                key={service.slug}
                className="service-card bg-white p-8 rounded-xl shadow-md transition duration-300"
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 100}
              >
                <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Icon
                    size={24}
                    name={service.icon as IconName}
                    className="text-gray-900 text-2xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/services`}
                  hash={service.slug}
                  className="text-gray-900 font-semibold hover:text-black transition duration-300 inline-flex items-center"
                >
                  Learn more <Icon name="arrow-right" className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Leadership
            </h2>
            <div className="w-20 h-1 bg-gray-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experts in business, project management and financial technology.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {members.slice(0, 4).map((member, idx) => (
              <div
                key={`team_member_${member.name}`}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-900 font-medium mb-4">
                  {member.position}
                </p>
                <Link
                  to="/team"
                  hash={member.slug}
                  className="text-sm text-gray-600 hover:text-gray-900 transition duration-300 inline-flex items-center"
                >
                  View profile <Icon name="arrow-right" className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/team"
              className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-black-700 transition duration-300 inline-block"
            >
              Meet the Full Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
