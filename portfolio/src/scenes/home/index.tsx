import React, { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/useMediaQuery";
import Modal from "@/components/Modal";
import { githubLinks, webLinks, descriptions } from "@/shared/constants";
import {
  avatarBig,
  avatarSmall,
  githubIcon,
  linkedInIcon,
  reactIcon,
  dartIcon,
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
  makeYourCombo,
  calculadoraBar,
  diceApp,
} from "@/shared/assets";
import ProjectCard from "@/components/ProjectCard";
import GithubCard from "@/components/GithubCard";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
              </div>
              <div className="presentation-text-container">
                <h1>¡Hola! Soy José Diego</h1>
                <p>
                  Desarrollador Web y mobile Jr. de Cáceres, Extremadura
                  enfocado al Frontend, principalmente con React y TypeScript.
                </p>
              </div>
              <div className="social-buttons">
                <button className="social-button">
                  <img src={githubIcon} alt="Github" />
                </button>
                <button className="social-button">
                  <img src={linkedInIcon} alt="LinkedIn" />
                </button>
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
                  openModal("Web YellowJack", "Web realizada en React, typescript y css3 para un bar ficticio en la que se muestran los servicios que ofrece, la carta, y un formulario de contacto totalmente funcional hecho con Basin. El diseño es completamente responsive.", yellowJackWeb, [
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
                  openModal("Calculadora de Bar", "Aplicación web de una calculadora para bares, en este caso, para el bar ficticio Yellow Jack. Fué un proyecto personal debido a que, en un juego de rol, usabamos el sistema de google sheets, que hacia lento el proceso de calcular los precios. De esta forma, la web a parte de cargar más rapido, era mas sencilla de usar y totalmente responsive", calculadoraBar, [
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
                techImages={[pythonIcon, reflexIcon, cssIcon]}
                openModal={() =>
                  openModal("Generador de Contraseñas", "Generador de contraseñas aleatorias realizado con Reflex. La página no guarda las contraseñas en ningun tipo de base de datos, con lo que la contraseña elegida por el usuario está segura. Permite elegir un numero de caracteres para la longitud de la contraseña. La web funciona en todos los dispositivos.", passGen, [
                    pythonIcon,
                    reflexIcon,
                    cssIcon,
                  ])
                }
              ></ProjectCard>
              <ProjectCard
                image={makeYourCombo}
                title="Combo Maker"
                github={githubLinks.githubMyC}
                techImages={[pythonIcon, reflexIcon, cssIcon]}
                openModal={() =>
                  openModal("Fighting Game Combo Maker", `${descriptions.mycDesc}`, makeYourCombo, [
                    pythonIcon,
                    reflexIcon,
                    cssIcon,
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
      </motion.div>
    </section>
  );
};

export default Home;
