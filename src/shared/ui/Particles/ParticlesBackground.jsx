import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  

  const particlesOptions = {
    particles: {
      number: { value: 180, density: { enable: true, value_area: 800 } },
      color: { value: "#FF9292" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 80,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.7,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: false, mode: "push" },
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 1 } },
      },
    },
    retina_detect: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
};
