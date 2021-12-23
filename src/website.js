import createHomeContent from "./home";
import createMenuContent from "./menu";
import createContactContent from "./contact";

const container = document.querySelector("#contentContainer");

export default function loadPage() {
  const content = createHomeContent();

  container.appendChild(content);
}

const menuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", () => {
  const content = createMenuContent();

  container.textContent = "";
  container.appendChild(content);
});

const homeBtn = document.querySelector("#homeBtn");
homeBtn.addEventListener("click", () => {
  const content = createHomeContent();

  container.textContent = "";
  container.appendChild(content);
});

const contactBtn = document.querySelector("#contactBtn");
contactBtn.addEventListener("click", () => {
  const content = createContactContent();

  container.textContent = "";
  container.appendChild(content);
});
