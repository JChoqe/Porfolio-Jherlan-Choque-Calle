// funcion para enlazar un id con una funcion que renderiza una pagina
export const linkPage = (id, page) => {
  const link = document.querySelector(id);
  link.addEventListener("click", () => page());
};