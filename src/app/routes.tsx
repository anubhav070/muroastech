import { createBrowserRouter, redirect } from "react-router";

import { Root } from "./components/layout/Root";

import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { AISolutions } from "./pages/AISolutions";
import { Products } from "./pages/Products";
import { InventorySystem } from "./pages/InventorySystem";

import { Portfolio } from "./pages/Portfolio";
import { CaseStudy } from "./pages/CaseStudy";

import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";

import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Career } from "./pages/careers1";

import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children: [
      // Home
      { index: true, Component: Home },

      // AI Solutions & Services
      { path: "ai-solutions", Component: AISolutions },
      { path: "services", Component: Services },

      // Products
      { path: "products", Component: Products },
      { path: "products/inventory-system", Component: InventorySystem },

      // About & Company
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "career", Component: Career },
      // old URL keeps working
      { path: "careers", loader: () => redirect("/career") },

      // Portfolio
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:id", Component: CaseStudy },

      // Insights
      { path: "insights", Component: Blog },
      { path: "insights/:id", Component: BlogPost },

      // Contact
      { path: "contact", Component: Contact },

      // 404 - Keep this last
      { path: "*", Component: NotFound },
    ],
  },
]);