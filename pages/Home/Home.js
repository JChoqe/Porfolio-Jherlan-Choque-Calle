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
          <img src="./public/profile/profile.jpg" alt="Jherlan Choque" />
        </div>
        
        <div class="home-text">
          <h1>Jherlan Choque</h1>
          <a href="mailto:jherlan@gmail.com">Say hi →</a>
        </div>
      </div>
      
      <p>
        Soy estudiante de Desarrollo de Aplicaciones Web en ThePower | La Caja Mágica, y actualmente resido en Madrid, España. 
        Siempre me ha apasionado resolver problemas, y descubrí que la programación era la forma ideal de poner en práctica esa pasión.
        Estoy explorando diferentes áreas del desarrollo, con especial interés en el backend, las bases de datos y la inteligencia artificial, campos en los que quiero seguir creciendo y aportando valor.
        A través de mis proyectos, busco adquirir experiencia real, aprender continuamente y dejar mi huella en el mundo digital.
      </p>
    </section>
  `;
};