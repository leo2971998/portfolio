import { useEffect, useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';

export default function Home() {
  const sectionsRef = useRef([]);
  const itemRefs = useRef([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const education = [
    {
      title: 'B.Sc. in Computer Science',
      subtitle: 'University of Somewhere (2015-2019)',
      image: '/education.svg',
      details:
        'Studied algorithms, data structures and networking. Built several side projects and graduated with honors.',
    },
    {
      title: 'M.Sc. in Software Engineering',
      subtitle: 'Institute of Tech (2019-2021)',
      image: '/education.svg',
      details:
        'Focused on web application architecture and DevOps practices. Thesis on scalable React frameworks.',
    },
  ];

  const projects = [
    {
      title: 'Portfolio Website',
      image: '/project.svg',
      details:
        'A personal site built with React and Vite to showcase my work, blog posts and contact info.',
    },
    {
      title: 'Task Manager App',
      image: '/project.svg',
      details:
        'Productivity tool powered by GraphQL and Prisma with real-time collaboration features.',
    },
    {
      title: 'Blog Platform',
      image: '/project.svg',
      details:
        'Minimal Markdown blogging system including tagging, comments and static site generation.',
    },
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer',
      image: '/certification.svg',
      details: 'Credential demonstrating proficiency with Amazon Web Services.',
    },
    {
      title: 'Scrum Master',
      image: '/certification.svg',
      details: 'Certified to facilitate agile development processes.',
    },
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
    const items = itemRefs.current;
    const allElements = [...sections, ...items];
    allElements.forEach((el) => el && observer.observe(el));
    return () => allElements.forEach((el) => el && observer.unobserve(el));
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
        <div>
          {education.map((item, idx) => (            <Card
              key={item.title}
              ref={(el) => (itemRefs.current[idx] = el)}
              className={`item-row ${idx % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => {
                setSelectedItem(item);
                setModalOpen(true);
              }}
            >
              <CardMedia component="img" image={item.image} alt="education" sx={{ width: 160 }} />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.subtitle}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section" ref={(el) => (sectionsRef.current[2] = el)}>
        <h2>Projects</h2>
        <div>
          {projects.map((item, idx) => (
            <Card
              key={item.title}
              ref={(el) => (itemRefs.current[idx + education.length] = el)}
              className={`item-row ${(idx + education.length) % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => {
                setSelectedItem(item);
                setModalOpen(true);
              }}
            >
              <CardMedia component="img" image={item.image} alt="project" sx={{ width: 160 }} />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="section" ref={(el) => (sectionsRef.current[3] = el)}>
        <h2>Certifications</h2>
        <div>
          {certifications.map((item, idx) => (
            <Card
              key={item.title}
              ref={(el) => (itemRefs.current[idx + education.length + projects.length] = el)}
              className={`item-row ${(idx + education.length + projects.length) % 2 === 0 ? 'left' : 'right'}`}
              onClick={() => {
                setSelectedItem(item);
                setModalOpen(true);
              }}
            >
              <CardMedia component="img" image={item.image} alt="certification" sx={{ width: 160 }} />
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedItem && (
          <>
            <DialogTitle>{selectedItem.title}</DialogTitle>
            <DialogContent>
              {selectedItem.image && (
                <img src={selectedItem.image} alt="illustration" style={{ width: '100%', marginBottom: '1rem' }} />
              )}
              {selectedItem.subtitle && (
                <Typography variant="subtitle1" gutterBottom>
                  {selectedItem.subtitle}
                </Typography>
              )}
              <DialogContentText>{selectedItem.details}</DialogContentText>
            </DialogContent>
          </>
        )}
      </Dialog>
    </main>
  );
}
