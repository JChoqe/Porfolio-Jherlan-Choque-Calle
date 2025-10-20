// funcion para limpiar el contenido de un contenedor
export const cleanPage = () => {
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = "";
  }
};