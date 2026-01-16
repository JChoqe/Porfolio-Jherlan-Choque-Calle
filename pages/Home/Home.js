import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage();
  
  main.innerHTML = `
    <section class="home">
      <p>Hey, I'm</p>
      
      <div class="home-header">
        <div class="home-image">
          <img src="profile/profile.jpg" alt="Jherlan Choque" />
        </div>
        
        <div class="home-text">
          <h1>Jherlan Choque</h1>
          <a href="mailto:jherlan@gmail.com?subject=Contacto%20desde%20tu%20portfolio&body=Hola%20Jherlan%2C%0A%0AVi%20tu%20portfolio%20y%20me%20gustaría%20contactar%20contigo.">
            Say hi → email
          </a>
        </div>
      </div>
      
      <p>
        Siempre he trabajado resolviendo problemas: primero con datos, luego con personas y hoy con código, aplicando una mentalidad analítica para crear soluciones claras y eficientes.
      </p>
    </section>
  `;
};