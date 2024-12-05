// ----------- NAVBAR AND HAMBURGER MENU -----------

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navLink").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let lastScollY = 0;

const navBar = document.querySelector(".navBar");
const scrollThreshold = 7;
window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (window.scrollY === 0) {
    navBar.classList.remove("hidden");
  } else if (currentScrollY > lastScollY + scrollThreshold) {
    console.log("scroll down");
    navBar.classList.add("hidden");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  } else if (currentScrollY < lastScollY - scrollThreshold) {
    console.log("scroll up");
    navBar.classList.remove("hidden");
  }
  lastScollY = currentScrollY;
});

//------------TACOMENU SELCTIONS ------------------
let tacoItems = {
  one: {
    heading: "Al Pastor",
    price: 9,
    description:
      "Pork marinated with El Osos own Pastor adobo, grilled on the Trompo. Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
  two: {
    heading: "Suadero",
    price: 9,
    description: "Confited beef, Corn Tortilla, Onions, Cilantro.",
  },
  three: {
    heading: "Chorizo",
    price: 10,
    description:
      "Minced pork seasoned with El Oso Chorizo Adobo. Corn Tortilla, Onions, Cilantro.",
  },
  four: {
    heading: "Campechano",
    price: 10,
    description:
      "Mix of Suadero and Chorizo meat. Corn Tortilla, Onions, Cilantro.",
  },
  five: {
    heading: "Alambre al Pastor",
    price: 14,
    description:
      "Marinated Pork, Poblano, Cheese, 4 Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
  six: {
    heading: "Choriqueso",
    price: 10,
    description:
      "Minced pork seasoned with El Oso Chorizo Adobo, cheese, Corn Tortilla, Onions, Cilantro.",
  },
  seven: {
    heading: "Vegan Al Pastor",
    price: 10,
    description:
      "Pea-based protein marinated with El Oso's Vegan Pastor adobo, grilled on the Trompo. Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
};

let notepad = [];

initialiseNotepad();

function renderNotepad() {
  let notepadTacoheadEl = document.getElementById("notepadTacohead");
  if (notepadTacoheadEl) {
    notepadTacoheadEl.innerHTML = "";
    let list = document.createElement("ul");
    notepadTacoheadEl.appendChild(list);

    notepad.forEach((itemNumber, index) => {
      let listItem = document.createElement("li");
      list.appendChild(listItem);

      let divItem = document.createElement("div");
      listItem.appendChild(divItem);
      divItem.classList.add("itemDescription");

      let itemHeading = document.createElement("h4");
      console.log(
        `TacoItems for itemNumber: ${itemNumber}`,
        tacoItems[itemNumber]
      );
      itemHeading.textContent = `${tacoItems[itemNumber].heading}`;
      itemHeading.classList.add("itemHeading");
      divItem.appendChild(itemHeading);

      let itemPrice = document.createElement("h5");
      itemPrice.textContent = `${tacoItems[itemNumber].price}€`;
      itemPrice.classList.add("menuPrice");
      divItem.appendChild(itemPrice);

      let menuDescription = document.createElement("p");
      menuDescription.textContent = `${tacoItems[itemNumber].description}`;
      menuDescription.classList.add("menuDescription");
      divItem.appendChild(menuDescription);

      let removeButton = document.createElement("button");
      removeButton.textContent = "-";
      removeButton.classList.add("notePadRemovebtn");
      removeButton.onclick = function () {
        removeItemFromNotepad(index);
      };
      divItem.appendChild(removeButton);
    });
  }
}

function addItemToNotepad(itemNumber) {
  notepad.push(itemNumber);
  localStorage.setItem("notepad", JSON.stringify(notepad));
  renderNotepad();
}

function removeItemFromNotepad(index) {
  notepad.splice(index, 1);
  localStorage.setItem("notepad", JSON.stringify(notepad));
  renderNotepad();
}

function initialiseNotepad() {
  notepad = JSON.parse(localStorage.getItem("notepad")) || [];
  renderNotepad();
}
