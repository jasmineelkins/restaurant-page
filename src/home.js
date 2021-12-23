function createHomeContent() {
  const content = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "Home content";
  content.appendChild(header);

  return content;
}

export default createHomeContent;
