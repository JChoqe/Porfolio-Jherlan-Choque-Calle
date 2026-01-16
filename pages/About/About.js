import "./About.css";
import { cleanPage } from "../../utils/cleanPage";

import { contents } from "../../data/contents";
import { ContentCard } from "../../components/ContentCard/ContentCard";

import { skills } from "../../data/skills";
import { SkillCard } from "../../components/SkillCard/SkillCard";

import { values } from "../../data/values";
import { ValueCard } from "../../components/ValueCard/ValueCard";

import { Divider } from "../../components/Divider/Divider";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
      <h2>About</h2>
        ${Divider()}
      <div class="myjourney-container">
        <h2>A Little More About My Journey</h2>
        ${Divider()}
        <p>
          Siempre he trabajado resolviendo problemas: primero con datos, luego con personas y hoy con código. Mi recorrido no ha sido lineal, pero sí coherente: cada etapa ha reforzado mi forma de pensar y de enfrentar los desafíos. <br> <br>
          Mi camino académico comenzó en la Universidad Complutense de Madrid, en la Facultad de Estudios Estadísticos. Allí tuve mi primer contacto real con la programación y los datos, trabajando con C++, bases de datos SQL y herramientas como SAP, MATLAB, SAS y R. Aunque no completé la carrera por motivos personales, consolidé una base analítica sólida y una manera estructurada y rigurosa de entender sistemas complejos.<br><br>
          Más adelante, mi experiencia profesional en sectores de atención al público y transporte me permitió desarrollar una habilidad clave que hoy considero imprescindible: trabajar con personas. Aprendí a comunicarme con claridad, adaptarme a entornos cambiantes y tomar decisiones bajo presión, entendiendo que una buena solución técnica solo funciona si también responde a las necesidades reales de quienes la utilizan.<br><br>
          Hoy me encuentro dando mis primeros pasos profesionales en el desarrollo web, formándome en THEPOWER y construyendo proyectos que me ayudan a crecer como desarrollador. Me interesa especialmente la lógica de los sistemas y el trabajo con bases de datos, donde siento que puedo aportar mayor valor: transformando procesos ineficientes y datos desordenados en soluciones claras, mantenibles y escalables.<br><br>
          Mi objetivo es desarrollarme como diseñador de soluciones estratégicas, combinando una visión analítica y humana para crear sistemas que no solo funcionen hoy, sino que sigan teniendo impacto mañana.
        </p>
      </div>
      <div class="content-container">  
        <h2>My content</h2>
        ${Divider()}
      </div>
      <div class="skills-container">
        <h2>Skills</h2>
        ${Divider()}
      </div>
      <div class="values-container">      
        <h2>Values</h2>
        ${Divider()}
      </div>
    </section>
`;

const contentContainer = document.querySelector(".content-container");
for (const content of contents) {
  const contentDiv = document.createElement("div");
  contentDiv.innerHTML = ContentCard(content);
  contentContainer.appendChild(contentDiv);
}

const skillsContainer = document.querySelector(".skills-container");
for (const skill of skills) {
  const skillsDiv = document.createElement("div");
  skillsDiv.innerHTML = SkillCard(skill);
  skillsContainer.appendChild(skillsDiv);
}

const valuesContainer = document.querySelector(".values-container");
for (const value of values) {
  const valuesDiv = document.createElement("div");
  valuesDiv.innerHTML = ValueCard(value);
  valuesContainer.appendChild(valuesDiv);
}

};