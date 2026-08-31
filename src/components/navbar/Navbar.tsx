"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Moon,
  Sun,
} from "lucide-react";

type NavItem = {
  id: string;
  label: string;
};

const mainNavigation: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const journeyNavigation: NavItem[] = [
  { id: "opensource", label: "Open Source" },
  { id: "leetcode", label: "LeetCode" },
  { id: "education", label: "Education" },
  { id: "achievements", label: "Achievements" },
  { id: "what-i-build", label: "What I Build" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Light mode is the default.
  const [darkMode, setDarkMode] = useState(false);

  const [navbarVisible, setNavbarVisible] = useState(true);

  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "skills",
      "projects",
      "opensource",
      "leetcode",
      "education",
      "achievements",
      "what-i-build",
      "contact",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setNavbarVisible(true);
    };

    const handleMouseMove = (event: MouseEvent) => {
      // Show navbar when cursor reaches the top area
      if (event.clientY <= 90) {
        setNavbarVisible(true);
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node;
      const navbar = document.querySelector(
        ".portfolio-navbar",
      );

      // Hide navbar when clicking outside it
      if (navbar && !navbar.contains(target)) {
        setNavbarVisible(false);
        setJourneyOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );

    document.addEventListener(
      "click",
      handleDocumentClick,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );

      document.removeEventListener(
        "click",
        handleDocumentClick,
      );
    };
  }, []);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
    setJourneyOpen(false);
  };

  const toggleTheme = () => {
    const nextDarkMode = !darkMode;

    setDarkMode(nextDarkMode);

    document.documentElement.classList.toggle(
      "dark",
      nextDarkMode,
    );
  };

  return (
    <header
      className={`portfolio-navbar ${
        navbarVisible
          ? "portfolio-navbar-visible"
          : "portfolio-navbar-hidden"
      }`}
    >
      <nav
        className="portfolio-navbar-inner"
        aria-label="Primary navigation"
      >
        {/* Brand */}
        <button
          type="button"
          className="portfolio-navbar-brand"
          onClick={() => scrollToSection("home")}
          aria-label="Go to homepage"
        >
          <span className="portfolio-navbar-brand-mark">
            J
          </span>
        </button>

        {/* Desktop navigation */}
        <div className="portfolio-navbar-desktop">
          {mainNavigation.map((item) => {
            const isActive =
              activeSection === item.id;

            return (
              <button
                key={item.id}
                type="button"
                data-nav-id={item.id}
                className={`portfolio-navbar-link portfolio-navbar-main-link ${
                  isActive
                    ? "portfolio-navbar-link-active"
                    : ""
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            );
          })}

          <div className="portfolio-navbar-journey">
            <button
              type="button"
              data-nav-id="journey"
              className={`portfolio-navbar-link ${
                activeSection === "contact"
                  ? "portfolio-navbar-link-active"
                  : ""
              }`}
              onClick={() =>
                setJourneyOpen((value) => !value)
              }
              aria-expanded={journeyOpen}
              aria-haspopup="menu"
            >
              Journey

              <ChevronDown
                size={14}
                className={
                  journeyOpen
                    ? "portfolio-navbar-chevron-open"
                    : ""
                }
              />
            </button>

            {journeyOpen && (
              <div
                className="portfolio-navbar-dropdown"
                role="menu"
              >
                {journeyNavigation.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`portfolio-navbar-dropdown-item ${
                      activeSection === item.id
                        ? "portfolio-navbar-dropdown-item-active"
                        : ""
                    }`}
                    onClick={() =>
                      scrollToSection(item.id)
                    }
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            data-nav-id="contact"
            className={`portfolio-navbar-link ${
              activeSection === "contact"
                ? "portfolio-navbar-link-active"
                : ""
            }`}
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          className="portfolio-navbar-theme portfolio-navbar-desktop-theme"
          onClick={toggleTheme}
          aria-label={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {darkMode ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}
        </button>
        {/* Mobile actions */}
        <div className="portfolio-navbar-mobile-actions">
          <button
            type="button"
            className="portfolio-navbar-theme"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>

          <button
            type="button"
            className={`portfolio-navbar-menu ${
              mobileOpen ? "portfolio-navbar-menu-open" : ""
            }`}
            onClick={() => {
              setMobileOpen((value) => !value);
              setNavbarVisible(true);
            }}
            aria-label={
              mobileOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={mobileOpen}
          >
            <span className="portfolio-navbar-menu-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile navigation panel */}
      {mobileOpen && (
        <div className="portfolio-navbar-mobile-panel">
          {mainNavigation.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`portfolio-navbar-mobile-link ${
                activeSection === item.id
                  ? "portfolio-navbar-mobile-link-active"
                  : ""
              }`}
              onClick={() =>
                scrollToSection(item.id)
              }
            >
              {item.label}
            </button>
          ))}

          <div className="portfolio-navbar-mobile-group">
            <span className="portfolio-navbar-mobile-label">
              Journey
            </span>

            {journeyNavigation.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`portfolio-navbar-mobile-link portfolio-navbar-mobile-sub-link ${
                  activeSection === item.id
                    ? "portfolio-navbar-mobile-link-active"
                    : ""
                }`}
                onClick={() =>
                  scrollToSection(item.id)
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className={`portfolio-navbar-mobile-link ${
              activeSection === "contact"
                ? "portfolio-navbar-mobile-link-active"
                : ""
            }`}
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}