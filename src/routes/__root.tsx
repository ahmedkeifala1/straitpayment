import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
