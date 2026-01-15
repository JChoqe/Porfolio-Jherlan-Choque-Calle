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
          <a href="mailto:jherlan@gmail.com">Say hi →</a>
        </div>
      </div>
      
      <p>
        Siempre he trabajado resolviendo problemas: primero con datos, luego con personas y hoy con código.
      </p>
    </section>
  `;
};