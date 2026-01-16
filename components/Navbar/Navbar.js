import "./Navbar.css";
// funcion que maneja el cambio de tema y el texto del boton
export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "☀") {
    themeBtn.innerText = "☾";
  } else {
    themeBtn.innerText = "☀";
  }
};

export const Navbar = () => `
<nav>
  <a href="#" id="homelink">
    <img src="icons/miLogo.png" alt="Jherlan Choque" />
  </a>
  <ul>
    <li>
        <a href="#" id="aboutlink">About</a>
    </li>
    <li>
        <a href="#" id="projectslink">Projects</a>
    </li>
    <li>
        <button id="themeBtn">☀</button>
    </li>
  </ul>
</nav>
`;