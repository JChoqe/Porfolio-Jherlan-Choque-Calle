// Orquestador Principal
import "./style.css";
import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { About } from "./pages/About/About";
import { Divider } from "./components/Divider/Divider";
// Renderiza componentes fijos y maneja el ruteo. Coloca el Navbar y Footer
const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();
// Configura navegacion SPA. Los enlaces de navegacioon sin recargar la pagina, del navbar
linkPage("#homelink", Home);
linkPage("#aboutlink", About);
linkPage("#projectslink", Projects);
// Renderiza la pagina principal
Home();
// Funciones adicionales. Tema oscuro y separador visual
changeTheme(); // Toggle Css class, Altera clase .light en body
footer.insertAdjacentHTML("beforebegin", Divider());