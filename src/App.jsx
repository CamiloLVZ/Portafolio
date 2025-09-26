import React, { useState } from "react";
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

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

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
      title: "Task Manager App",
      description:
        "Aplicación de gestión de tareas con funcionalidades CRUD y almacenamiento local.",
      image:
        "https://via.placeholder.com/400x250/10b981/ffffff?text=Task+Manager",
      technologies: ["React", "CSS3", "LocalStorage"],
      github: "https://github.com/usuario/task-manager",
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
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Bootstrap",
        "Tailwind CSS",
      ],
    },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PHP"] },
    { category: "Database", items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "Figma"] },
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
      style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
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
            DevPortfolio
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
                  Hola, soy{" "}
                  <span style={{ color: "#fbbf24" }}>Alex Desarrollador</span>
                </h1>
                <h2 className="h4 mb-4 text-light">
                  Desarrollador Frontend Junior
                </h2>
                <p className="lead mb-4">
                  Apasionado por crear experiencias web modernas y funcionales.
                  Especializado en React, JavaScript y tecnologías frontend.
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
                    href="https://github.com"
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  >
                    <Github />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="text-white"
                    style={{ fontSize: "1.5rem" }}
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="mailto:email@ejemplo.com"
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
                    src="https://via.placeholder.com/300x300/e5e7eb/6b7280?text=Tu+Foto"
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
                Soy un desarrollador frontend junior con pasión por aprender y
                crear soluciones web innovadoras.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h4 className="mb-3">Mi Historia</h4>
                  <p className="text-muted">
                    Comencé mi journey en el desarrollo web hace 2 años. Me
                    fascina la posibilidad de transformar ideas en experiencias
                    digitales tangibles. Cada día aprendo algo nuevo y disfruto
                    enfrentando nuevos desafíos técnicos.
                  </p>
                  <p className="text-muted mb-0">
                    Actualmente me enfoco en tecnologías frontend modernas y
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
              ¿Tienes un proyecto en mente? ¡Me encantaría saber de ti!
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
                    href="mailto:tu-email@ejemplo.com"
                    className="text-light text-decoration-none"
                  >
                    tu-email@ejemplo.com
                  </a>
                </div>

                <div className="col-md-4 mb-4 text-center">
                  <div className="text-primary mb-3">
                    <Github size={48} />
                  </div>
                  <h5 className="text-white mb-2">GitHub</h5>
                  <a
                    href="https://github.com/tu-usuario"
                    className="text-light text-decoration-none"
                  >
                    github.com/tu-usuario
                  </a>
                </div>

                <div className="col-md-4 mb-4 text-center">
                  <div className="text-primary mb-3">
                    <Linkedin size={48} />
                  </div>
                  <h5 className="text-white mb-2">LinkedIn</h5>
                  <a
                    href="https://linkedin.com/in/tu-perfil"
                    className="text-light text-decoration-none"
                  >
                    linkedin.com/in/tu-perfil
                  </a>
                </div>
              </div>

              <div className="text-center mt-5">
                <a
                  href="mailto:tu-email@ejemplo.com"
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
      >
        <div className="container">
          <p className="text-muted mb-0">
            © 2024 Alex Desarrollador. Hecho con ❤️ y React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
