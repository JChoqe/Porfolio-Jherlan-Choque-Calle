import "./SkillCard.css";

export const SkillCard = (skill) => `
    <div class="skill-card">
        <img src=${skill.icon} alt=${skill.name} />
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
        <span class="level">${skill.level}</span>
    </div>
`;