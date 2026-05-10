import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import AllProjectsPage from "./components/AllProjectsPage";
import AboutPage from "./components/AboutPage";
import ResumePage from "./components/ResumePage";

function getPage() {
  const hash = window.location.pathname.replace("/", "");
  if (hash === "resume") return "resume";
  if (hash === "about") return "about";
  if (hash === "projects") return "projects";
  return "";
}

export default function App() {
  const [page, setPage] = useState(getPage);

  // Listen for hash changes (back/forward + link clicks)
  useEffect(() => {
    const onHash = () => {
      setPage(getPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  if (page === "resume") return <ResumePage />;
  if (page === "about") return <AboutPage />;
  if (page === "projects") return <AllProjectsPage />;

  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <ProjectsSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}

// export default App;
