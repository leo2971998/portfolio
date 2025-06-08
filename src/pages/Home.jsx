import { useEffect, useRef, useState } from 'react';
import Modal from '../components/Modal.jsx';

export default function Home() {
  const sectionsRef = useRef([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const education = [
    { title: 'B.Sc. in Computer Science', details: 'Studied CS fundamentals and software engineering.' },
    { title: 'M.Sc. in Software Engineering', details: 'Focused on large scale web application design.' },
  ];

  const projects = [
    { title: 'Portfolio Website', details: 'A personal site built with React and Vite.' },
    { title: 'Task Manager App', details: 'Full-stack project using GraphQL and Prisma.' },
    { title: 'Blog Platform', details: 'Minimal Markdown-powered blogging system.' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = sectionsRef.current;
    sections.forEach((section) => section && observer.observe(section));
    return () => sections.forEach((section) => section && observer.unobserve(section));
  }, []);

  return (
    <main>
      <section className="hero section" ref={(el) => (sectionsRef.current[0] = el)}>
        <img src="/hero.svg" alt="Developer" className="profile-pic" />
        <div className="hero-content">
          <h1>About Me</h1>
          <p>Hello! I'm a developer passionate about building web apps.</p>
          <a href="#education" className="scroll-down">Scroll to learn more</a>
        </div>
      </section>

      <section
        id="education"
        className="section"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <h2>Education</h2>
        <div className="grid">
          {education.map((item) => (
            <article
              key={item.title}
              className="card"
              onClick={() => {
                setSelectedItem(item);
                setModalOpen(true);
              }}
            >
              {item.title}
            </article>
          ))}
        </div>
      </section>

      <section className="section" ref={(el) => (sectionsRef.current[2] = el)}>
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((item) => (
            <article
              key={item.title}
              className="card"
              onClick={() => {
                setSelectedItem(item);
                setModalOpen(true);
              }}
            >
              {item.title}
            </article>
          ))}
        </div>
      </section>

      <section className="section" ref={(el) => (sectionsRef.current[3] = el)}>
        <h2>Certifications</h2>
        <p>A list of my professional certifications.</p>
      </section>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedItem && (
          <div>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.details}</p>
          </div>
        )}
      </Modal>
    </main>
  );
}
