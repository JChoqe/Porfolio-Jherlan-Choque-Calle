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
          Originalmente soy de Bolivia, y mi camino académico comenzó en la Universidad Complutense de Madrid, en la Facultad de Estudios Estadísticos. Aunque por motivos personales no llegué a terminar la carrera (me quedé entre segundo y tercer año), allí tuve mi primer contacto real con la programación, trabajando con C++ y aprendiendo sobre bases de datos en SQL, SAP, MATLAB, SAS y R.<br><br>
          Tras dejar la universidad, me introduje en el mundo laboral en sectores de atención al público y transporte, experiencias que me aportaron mucho en cuanto a trabajo en equipo, gestión bajo presión y habilidades interpersonales. Después de tres años en ese entorno, tomé la decisión de retomar los estudios, esta vez con un objetivo mucho más claro: introducirme de lleno en el mundo del desarrollo web.<br><br>
          Hoy estoy formándome en THEPOWER, explorando hacia dónde quiero orientar mi carrera y construyendo proyectos que me ayuden a crecer como desarrollador y a definir mi propio camino.
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