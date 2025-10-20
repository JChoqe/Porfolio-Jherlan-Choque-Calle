import "./ValueCard.css";

export const ValueCard = (value) => `
    <div class="value-card">
        <h3>${value.name}</h3>
        <p>${value.description}</p>
        <img src=${value.icon} alt=${value.name} />
    </div>
`;