import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecruiterSnapshot } from './components/RecruiterSnapshot';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CareerJourney } from './components/CareerJourney';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Strengths } from './components/Strengths';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [snapshotOpen, setSnapshotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Fixed Navigation */}
      <Navbar onOpenSnapshot={() => setSnapshotOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenSnapshot={() => setSnapshotOpen(true)} />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CareerJourney />
        <Education />
        <Certifications />
        <Strengths />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* 30-Second Recruiter Snapshot Modal */}
      <RecruiterSnapshot
        isOpen={snapshotOpen}
        onClose={() => setSnapshotOpen(false)}
      />
    </div>
  );
}

export default App;
