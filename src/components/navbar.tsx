import { Link } from "@tanstack/react-router";
import Routes from "../assets/data/routes.json";
import { useState } from "react";
import Icon from "./icon";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/icon.png"
              alt="Strait Payments"
              className="h-8 w-8 mr-2"
              width={32}
              height={32}
            />
            <Link to="/" className="text-xl font-bold text-primary">
              Strait Payments
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            {Routes.map((route) => (
              <Link
                to={route.url}
                key={route.url}
                activeOptions={{ exact: route.url === "/" }}
                className="text-gray-600 text-sm hover:text-primary font-medium"
                activeProps={{
                  className: "!text-primary border-b-2 border-blue-800",
                }}
              >
                {route.title}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            {!showMenu && (
              <button className="border p-1 rounded text-gray-600 hover:text-primary focus:outline-none focus:text-primary">
                <Icon name="menu" size={19} onClick={() => setShowMenu(true)} />
              </button>
            )}

            <dialog
              open={showMenu}
              onClick={() => setShowMenu(false)}
              className="bg-black h-screen absolute z-10 overflow-hidden top-0 w-full bg-opacity-50"
            >
              <aside className="bg-white max-w-1/2 h-full">
                <header className="border-b p-2 flex justify-between">
                  <h1 className="font-bold">Strait Payments</h1>
                  <button className="border p-1 rounded text-gray-600 hover:text-primary focus:outline-none focus:text-primary">
                    <Icon
                      name="delete"
                      size={19}
                      onClick={() => setShowMenu(false)}
                    />
                  </button>
                </header>

                <nav className="flex flex-col py-4 px-2 space-y-2">
                  {Routes.map((route) => (
                    <Link
                      to={route.url}
                      key={route.url}
                      activeOptions={{ exact: route.url === "/" }}
                      className="border-l-4 border-transparent justify-start flex text-start px-2 py-1 text-sm font-medium text-gray-800"
                      activeProps={{
                        className: "!border-gray-800 bg-gray-50",
                      }}
                      onClick={() => setShowMenu(false)}
                    >
                      {route.title}
                    </Link>
                  ))}
                </nav>
              </aside>
            </dialog>
          </div>
        </div>
      </div>
    </nav>
  );
}
