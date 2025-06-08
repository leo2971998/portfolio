import { useEffect, useRef } from 'react';

export default function Home() {
  const sectionsRef = useRef([]);

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
        <div>
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
        <ul>
          <li>B.Sc. in Computer Science</li>
          <li>M.Sc. in Software Engineering</li>
        </ul>
      </section>

      <section className="section" ref={(el) => (sectionsRef.current[2] = el)}>
        <h2>Projects</h2>
        <p>Here are some of my recent works.</p>
      </section>

      <section className="section" ref={(el) => (sectionsRef.current[3] = el)}>
        <h2>Certifications</h2>
        <p>A list of my professional certifications.</p>
      </section>
    </main>
export default function Home() {
  return (
    <section className="hero">
      <img src="/hero.svg" alt="Developer working" className="hero-art" />
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my latest projects and blog posts.</p>
      </div>
    </section>
  );
}
