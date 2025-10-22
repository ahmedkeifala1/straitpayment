import { Link } from "@tanstack/react-router";
import Routes from "../assets/data/routes.json";
import services from "../assets/data/services.json";

export default function Footer() {
  return (
    <>
      <section className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-aos="fade-up"
          >
            Ready to Future Proof Your Business?
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Let's discuss how we can help you navigate the challenges and
            opportunities of financial technology.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 inline-block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-6 space-y-8">
          <div className="grid md:grid-cols-4 gap-12 text-sm">
            <div className="space-y-4">
              <div className="bg-slate-100 p-2 rounded-md">
                <img src="/tlogo.png" alt="Strait Payments" />
              </div>
              <p className="text-gray-200 text-lg">
                Financial Technology solutions for clients across emerging
                markets.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {Routes.map((route) => (
                  <li key={`footer-${route.url}`}>
                    <Link
                      to={route.url}
                      activeOptions={{ exact: route.url === "/" }}
                      className="text-gray-400 hover:text-white transition duration-300"
                      activeProps={{ className: "underline text-white" }}
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={`service-${service.slug}`}>
                    <Link
                      to="/team"
                      hash={service.slug}
                      activeOptions={{ includeHash: true }}
                      className="text-gray-400 hover:text-white transition duration-300"
                      activeProps={{ className: "underline text-white" }}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p className="mb-2">Menlyn Main, Pretoria</p>
                <p className="mb-2">South Africa</p>
                <p className="mb-2">info@straitpayments.com</p>
              </address>
            </div>
          </div>

          <hr className="border-gray-700" />

          <div>
            <p className="font-semibold text-center text-gray-200">
              &copy; {new Date().getUTCFullYear()} Strait Payments Advisory. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
