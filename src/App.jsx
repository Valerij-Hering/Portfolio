import { useEffect, useState } from "react";

import { HeroSection } from './widgets/HeroSection/ui/HeroSection';
import { NavbarWrapper } from './widgets/Navbar/ui/NavbarWrapper/NavbarWrapper';
import { AboutSection } from './widgets/AboutSection/ui/AboutSection';
import { ServiceSection } from './widgets/Service/ui/ServiceSection';
import 'aos/dist/aos.css'; 
import { SkillsSection } from './widgets/SkillsSection/ui/SkillsSection';
import { ProjectsSection } from './widgets/ProjectsSection/ui/ProjectsSection';
import { ContactSection } from './widgets/ContactSection/ui/ContactSection';
import { FooterSection } from './widgets/Footer/FooterSection';
import { ScrollToTopButton } from './shared/ui/ScrollToTopButton/ScrollToTopButton';
import './App.css';
import { AOSProvider } from "./app/providers/AOSProvider/ui/AOSProvider";
import { AppPreloader } from "./widgets/AppPreloader/ui/AppPreloader";
import { useBoolean } from "./shared/hooks/useBoolean";

function App() {

  const loading = useBoolean(true);

  useEffect(() => {
    // Можно привязать к реальной загрузке шрифтов, i18n и т.д.
    const t = setTimeout(() => loading.setFalse(), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {loading.value && <AppPreloader />} {/* ← прелоадер поверх всего */}

      <AOSProvider>
        <NavbarWrapper/>
        <HeroSection idSection="home"/>
        <AboutSection idSection="about"/>
        <ServiceSection idSection="service"/>
        <SkillsSection idSection="skills"/>
        <ProjectsSection idSection="projects"/>
        <ContactSection idSection="contact"/>
        <FooterSection/>
        <ScrollToTopButton to="home"/>
      </AOSProvider>
    </>
  );
}

export default App;
