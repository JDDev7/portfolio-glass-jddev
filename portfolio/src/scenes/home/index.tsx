import React, { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "@/components/Modal";
import CvModal from "@/components/CvModal";
import { githubLinks, webLinks, descriptions} from "@/shared/constants";
import {
  avatarBig,
  avatarSmall,
  githubIcon,
  linkedInIcon,
  reactIcon,
  dartIcon,
  nextjsIcon,
  tailwindIcon,
  flutterIcon,
  htmlicon,
  cssIcon,
  javaScriptIcon,
  typeScriptIcon,
  pythonIcon,
  reflexIcon,
  gitIcon,
  yellowJackWeb,
  passGen,

  calculadoraBar,
  diceApp,
  weatherApp,

} from "@/shared/assets";
import ProjectCard from "@/components/ProjectCard";
import GithubCard from "@/components/GithubCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const openCvModal = () => {
    setIsCvModalOpen(true);
  };

  const closeCvModal = () => {
    setIsCvModalOpen(false);
  };

  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    image: "",
    techImages: [] as string[],
  });

  const openModal = (
    title: string,
    description: string,
    image: string,
    techImages: string[]
  ) => {
    setModalContent({ title, description, image, techImages });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);



  const isAboveSmallScreens = useMediaQuery("(min-width: 480px)");
  return (
    <section id={SelectedPage.Home} className="home-section">
      <motion.div
        className="home-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="home-glass-parent">
          <div className="presentation-card glass">
            <div className="presentation-card-content">
              <div className="avatar-container">
                {
                  <img
                    src={isAboveSmallScreens ? avatarSmall : avatarBig}
                    alt="Avatar profile picture"
                  />
                }
                <div className="social-buttons">
                <button className="social-button" onClick={() => window.open(githubLinks.gitHub, "_blank", "noopener noreferrer")}>
                  <img src={githubIcon} alt="Github" />
                </button>
                <button className="social-button" onClick={() => window.open(webLinks.linkedIn, "_blank", "noopener noreferrer")}>
                  <img src={linkedInIcon} alt="LinkedIn" />
                </button>
              </div>
              </div>
              <div className="presentation-text-container">
                <div className="presentation-text-header">
                <h1>¡Hola! Soy José Diego</h1><span>👋</span>
                </div>
                <div className="presentation-text-paragraph">
                <p className="paragraph-one">
                  Desarrollador Web y mobile Jr. de Cáceres, Extremadura
                  enfocado al Frontend, principalmente con React y TypeScript.                  
                </p>
                <p className="paragraph-two">Me encanta empaparme de nuevas tecnologías y estar siempre aprendiendo cosas nuevas dentro y fuera del mundo de la programación.</p>
                <p className="paragraph-three">Aquí podrás ver mis proyectos, descargar mi CV o contactar conmigo. ¡Trabajemos juntos!</p>
                </div>
                <div className="cta-btn-container">
                  <button className="cta-contact-btn" ><a href="#contacto">Contactar</a></button>
                  <button className="cta-contact-btn" onClick={openCvModal}>Descargar CV</button>
                </div>
              </div>

            </div>
          </div>
          <div className="techs glass">
            <div className="tech-title">
              <h2>Tecnologías</h2>
            </div>
            <div className="techs-row">
              <img src={htmlicon} alt="html5" />
              <img src={cssIcon} alt="css3" />
              <img src={javaScriptIcon} alt="javascript" />
              <img src={typeScriptIcon} alt="typescript" />
              <img src={reactIcon} alt="react" />
              <img src={pythonIcon} alt="python" />
              <img src={reflexIcon} alt="reflex" />
              <img src={dartIcon} alt="dart" />
              <img src={flutterIcon} alt="flutter" />
              <img src={gitIcon} alt="git" />
              <img src={nextjsIcon} alt="nextjs" />
              <img src={tailwindIcon} alt="tailwind" />
              
            </div>
          </div>
          <div className="projects-container glass">
            <div className="projects-title-container"></div>
            <div className="projects-title">
              <h1>Proyectos Destacados</h1>
            </div>
            <div className="projects-grid">
              <ProjectCard
                image={yellowJackWeb}
                title="Web YellowJack"
                github={githubLinks.githubYellow}
                directLink={webLinks.yellowJackWeb}
                techImages={[reactIcon, typeScriptIcon, cssIcon]}
                openModal={() =>
                  openModal("Web YellowJack", `${descriptions.yellowJackWebDesc}`, yellowJackWeb, [
                    reactIcon,
                    typeScriptIcon,
                    cssIcon,
                  ])
                }
              ></ProjectCard>
              <ProjectCard
                image={calculadoraBar}
                title="Calculadora Bar"
                github={githubLinks.githubCalc}
                directLink={webLinks.yellowJackCalc}
                techImages={[htmlicon, javaScriptIcon, cssIcon]}
                openModal={() =>
                  openModal("Calculadora de Bar", `${descriptions.yellowjackCalcDesc}`, calculadoraBar, [
                    htmlicon,
                    javaScriptIcon,
                    cssIcon,
                  ])
                }
              ></ProjectCard>
              <ProjectCard
                image={passGen}
                title="Generador Contraseñas"
                github={githubLinks.githubPassGen}
                directLink={webLinks.passGenWeb}
                techImages={[reactIcon,typeScriptIcon, cssIcon]}
                openModal={() =>
                  openModal("Generador de Contraseñas", `${descriptions.passGenDesc}`, passGen, [
                    reactIcon,
                    typeScriptIcon,
                    cssIcon,
                  ])
                }
              ></ProjectCard>
              <ProjectCard
                image={weatherApp}
                title="Web App Clima"
                github={githubLinks.gihubWeather}
                directLink={webLinks.weatherWeb}
                techImages={[nextjsIcon, tailwindIcon, typeScriptIcon]}
                openModal={() =>
                  openModal("Web App Clima", `${descriptions.weatherDesc}`, weatherApp, [
                    nextjsIcon,
                    tailwindIcon,
                    typeScriptIcon,
                  ])
                }
              ></ProjectCard>
              <ProjectCard
              image={diceApp}
              title="Dice App"
              github={githubLinks.githubDiceApp}
              techImages={[ dartIcon, flutterIcon]}
              openModal={() =>
                openModal("Dice App", `${descriptions.diceAppDesc}`, diceApp, [
                  dartIcon,
                  flutterIcon,
                ])
              }/>
                <GithubCard
                image={githubIcon}
                title="Ver más Proyectos en Github">
                </GithubCard>
            </div>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          title={modalContent.title}
          description={modalContent.description}
          image={modalContent.image}
          techImages={modalContent.techImages}
        />

        <CvModal isOpen={isCvModalOpen} closeCvModal={closeCvModal}>

        </CvModal>
      </motion.div>
    </section>
  );
};

export default Home;
