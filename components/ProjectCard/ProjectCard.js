import "./ProjectCard.css";
// funcion que retorna una tarjeta de proyecto con imagen, titulo, descripcion, tecnologias y enlaces
export const ProjectCard = (project) => `
    <div class="project-card">
        <img src=${project.image} alt=${project.title}/>
        <div class="header">
            <h2>${project.title}</h2>
            <div>
                <a href=${project.github}>
                    <img src="../public/icons/github.svg" alt="GitHub Icon" />
                </a>
                <a href=${project.link}>
                    <img src="../public/icons/link.svg" alt="Link icon" />
                </a>
            </div>
        </div>

        <div class="detail">
            <p>${project.description}</p>
            <p class="tech">${project.tech.join(" - ")}</p>
        </div>
    </div>
`;