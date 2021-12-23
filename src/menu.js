function createMenuContent() {
  const content = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Menu content";
  content.appendChild(header);

  return content;
}

export default createMenuContent;
