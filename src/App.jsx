import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import UehdCaseStudyPage from "./pages/UehdCaseStudyPage";
import FaveoDashboard from "./pages/FaveoDashboard";
import AboutPage from "./pages/AboutPage";

/**
 * All pages of the site. To add a page:
 *   1. create it in src/pages/
 *   2. add a <Route> below
 *   3. (optional) add it to NAV_LINKS in src/data/site.js to show it in the menu
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/uehd" element={<UehdCaseStudyPage />} />
        <Route path="projects/faveo" element={<FaveoDashboard />} />
        <Route path="about" element={<AboutPage />} />
        {/* Unknown URLs go back to the home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
