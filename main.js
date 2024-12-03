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
  mains:{
    one: {
    heading: "Al Pastor",
    price: 9,
    description:
      "Pork marinated with El Osos own Pastor adobo, grilled on the Trompo. Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
  two: {
    heading: "Al Pastor",
    price: 9,
    description:
      "Pork marinated with El Osos own Pastor adobo, grilled on the Trompo. Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
  three: {
    heading: "Chorizo",
    price: 10,
    description:
      "Minced pork seasoned with El Oso Chorizo Adobo. Corn Tortilla, Onions, Cilantro.",
  },
  four: {
    heading: "Campechano",
    price: 9,
    description:
      "Mix of Suadero and Chorizo meat. Corn Tortilla, Onions, Cilantro.",
  },
  five: {
    heading: " Alambre al Pastor",
    price: 14,
    description:
      "Marinated Pork, Poblano, Cheese, 4 Corn Tortilla, Onions, Cilantro, Pineapple.",
  },
  six: {
    heading: "Choriqueso",
    price: 10,
    description:
      "Minced pork seasoned with El Oso Chorizo Adobo, cheese, CornTortilla, Onions, Cilantro.",
  },
  seven: {
    heading: " Vegan Al Pastor",
    price: 10,
    description:
      " Pea-based protein marinated with El Oso's Vegan Pastor adobo, grilled on the Trompo. Corn Tortilla, Onions, Cilantro, Pineapple",
  },
}
dsserts:{
  one:{
    heading: "Pan De Muerto",
    price: 6,
    description:
      "  Soft, lightly sweetened bread with orange zest, anise, and a sugar topping.",
  }
  two:{
    heading: "Pan Dulce",
    price: 4,
    description:
      " Colorful, sweet Mexican bread with a soft, fluffy texture and a crumbly sugar topping. A breakfast or snack favorite.",
  }
}
};

// Item 1: Al Pastor
let tacoItemOneHeading = document.getElementById("tacoItemOneHeading");
let tacoItemOnePrice = document.getElementById("tacoItemOnePrice");
let tacoItemOneDescription = document.getElementById("tacoItemOneDescription");
let tacoItemOneButton = document.getElementById("tacoItemOneButton");

// Item 2: Suadero
let tacoItemTwoHeading = document.getElementById("tacoItemTwoHeading");
let tacoItemTwoPrice = document.getElementById("tacoItemTwoPrice");
let tacoItemTwoDescription = document.getElementById("tacoItemTwoDescription");
let tacoItemTwoButton = document.getElementById("tacoItemTwoButton");

// Item 3: Chorizo
let tacoItemThreeHeading = document.getElementById("tacoItemThreeHeading");
let tacoItemThreePrice = document.getElementById("tacoItemThreePrice");
let tacoItemThreeDescription = document.getElementById(
  "tacoItemThreeDescription"
);
let tacoItemThreeButton = document.getElementById("tacoItemThreeButton");

// Item 4: Campechano
let tacoItemFourHeading = document.getElementById("tacoItemFourHeading");
let tacoItemFourPrice = document.getElementById("tacoItemFourPrice");
let tacoItemFourDescription = document.getElementById(
  "tacoItemFourDescription"
);
let tacoItemFourButton = document.getElementById("tacoItemFourButton");

// Item 5: Alambre al Pastor
let tacoItemFiveHeading = document.getElementById("tacoItemFiveHeading");
let tacoItemFivePrice = document.getElementById("tacoItemFivePrice");
let tacoItemFiveDescription = document.getElementById(
  "tacoItemFiveDescription"
);
let tacoItemFiveButton = document.getElementById("tacoItemFiveButton");

// Item 6: Choriqueso
let tacoItemSixHeading = document.getElementById("tacoItemSixHeading");
let tacoItemSixPrice = document.getElementById("tacoItemSixPrice");
let tacoItemSixDescription = document.getElementById("tacoItemSixDescription");
let tacoItemSixButton = document.getElementById("tacoItemSixButton");

// Item 7: Vegan Al Pastor
let tacoItemSevenHeading = document.getElementById("tacoItemSevenHeading");
let tacoItemSevenPrice = document.getElementById("tacoItemSevenPrice");
let tacoItemSevenDescription = document.getElementById(
  "tacoItemSevenDescription"
);
let tacoItemSevenButton = document.getElementById("tacoItemSevenButton");



function tacoItemOne() {
  let newItemDiv = document.createElement("li");
    newItemDiv.className = "notepadTacoItem";
    newItemDiv.innerHTML = `
      <div class="itemDescription">
        <div class="round" id="selectItem">
          <input type="checkbox" checked id="checkbox" />
          <label for="checkbox"></label>
        </div>
        <h4 class="itemHeading">${tacoItems.mains.one.heading}</h4>
        <h5 class="menuPrice">${tacoItems.mains.one.price}€</h5>
        <p class="menuDescription">${tacoItems.mains.one.description}</p>
        <button class="notePadRemovebtn" onclick="removeBtn(this)">-</button>
      </div>
    `;
}

function tacoItemTwo() {}
function tacoItemThree() {}
function tacoItemFour() {}
function tacoItemFive() {}
function tacoItemSix() {}
function tacoItemSeven() {}
function tacoItemEight() {}

function removeBtn(element) {
  element.closest("li").remove();
}
