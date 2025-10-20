import "./Footer.css";
import { Button } from "../Button/Button";
// funcion que retorna el footer con botones de redes sociales
export const Footer = () => `
    <h2>Contact</h2>
    <div>
        ${Button("../public/icons/contact/github.svg", "GitHub")}
        ${Button("../public/icons/contact/linkedln.svg", "LinkedIn")}
        ${Button("../public/icons/contact/telegram.svg", "Telegram")}
        ${Button("../public/icons/contact/gmail.svg", "Gmail")}
    </div>
`;