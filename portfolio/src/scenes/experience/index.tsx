import Education from "@/components/Education";
import Job from "@/components/Job";
import { jobDescriptions } from "@/shared/constants";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Experience = ({ setSelectedPage }: Props) => {
  return (
    <section id={SelectedPage.Experience} className="experience-section">
      <motion.div
        className="experience-container"
        onViewportEnter={() => setSelectedPage(SelectedPage.Experience)}
      >
        <div className="experience-glass-parent">
          <div className="experience glass">
            <div className="experience-content">
              <div className="experience-title">
                <h1>Experiencia</h1>
              </div>
              
              <Job
                title="PCBox"
                date="2018"
                description={jobDescriptions.pcBox}
              ></Job>
              <Job
                title="PANORAMAWEB"
                date="2020"
                description={jobDescriptions.panoramaweb}
              ></Job>
              <Job
                title="Freelance"
                date="2024"
                description={jobDescriptions.freelance}
              ></Job>
              {/* Añadir un modal para ver más, en caso de que se necesite */}
            </div>
          </div>
          <div className="education glass">
            <div className="education-content">
              <div className="education-title-container">
              <div className="education-title">
                <h1>Educación</h1>
              </div>
              </div>
              <Education
                title="Educación Secundaria Obligatoria"
                dateAndCenter="2017 - CEPA Maestro Martín Cisneros"
                
              />
              <Education
                title="Certificado de Profesionalidad Nivel 1"
                dateAndCenter="2018 - Educatec"
                
                description="Operaciones Auxiliares y Mantenimiento de Sistemas Microinformáticos"
              />
              <Education
                title="Certificado de Profesionalidad Nivel 2"
                dateAndCenter="2019 - Centro de formacion SEXPE Cáceres"
                description="Confección y publicación de páginas web"
              />

            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
