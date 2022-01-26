function createContactContent() {
  const content = document.createElement("div");
  content.classList.add("content");

  const phoneInfo = document.createElement("div");
  phoneInfo.classList.add("info");

  const phoneHeader = document.createElement("h1");
  phoneHeader.classList.add("header");
  phoneHeader.textContent = "Phone Number";

  const phoneNumber = document.createElement("p");
  phoneNumber.classList.add("info");
  phoneNumber.textContent = "123-456-7890";

  phoneInfo.appendChild(phoneHeader);
  phoneInfo.appendChild(phoneNumber);

  const addressInfo = document.createElement("div");
  addressInfo.classList.add("info");

  const addressHeader = document.createElement("h1");
  addressHeader.classList.add("header");
  addressHeader.textContent = "Address";

  const address = document.createElement("p");
  address.classList.add("info");
  address.textContent = "123 Any Road, Anytown, XX 00000";

  phoneInfo.appendChild(addressHeader);
  phoneInfo.appendChild(address);

  content.appendChild(phoneInfo);
  content.appendChild(addressInfo);

  return content;
}

export default createContactContent;

function createInfoDiv(header, txt) {}
