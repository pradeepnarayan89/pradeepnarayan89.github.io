import { About, Contact, Experience, Focus, Footer, Skills } from '@/components/Sections';
import { Sidebar } from '@/components/Sidebar';

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <div className="layout">
        <Sidebar />
        <main id="main">
          <About />
          <Focus />
          <Experience />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
