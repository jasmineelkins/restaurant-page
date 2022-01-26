// create menu array of objects
// for each object, create a new "tile"
let menuArray = [
  {
    name: "Fresh veggie omelette",
    description:
      "2 eggs with locally-grown seasonal veggies and rich, creamy feta cheese",
    price: "6.99",
  },
  {
    name: "Toast",
    description:
      "Your choice of homemade bread (sourdough white, honey wheat, cinnamon raisin swirl, rosemary focaccia). Toasted & served with butter and jam",
    price: "2.99",
  },
  {
    name: "Coffee",
    description:
      "Served however you like it: Hot or iced. Black or creamy. Decaf or not.",
    price: "1.99 (12oz) or 3.99 (20z)",
  },
  {
    name: "Tea Latte",
    description:
      "Made with your choice of tea: black, chai, habiscus, or matcha. Hot or iced.",
    price: "1.99 (12oz) or 3.99 (20z)",
  },
  {
    name: "Sandwich of the Day",
    description:
      "Smoked turkey breast with fresh herb goat cheese, arugula, sliced avocado, sundried tomatoes, and honey mustard",
    price: "7.99",
  },
  {
    name: "House Salad",
    description:
      "Freshly picked greens tossed with local seasonal vegetables and tangy homemade vinaigrette",
    price: "5.99",
  },
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

    //append new tile to content div
    content.appendChild(newTile);
  });

  return content;
}

export default createMenuContent;
