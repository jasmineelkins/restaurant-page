// create menu array of objects
// for each object, create a new "tile"
let menuArray = [
  { name: "Eggs", description: "Scrambled", price: "5.99" },
  { name: "Toast", description: "with butter", price: "2.99" },
  { name: "Coffee", description: "Hot or iced", price: "3.99" },
];

console.log(menuArray);

// function to create a menu item using objects' info
function createMenuItem(item, description, price) {
  // create menu item "tile"
  const tile = document.createElement("div");
  tile.classList.add("tile");

  // create divs for title, description, and price
  const itemName = document.createElement("h2");
  const itemDescription = document.createElement("div");
  const itemPrice = document.createElement("div");
  const descriptionDiv = document.createElement("div");

  itemName.classList.add("itemName");
  itemDescription.classList.add("itemDescription");
  itemPrice.classList.add("itemPrice");
  descriptionDiv.classList.add("descriptionDiv");

  itemName.textContent = item;
  itemDescription.textContent = description;
  itemPrice.textContent = price;

  // append menu item info to "tile"
  descriptionDiv.appendChild(itemDescription);
  descriptionDiv.appendChild(itemPrice);

  tile.appendChild(itemName);
  tile.appendChild(descriptionDiv);

  return tile;
}

// function to append tiles to content div
function createMenuContent() {
  const content = document.createElement("div");
  content.classList.add("content");

  // for each object in menu array, create a new tile
  menuArray.forEach((currentItem) => {
    let newTile = createMenuItem(
      currentItem.name,
      currentItem.description,
      currentItem.price
    );

    content.appendChild(newTile);
  });

  return content;
}

export default createMenuContent;
