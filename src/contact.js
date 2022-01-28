// import location image in webpack
import Location from "./assets/images/location.png";
const location = new Image();
location.src = Location;

// function to create Contact info & append to content div
function createContactContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.classList.add("contact");
  content.setAttribute("id", "contactContent");

  const innerDiv = document.createElement("div");
  content.classList.add("innerDiv");

  const phoneInfo = document.createElement("div");
  phoneInfo.classList.add("contactInfo");

  const phoneHeader = document.createElement("h2");
  phoneHeader.classList.add("header");
  phoneHeader.textContent = "Phone Number";

  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("contactInfo");
  phoneNumber.textContent = "123-456-7890";

  phoneInfo.appendChild(phoneHeader);
  phoneInfo.appendChild(phoneNumber);

  const addressInfo = document.createElement("div");
  addressInfo.classList.add("contactInfo");

  const addressHeader = document.createElement("h2");
  addressHeader.classList.add("header");
  addressHeader.textContent = "Address";

  const address = document.createElement("p");
  address.classList.add("contactInfo");
  address.textContent = "123 Downtown Road, Cleveland, OH 12345";

  addressInfo.appendChild(addressHeader);
  addressInfo.appendChild(address);

  innerDiv.appendChild(phoneInfo);
  innerDiv.appendChild(addressInfo);
  content.appendChild(innerDiv);

  location.classList.add("locationImg");
  content.appendChild(location);

  return content;
}

export default createContactContent;

// rewrite to separate info into object, like the Menu function
function createInfoDiv(header, txt) {}
