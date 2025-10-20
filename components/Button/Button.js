import "./Button.css";
// funcion que retorna un boton con un icono y un texto
export const Button = (icon, text) => `
    <button class="my-btn">
        <img src=${icon} alt='${text} icon'/>
        <h4>${text}</h4>
    </button>
`;