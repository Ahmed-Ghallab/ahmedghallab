import React, { useState } from "react";
import "../../Component/Project/MyProject.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaExternalLinkAlt,
  FaGithub,
  FaHeart,
  FaRecycle,
  FaTractor,
  FaStore,
  FaUtensils,
  FaCloudSun,
  FaCouch,
  FaTasks,
  FaLayerGroup,
} from "react-icons/fa";
import { MdDevices, MdOutlinePhotoLibrary } from "react-icons/md";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiSupabase } from "react-icons/si";
import { TbApi } from "react-icons/tb";

// 1. Enaya (2 images)
import Enaya1 from "../../assets/images/projectImage/enaya/enaya.webp";
import Enaya2 from "../../assets/images/projectImage/enaya/enaya-demo-2.webp";

// 2. Wedding Platform (2 images)
import Wedding1 from "../../assets/images/projectImage/WeddingPlatform/wedding-demo.webp";
import Wedding2 from "../../assets/images/projectImage/WeddingPlatform/wedding-demo2.webp";

// 3. Tadweer IOMS (2 images)
import Tadweer1 from "../../assets/images/projectImage/Tadweer-IOMS/ioms-demo.webp";
import Tadweer2 from "../../assets/images/projectImage/Tadweer-IOMS/ioms-demo2.webp";

// 4. Tractor (2 images)
import Tractor1 from "../../assets/images/projectImage/tractor/tractor-demo.webp";
import Tractor2 from "../../assets/images/projectImage/tractor/tractor-demo2.webp";

// 5. Real Estate (2 images)
import RealState1 from "../../assets/images/projectImage/realestate/realstate.webp";
import RealState2 from "../../assets/images/projectImage/realestate/realstate-demo2.webp";

// 6. Sprints Final (2 images)
import Sprints1 from "../../assets/images/projectImage/SprintsFinal/SprintsFinal-demo.webp";
import Sprints2 from "../../assets/images/projectImage/SprintsFinal/SprintsFinal-demo2.webp";

// 7. Nooni (2 images)
import Nooni1 from "../../assets/images/projectImage/nooni/nooni.webp";
import Nooni2 from "../../assets/images/projectImage/nooni/nooni2.webp";

// 8. F&B Shop (2 images)
import FBShop1 from "../../assets/images/projectImage/F&B Shop/F&B Shop-demo.webp";
import FBShop2 from "../../assets/images/projectImage/F&B Shop/F&B Shop-demo2.webp";

// 9. Weather (2 images)
import Weather1 from "../../assets/images/projectImage/Weather-App/Weather.webp";
import Weather2 from "../../assets/images/projectImage/Weather-App/Weather-demo2.webp";

// 10. ToDo App (2 images)
import Todo1 from "../../assets/images/projectImage/ToDoApp/ToDoApp.webp";
import Todo2 from "../../assets/images/projectImage/ToDoApp/ToDoApp-demo2.webp";

const projectsData = [
  // ================= TIER 1: FLAGSHIP & SAAS =================
  {
    id: "enaya",
    tier: "tier1",
    tierLabel: "Tier 1 • Flagship E-Commerce",
    name: "Enaya – Full E-Commerce Platform & Admin Dashboard",
    category: "Production E-Commerce & AI",
    github: "https://github.com/Ahmed-Ghallab/enaya",
    demo: "https://www.enayak.com/",
    images: [Enaya1, Enaya2],
    imageCaptions: ["Hero & Product Showcase", "Special Deals & Catalog View"],
    badgeColor: "emerald",
    featured: true,
    highlights: [
      "Dynamic Admin Dashboard (CRUD Products & Content)",
      "Dynamic Hero Carousel & Section Content Management",
      "AI-Powered Skin Analysis Engine for Custom Recommendations",
      "Persistent Cart, Categories & Checkout Flows with Zustand",
    ],
    description:
      "A full-scale, production e-commerce platform featuring dynamic product catalogs, brand filters, customer-facing checkout, an administration dashboard with full CRUD capabilities, and an integrated AI-powered skin analysis tool.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Zustand", icon: <FaLayerGroup /> },
      { name: "Axios / REST", icon: <TbApi /> },
      { name: "Responsive", icon: <MdDevices /> },
    ],
  },
  {
    id: "wedding",
    tier: "tier1",
    tierLabel: "Tier 1 • SaaS Platform",
    name: "Premium Wedding Platform – SaaS Digital Invitation System",
    category: "SaaS & Dynamic Customizer",
    github: "https://github.com/Ahmed-Ghallab/premium-wedding-platform",
    demo: "https://premium-wedding-platform-psi.vercel.app/",
    images: [Wedding1, Wedding2],
    imageCaptions: ["Landing Experience", "Live Visual Studio Customizer"],
    badgeColor: "rose",
    featured: true,
    highlights: [
      "Real-Time Visual Customizer & Dynamic Templates",
      "Unique Vanity URLs & QR Code Generation",
      "Interactive RSVP Flow & Attendance Tracking",
      "Digital Guestbook (Wall of Love) & Music Controls",
    ],
    description:
      "A modern SaaS-style platform empowering users to design, customize, and publish interactive digital wedding invitations. Features real-time visual customization, dynamic templates, unique links, QR-code generation, and automated RSVP guest management.",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    id: "tadweer",
    tier: "tier1",
    tierLabel: "Tier 1 • Operations Platform",
    name: "Tadweer IOMS – Operations & Recycling Platform",
    category: "Enterprise Management",
    github: "https://github.com/Ahmed-Ghallab/tadweer-ioms",
    demo: "https://tadweer-ioms.vercel.app/",
    images: [Tadweer1, Tadweer2],
    imageCaptions: ["Agent Auth Portal", "Mission Control Operations Queue"],
    badgeColor: "cyan",
    featured: true,
    highlights: [
      "Real-Time Data Dashboard & Analytics",
      "Dynamic CRUD Workflows for Recycling Operations",
      "Supabase Database & Authentication Backend",
      "Scalable Component-Based Architecture",
    ],
    description:
      "A dynamic operations and recycling management platform featuring data-driven dashboards, CRUD workflows, Supabase cloud backend integration, and responsive administrative UI.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "REST APIs", icon: <TbApi /> },
    ],
  },
  {
    id: "tractor",
    tier: "tier1",
    tierLabel: "Tier 1 • Corporate Platform",
    name: "Ghalab Tractor – Heavy Machinery & Business Platform",
    category: "Modern Corporate UI",
    github: "https://github.com/Ahmed-Ghallab/GhalabTractor",
    demo: "https://ghalab-tractor.vercel.app/",
    images: [Tractor1, Tractor2],
    imageCaptions: ["Hero Overview & CTA", "High-Resolution Equipment View"],
    badgeColor: "amber",
    featured: true,
    highlights: [
      "Interactive Machinery Showcase & Technical Specs",
      "Fast Server-Side Rendering with Next.js",
      "Type-Safe Component Architecture with TypeScript",
      "High-Conversion Inquiries & Mobile UX",
    ],
    description:
      "A responsive corporate business website built for Ghalab Tractor using Next.js, React, and TypeScript. Features detailed equipment specifications, dynamic product showcases, and modern visual branding.",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Modern CSS", icon: <FaCss3Alt /> },
    ],
  },
  {
    id: "realestate",
    tier: "tier1",
    tierLabel: "Tier 1 • Real Estate Portal",
    name: "Oryx Investments Egypt – Real Estate Dashboard",
    category: "Property Management & Leads",
    github: "https://github.com/Ahmed-Ghallab/realestate",
    demo: "https://oryxinvestmentsegypt.com/",
    demoFallback: "https://realestate-rose-eight.vercel.app/",
    images: [RealState1, RealState2],
    imageCaptions: ["Platform Hero & App Showcase", "Why Oryx & Mission Section"],
    badgeColor: "violet",
    featured: true,
    highlights: [
      "Dynamic Property Listings & Search Filters",
      "Agent Contact & Lead Generation Handlers",
      "Clean Reusable Component Architecture",
      "Luxury Real Estate Design System",
    ],
    description:
      "A responsive real-estate platform featuring property showcases, search & filter mechanisms, lead generation forms, and component-based UI designed for property investments.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "Responsive", icon: <MdDevices /> },
    ],
  },

  // ================= TIER 2: E-COMMERCE & BUSINESS =================
  {
    id: "sprints-final",
    tier: "tier2",
    tierLabel: "Tier 2 • E-Commerce",
    name: "SprintsFinal – Ahmed Store (Fashion E-Commerce)",
    category: "Fashion Retail Platform",
    github: "https://github.com/Ahmed-Ghallab/SprintsFinal",
    demo: "https://sprints-final.vercel.app/",
    images: [Sprints1, Sprints2],
    imageCaptions: ["New Collection Banner", "Categorized Products & Cart Grid"],
    badgeColor: "blue",
    featured: false,
    highlights: [
      "User Authentication (Login / Sign-up)",
      "Multi-Category Fashion Product Catalog",
      "Interactive Shopping Cart & Price Calculation",
      "Checkout Flow Simulation",
    ],
    description:
      "A complete fashion e-commerce storefront for men, women, and children with authentication flows, categorized product exploration, detailed item views, and cart management.",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
  },
  {
    id: "nooni",
    tier: "tier2",
    tierLabel: "Tier 2 • E-Commerce Store",
    name: "Nooni – Modern Furniture & Interior Design Store",
    category: "Designer Furniture E-Commerce",
    github: "https://github.com/Ahmed-Ghallab/nooni",
    demo: "https://nooni-ecommerce.vercel.app/",
    images: [Nooni1, Nooni2],
    imageCaptions: ["Hero Showcase & Featured Seating", "Shop by Category Section"],
    badgeColor: "teal",
    featured: false,
    highlights: [
      "Minimalist Modern Design & Grid Layout",
      "Category Filtering (Chairs, Tables, Lighting, Beds)",
      "Interactive Product Views & Cart Triggers",
      "Responsive Layout on All Viewports",
    ],
    description:
      "A sleek modern furniture e-commerce storefront designed with clean aesthetics, interactive category navigation, product detail modals, and high-conversion shopping triggers.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
    ],
  },
  {
    id: "fb-shop",
    tier: "tier2",
    tierLabel: "Tier 2 • Online Store",
    name: "F&B Shop – Food & Beverage Online Store",
    category: "Online Ordering Demo",
    github: "https://github.com/Ahmed-Ghallab/testShop",
    demo: "https://test-shop-cyan.vercel.app/contact.html",
    images: [FBShop1, FBShop2],
    imageCaptions: ["Store Hero & Ordering Promo", "Product Catalog Details"],
    badgeColor: "teal",
    featured: false,
    highlights: [
      "Multi-Page Store Structure (Home, Products, About, Contact)",
      "Mobile Responsive Navigation & Menus",
      "Client-Side Form Validation",
      "Semantic & Accessible Markup",
    ],
    description:
      "Fully responsive and accessible online Food & Beverage store featuring multi-page routing, dynamic mobile navigation, product catalog sections, and client-side contact validation.",
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Vanilla JS", icon: <FaJsSquare /> },
    ],
  },

  // ================= TIER 3: INTERACTIVE PRACTICE & TOOLS =================
  {
    id: "weather",
    tier: "tier3",
    tierLabel: "Tier 3 • API Application",
    name: "Weather Dashboard – Real-Time Forecast",
    category: "OpenWeather API App",
    github: "https://github.com/Ahmed-Ghallab/weather-dashboard",
    demo: "https://weather-dashboard-one-sigma.vercel.app/",
    images: [Weather1, Weather2],
    imageCaptions: ["Live City Search & Current Weather", "Forecast Metrics & Details"],
    badgeColor: "sky",
    featured: false,
    highlights: [
      "Live OpenWeatherMap API Integration",
      "Global City Search with Instant Forecasts",
      "Temperature, Humidity, and Wind Conditions",
      "Responsive Glassmorphic UI Widgets",
    ],
    description:
      "Real-time meteorological forecast web application consuming OpenWeather API with instant city search, dynamic condition badges, humidity indicators, and 5-day weather trends.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "OpenWeather API", icon: <TbApi /> },
    ],
  },
  {
    id: "task-mgmt",
    tier: "tier3",
    tierLabel: "Tier 3 • Productivity Tool",
    name: "Smart Task Management Application",
    category: "CRUD State App",
    github: "https://github.com/Ahmed-Ghallab/task-management",
    demo: "https://task-management-orpin-iota.vercel.app/",
    images: [Todo1, Todo2],
    imageCaptions: ["Task Creation & Active Board", "Filtered Status & Priority View"],
    badgeColor: "indigo",
    featured: false,
    highlights: [
      "CRUD Task Creation, Editing & Deletion",
      "Task Categorization & Status Filters",
      "Persistent Browser Local Storage",
      "Clean Component Life-Cycle Logic",
    ],
    description:
      "Interactive task manager demonstrating clean CRUD operations, state persistence via localStorage, category filtering, and responsive interface workflows.",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJsSquare /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
    ],
  },
];

const tierFilters = [
  { id: "all", label: "All Projects (10)" },
  { id: "tier1", label: "Tier 1: Flagship & SaaS (5)" },
  { id: "tier2", label: "Tier 2: E-Commerce & Stores (3)" },
  { id: "tier3", label: "Tier 3: Tools & API Apps (2)" },
];

function ProjectImageGallery({ images, captions, name, badgeColor }) {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="project-image-wrapper">
      {/* Images container with smooth fade transition */}
      <div className="project-images-viewport">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${name} - ${captions?.[idx] || `View ${idx + 1}`}`}
            className={`project-img ${idx === activeIdx ? "active" : ""}`}
            loading="lazy"
            decoding="async"
            width="600"
            height="380"
          />
        ))}
      </div>

      {/* Dual Image Controls Overlay */}
      <div className="gallery-controls-overlay">
        {/* Caption & View Pill */}
        <div className="gallery-view-tabs">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`gallery-view-btn ${idx === activeIdx ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveIdx(idx);
              }}
              aria-label={`Show ${captions?.[idx] || `View ${idx + 1}`}`}
            >
              <MdOutlinePhotoLibrary className="gallery-btn-icon" />
              <span>{idx === 0 ? "View 1" : "View 2"}</span>
            </button>
          ))}
        </div>

        {/* Arrow Switchers */}
        <div className="gallery-arrows">
          <button
            type="button"
            className="gallery-nav-arrow prev"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            }}
            aria-label="Previous view"
          >
            ‹
          </button>
          <button
            type="button"
            className="gallery-nav-arrow next"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            }}
            aria-label="Next view"
          >
            ›
          </button>
        </div>

        {/* Current Image Caption Sub-bar */}
        <div className="gallery-caption-badge">
          {captions?.[activeIdx] || (activeIdx === 0 ? "Primary Preview" : "Detail View")}
        </div>
      </div>
    </div>
  );
}

function MyProject() {
  const [selectedTier, setSelectedTier] = useState("all");

  const filteredProjects =
    selectedTier === "all"
      ? projectsData
      : projectsData.filter((p) => p.tier === selectedTier);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <p className="projects-subtitle">
        A curated showcase of production applications, SaaS platforms, e-commerce systems, and interactive tools. Each project features dual visual previews highlighting key user flows.
      </p>

      {/* Tier Filter Tabs */}
      <div className="project-filters">
        {tierFilters.map((f) => (
          <button
            key={f.id}
            className={`project-filter-btn ${selectedTier === f.id ? "active" : ""}`}
            onClick={() => setSelectedTier(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Project Cards Grid / Alternating Showcase */}
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div
            className={`project-card ${project.featured ? "featured-project" : ""}`}
            key={project.id}
          >
            {/* Dual Image Gallery Side */}
            <ProjectImageGallery
              images={project.images}
              captions={project.imageCaptions}
              name={project.name}
              badgeColor={project.badgeColor}
            />

            {/* Content Side */}
            <div className="project-content">
              <div className="project-header-row">
                <span className={`project-tier-pill ${project.badgeColor || "emerald"}`}>
                  {project.tierLabel}
                </span>
                <span className="project-category-tag">{project.category}</span>
              </div>

              <h3 className="project-title">{project.name}</h3>

              <div className="project-description-box">
                <p>{project.description}</p>
                {project.highlights && (
                  <ul className="project-highlights-list">
                    {project.highlights.map((h, i) => (
                      <li key={i}>
                        <span className="highlight-bullet">▹</span> {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Technologies List */}
              <ul className="project-tech">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="tech-badge">
                    <span className="tech-icon">{tech.icon}</span>
                    <span className="tech-text">{tech.name}</span>
                  </li>
                ))}
              </ul>

              {/* Action Links */}
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-code"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <FaGithub /> Source Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-project-demo"
                    aria-label={`Open ${project.name} Live Demo`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All GitHub CTA */}
      <div className="projects-cta-footer">
        <button
          className="btn-primary project-view-all"
          onClick={() => window.open("https://github.com/Ahmed-Ghallab", "_blank")}
        >
          <FaGithub style={{ marginRight: "0.5rem" }} />
          Explore All Repositories on GitHub
        </button>
      </div>
    </section>
  );
}

export default MyProject;
