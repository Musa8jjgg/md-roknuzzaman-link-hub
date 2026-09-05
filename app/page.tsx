"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
  Sparkles,
  Facebook,
  Twitter,
  Globe,
} from "lucide-react";

const links = [
  {
    label: "My Portfolio",
    sub: "Web • App • AI • Automation",
    href: "#",
    icon: Globe,
  },
  {
    label: "Hire Me on Fiverr",
    sub: "Freelance digital solutions",
    href: "#",
    icon: BriefcaseBusiness,
  },
];

const projects = [
  {
    title: "WafaDev",
    description: "AI • Web • Automation",
    href: "https://wafa-dev.vercel.app/",
    icon: Sparkles,
  },
  {
    title: "AI with Rokon",
    description: "AI education & digital content",
    href: "https://web.facebook.com/AIwithRokon/",
    icon: Sparkles,
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-floor" />

      <section className="hub">
        {/* 3D Orbit */}
        <div className="profile-orbit" aria-hidden="true">
          <div className="orbit orbit-a" />
          <div className="orbit orbit-b" />
          <div className="orbit-dot dot-a" />
          <div className="orbit-dot dot-b" />
        </div>

        {/* Profile */}
        <div className="avatar-wrap">
          <div className="avatar-placeholder">MR</div>
          <span className="status-dot" />
        </div>

        <div className="eyebrow">
          <span className="eyebrow-dot" />
          Available for freelance projects
        </div>

        <h1>MD Roknuzzaman</h1>

        <p className="role">
          AI • Web • App • Automation
        </p>

        <p className="intro">
          Building practical digital solutions for businesses,
          startups and individuals.
        </p>

        {/* Social Links */}
        <div className="social-row">
          <a
            href="https://www.linkedin.com/in/md-roknuzzaman-813241154/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>

          <a
            href="#"
            aria-label="GitHub"
          >
            <Github />
          </a>

          <a
            href="https://web.facebook.com/AIwithRokon/"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>

          <a
            href="#"
            aria-label="Instagram"
          >
            <Instagram />
          </a>

          <a
            href="#"
            aria-label="X"
          >
            <Twitter />
          </a>
        </div>

        {/* Primary Links */}
        <div className="link-stack">
          {links.map(
            ({ label, sub, href, icon: Icon }) => (
              <a
                className="link-card primary-card"
                href={href}
                key={label}
              >
                <span className="link-icon">
                  <Icon />
                </span>

                <span className="link-copy">
                  <strong>{label}</strong>
                  <small>{sub}</small>
                </span>

                <ArrowUpRight className="link-arrow" />
              </a>
            )
          )}
        </div>

        {/* Selected Work */}
        <div className="section-label">
          <span>Selected Work</span>
          <span className="section-line" />
        </div>

        <div className="project-grid">
          {projects.map(
            ({ title, description, href, icon: Icon }) => (
              <a
                className="project-card"
                href={href}
                key={title}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-icon">
                  <Icon />
                </div>

                <strong>{title}</strong>
                <span>{description}</span>

                <ExternalLink className="project-arrow" />
              </a>
            )
          )}
        </div>

        {/* Contact CTA */}
        <div className="cta-card">
          <div>
            <span className="cta-kicker">
              Have a project in mind?
            </span>

            <h2>
              Let&apos;s build something useful.
            </h2>
          </div>

          <a
            href="mailto:muhammadrokon69@gmail.com"
            className="cta-button"
          >
            <Mail />
            Start a Project
          </a>
        </div>

        <footer>
          © {new Date().getFullYear()} MD Roknuzzaman
        </footer>
      </section>
    </main>
  );
}
