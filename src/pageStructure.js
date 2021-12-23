function setPageStructure() {
  // header & navbar
  const main = document.createElement("main");

  const header = document.createElement("header");
  header.classList.add("header");

  const navbar = document.createElement("nav");
  const link = document.createElement("a");
  link.textContent = "Home";
  navbar.appendChild(link);

  main.appendChild(header);
  main.appendChild(navbar);

  // content

  // footer
}

export default setPageStructure;
