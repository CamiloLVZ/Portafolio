import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  User,
  Briefcase,
  Phone,
} from "lucide-react";

import "./Portfolio.css";
import remoteShellImg from "./assets/images/remote-shell.png";
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Prevenir scroll horizontal
  useEffect(() => {
    document.body.style.overflowX = "hidden";
    document.body.style.maxWidth = "100%";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  // Datos del portafolio
  const projects = [
    {
      id: 1,
      title: "E-commerce Landing Page",
      description:
        "Página de aterrizaje para tienda online con diseño responsive y animaciones CSS.",
      image:
        "https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-commerce+Landing",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/usuario/ecommerce-landing",
      demo: null,
    },
    {
      id: 2,
      title: "Administrador remoto multiplataforma",
      description:
        "Aplicación desarrollada en GoLang que permite a un computador que ejecuta un sistema operativo Windows conectarse mediante sockets y ejecutar comandos de consola en otro equipo con sistema Linux.",
      image: remoteShellImg,
      technologies: ["Go", "Shell", "Sockets"],
      github: "https://github.com/CamiloLVZ/RemoteShellClient",
      demo: null,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "Dashboard del clima con integración de API y gráficos interactivos.",
      image:
        "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Weather+Dashboard",
      technologies: ["JavaScript", "Chart.js", "Weather API", "Bootstrap"],
      github: "https://github.com/usuario/weather-dashboard",
      demo: null,
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    },
    { category: "Backend", items: ["Spring Boot", "Java", "Python"] },
    { category: "Database", items: ["MySQL", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "GitHub", "VSCode", "Postman"] },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-vh-100"
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
        overflowX: "hidden",
        width: "100%",
        margin: 0,
        padding: 0,
        position: "relative",
      }}
    >
      {/* Navigation */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{ backgroundColor: "#1a1d29", backdropFilter: "blur(10px)" }}
      >
        <div className="container">
          <a
            className="navbar-brand fw-bold"
            href="#home"
            style={{ color: "#4f46e5" }}
          >
            <Code size={24} className="me-2" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["home", "about", "projects", "contact"].map((section) => (
                <li key={section} className="nav-item">
                  <button
                    className={`nav-link btn btn-link text-decoration-none ${
                      activeSection === section ? "text-primary" : "text-light"
                    }`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-vh-100 d-flex align-items-center"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          paddingTop: "80px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-white">
                <h1 className="display-4 fw-bold mb-3">
                  <span style={{ color: "#fbbf24" }}>J. Camilo Londoño</span>
                </h1>
                <h2 className="h4 mb-4 text-light">
                  Desarrollador de Software
                </h2>
                <p className="lead mb-4">
                  Apasionado por el desarrollo de sistemas de información en
                  backend y frontend, utilizando tecnologías como ReactJS y Java
                  Spring Boot.
                </p>
                <div className="d-flex gap-3 mb-4">
                  <button
                    className="btn btn-warning btn-lg px-4"
                    onClick={() => scrollToSection("projects")}
                  >
                    Ver Proyectos
                  </button>
                  <button
                    className="btn btn-outline-light btn-lg px-4"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contactar
                  </button>
                </div>
                <div className="d-flex gap-3">
                  <a
                    href="https://github.com/CamiloLVZ"
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://linkedin.com/in/camilo-lvz"
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="mailto:jcamilo.lvz@gmail.com"
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  >
                    <Mail />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="position-relative">
                <div
                  className="bg-light rounded-circle mx-auto"
                  style={{
                    width: "300px",
                    height: "300px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  }}
                >
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQF8P4jlZRm4Tw/profile-displayphoto-crop_800_800/B4EZk8I86YIIAI-/0/1757650605514?e=1762387200&v=beta&t=Yr-oo1CQk-qhFXR8PZJZwjrd_ou1tBMzki6ibG76akw"
                    alt="Profile"
                    className="rounded-circle img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-5"
        style={{ backgroundColor: "#f8fafc" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-5">
              <h2 className="display-5 fw-bold mb-3">
                <User className="me-3" style={{ color: "#4f46e5" }} />
                Sobre Mí
              </h2>
              <p className="lead text-muted">
                Soy estudiante de ingenieria de sistemas y apasionado por la
                programación y la ingenieria de software desarrollando
                aplicaciones frontend, backend y bases de datos.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-3">Mi Historia</h4>
                  <p className="text-muted">
                    Comencé mi carrera de ingenieria hace 3 años, desde entonces
                    he pulido mis habilidades de desarrollo enfocandome en
                    aplicaciones web. Cada día aprendo algo nuevo y disfruto
                    enfrentando desafíos técnicos constantemente.
                  </p>
                  <p className="text-muted mb-0">
                    Actualmente me enfoco en tecnologías de desarrollo backend,
                    pero con disposición de colaborar en todo cuanto pueda,
                    busco oportunidades para aplicar mis conocimientos en
                    proyectos reales.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-4">Habilidades Técnicas</h4>
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="mb-3">
                      <h6 className="text-primary mb-2">
                        {skillGroup.category}
                      </h6>
                      <div className="d-flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="badge bg-light text-dark px-3 py-2"
                            style={{ fontSize: "0.85rem" }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">
              <Briefcase className="me-3" style={{ color: "#4f46e5" }} />
              Mis Proyectos
            </h2>
            <p className="lead text-muted">
              Algunos de los proyectos en los que he trabajado recientemente
            </p>
          </div>

          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100 border-0 shadow-sm hover-card">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title mb-3">{project.title}</h5>
                    <p className="card-text text-muted flex-grow-1">
                      {project.description}
                    </p>

                    <div className="mb-3">
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="badge bg-primary bg-opacity-10 text-primary px-2 py-1"
                            style={{ fontSize: "0.75rem" }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="d-flex gap-2">
                      <a
                        href={project.github}
                        className="btn btn-outline-dark btn-sm flex-fill"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} className="me-1" />
                        Código
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          className="btn btn-primary btn-sm flex-fill"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} className="me-1" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-5"
        style={{ backgroundColor: "#1a1d29" }}
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-3">
              <Phone className="me-3" style={{ color: "#4f46e5" }} />
              Contacto
            </h2>
            <p className="lead text-light">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-4 mb-4 text-center">
                  <div className="text-primary mb-3">
                    <Mail size={48} />
                  </div>
                  <h5 className="text-white mb-2">Email</h5>
                  <a
                    href="mailto:jcamilo.lvz@gmail.com"
                    className="text-light text-decoration-none"
                  >
                    jcamilo.lvz@gmail.com
                  </a>
                </div>

                <div className="col-md-4 mb-4 text-center">
                  <div className="text-primary mb-3">
                    <Github size={48} />
                  </div>
                  <h5 className="text-white mb-2">GitHub</h5>
                  <a
                    href="https://github.com/CamiloLVZ"
                    className="text-light text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/CamiloLVZ
                  </a>
                </div>

                <div className="col-md-4 mb-4 text-center">
                  <div className="text-primary mb-3">
                    <Linkedin size={48} />
                  </div>
                  <h5 className="text-white mb-2">LinkedIn</h5>
                  <a
                    href="https://linkedin.com/in/camilo-lvz"
                    className="text-light text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/camilo-lvz
                  </a>
                </div>
              </div>

              <div className="text-center mt-5">
                <a
                  href="mailto:jcamilo.lvz@gmail.com"
                  className="btn btn-primary btn-lg px-5"
                >
                  <Mail className="me-2" />
                  Enviar Mensaje
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-4 text-center"
        style={{ backgroundColor: "#0f1419" }}
      ></footer>
    </div>
  );
};

export default Portfolio;
