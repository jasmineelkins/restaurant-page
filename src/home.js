// function to create Home info & append to content div
function createHomeContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.classList.add("home");

  const heading = document.createElement("h1");
  heading.classList.add("heading");
  heading.textContent = "Hours";
  content.appendChild(heading);

  const info = document.createElement("div");
  info.classList.add("info");
  info.innerHTML = `
  <p>WEEKDAYS</p>
  <p>breakfast from 8 am - noon</p>
  <p>lunch from noon - 5 pm</p>
  <p>coffee & tea served all day long</p>

  <p>&nbsp</p>
  <p>WEEKENDS</p>
  <p>brunch from 10 am - 3 pm</p>

  <p>&nbsp</p>
  <p>&#42;&#42; LIVE MUSIC &#42;&#42;</p>
  <p>Friday & Saturday at 8 pm</p>
  `;

  content.appendChild(info);
  return content;
}

export default createHomeContent;

// weekdays: breakfast, lunch, coffee
// weekends: brunch, dinner, live music
