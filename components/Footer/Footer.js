import "./Footer.css";
import { Button } from "../Button/Button";
// funcion que retorna el footer con botones de redes sociales
export const Footer = () => `
    <h2>Contact</h2>
    <div>
        ${Button("icons/contact/github.svg", "GitHub")}
        ${Button("icons/contact/linkedln.svg", "LinkedIn")}
        ${Button("contact/telegram.svg", "Telegram")}
        ${Button("icons/contact/gmail.svg", "Gmail")}
    </div>
`;