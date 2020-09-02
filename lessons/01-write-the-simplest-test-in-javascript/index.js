let players = [
  { name: "Alex Morgan", country: "United States", searches: 100 },
  { name: "Megan Rapinoe", country: "United States", searches: 99 },
  { name: "Marta", country: "Brazil", searches: 18 },
  { name: "Rose Lavelle", country: "United States", searches: 11 },
  { name: "Carli Lloyd", country: "United States", searches: 9 },
  { name: "Julie Ertz", country: "United States", searches: 8 },
  { name: "Christen Press", country: "United States", searches: 8 },
  { name: "Kelley O'Hara", country: "United States", searches: 8 },
  { name: "Tobin Heath", country: "United States", searches: 7 },
  { name: "Wendie Renard", country: "France", searches: 7 },
  { name: "Kosovare Asllani", country: "Sweden", searches: 6 },
  { name: "Lieke Martens", country: "Netherlands", searches: 6 },
  { name: "Amandine Henry", country: "France", searches: 5 },
  { name: "Ali Krieger", country: "United States", searches: 5 },
  { name: "Mallory Pugh", country: "United States", searches: 4 },
  { name: "Samantha Kerr", country: "Australia", searches: 4 },
  { name: "Christiane Endler", country: "Chile", searches: 4 },
  { name: "Daniëlle van de Donk", country: "Netherlands", searches: 4 },
  { name: "Lucy Bronze", country: "England", searches: 4 },
  { name: "Ashlyn Harris", country: "United States", searches: 4 },
  { name: "Eugénie Le Sommer", country: "France", searches: 4 },
  { name: "Jackie Groenen", country: "Netherlands", searches: 4 },
  { name: "Abby Dahlkemper", country: "United States", searches: 3 },
  { name: "Steph Houghton", country: "England", searches: 3 },
  { name: "Vivianne Miedema", country: "Netherlands", searches: 3 },
  { name: "Barbara Bonansea", country: "Italy", searches: 3 },
  { name: "Giulia Gwinn", country: "Germany", searches: 3 },
  { name: "Shanice van de Sanden", country: "Netherlands", searches: 3 },
  { name: "Cristiane Rozeira", country: "Brazil", searches: 3 },
  { name: "Alex Greenwood", country: "England", searches: 3 },
  { name: "Bárbara Micheline do Monte Barbosa", country: "Brazil", searches: 2},
  { name: "Alexandra Long", country: "United States", searches: 2 },
  { name: "Alyssa Naeher", country: "United States", searches: 2 },
  { name: "Gaëtane Thiney", country: "France", searches: 2 },
  { name: "Formiga", country: "Brazil", searches: 2 },
  { name: "Sari van Veenendaal", country: "Netherlands", searches: 2 },
  { name: "Sakina Karchaoui", country: "France", searches: 2 },
  { name: "Valérie Gauvin", country: "France", searches: 2 },
  { name: "Crystal Dunn", country: "United States", searches: 2 },
  { name: "Lindsey Horan", country: "United States", searches: 2 },
  { name: "Millie Bright", country: "England", searches: 2 },
  { name: "Sofia Jakobsson", country: "Sweden", searches: 2 },
  { name: "Sara Gama", country: "Italy", searches: 2 },
  { name: "Amel Majri", country: "France", searches: 2 },
  { name: "Marion Torrent", country: "France", searches: 2 },
  { name: "Toni Duggan", country: "England", searches: 2 },
  { name: "Sara Däbritz", country: "Germany", searches: 2 },
  { name: "Dzsenifer Marozsán", country: "Germany", searches: 2 },
  { name: "Delphine Cascarino", country: "France", searches: 2 },
  { name: "Laura Giuliani", country: "Italy", searches: 1 },
  { name: "Jill Roord", country: "Netherlands", searches: 1 },
  { name: "Sherida Spitse", country: "Netherlands", searches: 1 },
  { name: "Nikita Parris", country: "England", searches: 1 },
  { name: "Sam Mewis", country: "United States", searches: 1 },
  { name: "Tamires Cássia Dias Gomes", country: "Brazil", searches: 1 },
  { name: "Christine Sinclair", country: "Canada", searches: 1 },
  { name: "Stina Blackstenius", country: "Sweden", searches: 1 },
  { name: "Rachel Daly", country: "England", searches: 1 },
  { name: "Sarah Bouhaddi", country: "France", searches: 1 },
  { name: "Magdalena Eriksson", country: "Sweden", searches: 1 },
  { name: "Débora Cristiane de Oliveira", country: "Brazil", searches: 1 },
  { name: "Caroline Seger", country: "Sweden", searches: 1 },
  { name: "Valentina Giacinti", country: "Italy", searches: 1 },
  { name: "Becky Sauerbrunn", country: "United States", searches: 1 },
  { name: "Nilla Fischer", country: "Sweden", searches: 1 },
  { name: "Cristiana Girelli", country: "Italy", searches: 1 },
  { name: "Jennifer Hermoso", country: "Spain", searches: 1 },
  { name: "Fran Kirby", country: "England", searches: 1 },
  { name: "Manuela Giugliano", country: "Italy", searches: 1 },
  { name: "Lina Hurtig", country: "Sweden", searches: 1 },
  { name: "Ellen White", country: "England", searches: 1 },
  { name: "Hedvig Lindahl", country: "Sweden", searches: 1 },
  { name: "Fridolina Rolfö", country: "Sweden", searches: 1 },
  { name: "Alexandra Popp", country: "Germany", searches: 1 },
  { name: "Jill Scott", country: "England", searches: 1 },
  { name: "Karen Carney", country: "England", searches: 1 },
  { name: "María Pilar León", country: "Spain", searches: 1 },
  { name: "Aurora Galli", country: "Italy", searches: 1 },
  { name: "Martina Rosucci", country: "Italy", searches: 1 },
  { name: "Beth Mead", country: "England", searches: 1 },
  { name: "Andressa Alves da Silva", country: "Brazil", searches: 1 },
  { name: "Caroline Graham Hansen", country: "Norway", searches: 1 },
  { name: "Estefanía Banini", country: "Argentina", searches: 1 },
  { name: "Griedge Mbock Bathy", country: "France", searches: 1 },
  { name: "Merel van Dongen", country: "Netherlands", searches: 1 },
  { name: "Kadidiatou Diani", country: "France", searches: 1 },
  { name: "Andressa Cavalari Machry", country: "Brazil", searches: 1 },
  { name: "Alia Guagni", country: "Italy", searches: 1 },
  { name: "Lena Goeßling", country: "Germany", searches: 1 },
  { name: "Lineth Beerensteyn", country: "Netherlands", searches: 1 },
  { name: "Stefanie van der Gragt", country: "Netherlands", searches: 1 },
  { name: "Jodie Taylor", country: "England", searches: 1 },
  { name: "Melanie Leupolz", country: "Germany", searches: 1 },
  { name: "Elin Rubensson", country: "Sweden", searches: 1 },
  { name: "Morgan Brian", country: "United States", searches: 1 },
  { name: "Kika van Es", country: "Netherlands", searches: 1 },
  { name: "Ellie Carpenter", country: "Australia", searches: 1 },
  { name: "Lina Magull", country: "Germany", searches: 1 },
  { name: "Karen Bardsley", country: "England", searches: 1 },
  { name: "Jordyn Huitema", country: "Canada", searches: 1 },
  { name: "Tierna Davidson", country: "United States", searches: 1 }
];

function createBox(playerObj, i) {
  let box = document.createElement("div");
  let ul = document.createElement("ul");
  let playername = document.createElement("li");
  let country = document.createElement("li");
  let searches = document.createElement("li");
  playername.textContent = `player: ${playerObj.name}`;
  country.textContent = `country: ${playerObj.country}`;
  searches.textContent = `searches: ${playerObj.searches}`;
  ul.append(playername, country, searches);
  box.classList.add("box");
  box.appendChild(ul);
  return carouselContainer.appendChild(box);
}

function createCardList(playerList) {
  let cardList;
  cardList = playerList.map((player, i) => createBox(player, i));
  return cardList;
}

const [cardList] = createCardList(players);

// const pList=document.querySelector('#carouselContainer').children
// console.log("plistnumber[1]=>",pList)

/*
create range slider for carousel card height and width
*/

//find all cards
document.querySelectorAll(".box");
let sliderBox;
let sliderWidth;
let newSliderWidth;
let sliderWidthDataList;
let widthSliderLabel,widthSlider
sliderBox = document.createElement("div");
sliderBox.style = `
width:100%;
height:auto;
border:.4rem solid #0dd777;
padding:.5rem;
margin:0 auto;
display:flex;
justify-content:space-evenly;
align-items:center;
`
 widthSliderLabel = document.createElement('label');
 widthSliderLabel.textContent = "card width";
 widthSlider = document.createElement("input");

widthSlider.prepend(widthSliderLabel);
sliderWidthDataList = document.createElement("datalist");
// sliderWidthDataList.id='sliderWidthDataList';
sliderWidthDataList.setAttribute("id", "sliderWidthDataList");
sliderWidthDataList.setAttribute("name", "sliderWidthDataList");
sliderWidthDataList.setAttribute("type", "datalist");

let dl = [75, 150, 225, 300, 375, 450, 525, 600, 675, 750];
let j;
dl.map((el, i) => {
  j = el;
  el = document.createElement("option");
  el.textContent = dl[i];
  el.setAttribute("label", j);
  return sliderWidthDataList.append(el);
});

let sliderViewBox = document.createElement("div");
sliderViewBox.textContent = widthSlider.value;
sliderViewBox.classList.add("viewBox");
sliderViewBox.textContent = "75";
widthSliderLabel.style = `
font-size:1.6rem;
font-weight:400;
white-space:nowrap;
`;

widthSlider.setAttribute("type", "range");
widthSlider.setAttribute("min", 75);
widthSlider.setAttribute("max", 750);
widthSlider.setAttribute("value", 75);
widthSlider.id = "widthSlider";
widthSlider.step = "75";
widthSlider.setAttribute("list", "sliderWidthDataList");

controls.append(sliderBox);

let sliderBoxLeft = document.createElement("div");
let sliderBoxRight = document.createElement("div");
sliderBoxRight.classList.add("range");
sliderWidthDataList.classList.add("sliderticks");
// widthSlider.classList.add('slider')
sliderBox.append(sliderBoxLeft);
sliderBoxLeft.style = `
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:flex-start;
width:25%;
height:100px;
border:black solid .1rem;
padding:.5rem;
margin:.5rem;
`;
sliderBox.append(sliderBoxRight);
sliderBoxRight.style = `
width:auto;
height:100px;
border:black solid .1rem;
padding:.2rem;
`;

sliderBoxLeft.append(widthSliderLabel);
sliderBoxLeft.append(sliderViewBox);

sliderBoxRight.append(sliderWidthDataList);
sliderBoxRight.append(widthSlider);
sliderWidthDataList.style = `
border:.1rem solid black;
width:100%;
height:30%;
padding:2rem;
margin:.1rem;
`;

// document.querySelectorAll(".__range-step").forEach(function(ctrl) {
// 	var el = ctrl.querySelector('input');
// 	var output = ctrl.querySelector('output');
// 	var newPoint, newPlace, offset;
// 	el.oninput =function(){
// 		// colorize step options
// 		ctrl.querySelectorAll("option").forEach(function(opt) {
// 			if(opt.value<=el.valueAsNumber)
// 				opt.style.backgroundColor = '#48530d';
// 			else
// 				opt.style.backgroundColor = '#a4b162';
// 		});
// 	};
// 	el.oninput();
// });
widthSlider.addEventListener("change", selectCellWidth);
widthSlider.addEventListener("input", selectCellWidth);

function selectCellWidth(event) {
  let { value } = widthSlider;
  value = event.target.value;
  sliderViewBox.textContent = value;
  let newSliderWidth = value;
  console.log("qdqd=====>", { value });
  let cells = document.querySelectorAll(".box");
  //set each box width to match slider current value
  cells.forEach((cellWidth) => (cellWidth.style.width = `${value}px`));

  return newSliderWidth;
}

console.log(
  "widthSlider.value",
  widthSlider.value,
  "heresliderwidth",
  "newSliderWidth",
  newSliderWidth
);

/* 
define variables / constants of
- carousel           
-- #carouselContainer
 &&
- carousel cells
-- #boxes

*/

let selectedIndex = 0;
let cellWidth = `${Number(sliderWidth)}px`;
// cellHeight=400;
// let cellHeight=Number(sliderWidth);
let cellHeight = document.querySelector(".box").offsetHeight || clientHeight;
console.log({ cellHeight });

let cellCount = players.length;
let cells = document.querySelectorAll(".box");

let cellSize;
cellSize = cellHeight;
let radius;
radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
let theta;
theta = 359.9 / cellCount;
let angle;
let i;
let cellAngle = theta * i;

function rotateCarousel() {
  let angle = theta * selectedIndex * -1;
  console.log({ angle }, { theta }, { selectedIndex });

  carouselContainer.style.transform = `translateZ(-${radius}px) rotateX(${angle}deg)`;
  console.log("style:", carouselContainer.getAttribute("style"));
}

prev.addEventListener("click", function () {
  console.log({ selectedIndex }, "prev");
  console.log("sliderwidth:", { sliderWidth }, "fromprevBtnClick");
  selectedIndex--;
  rotateCarousel();
});

console.log({ next });

next.addEventListener("click", function () {
  console.log({ selectedIndex }, "next");
  selectedIndex += 1;
  rotateCarousel();
});

function setCarousel() {
  console.log(
    { radius },
    { cellSize },
    { cellCount },
    { cellHeight },
    { sliderWidth }
  );

  for (let i = 0; i < cells.length; i++) {
    let cell = cells[i];
    if (i < cellCount) {
      cell.style.opacity = 1;
      cellAngle = theta * i;
      cell.style.transform = `translate3d(0,0,0)rotate3d(0,01,0,02deg)rotateX(${cellAngle}deg) translateZ(${radius}px)`;
    } else {
      cell.style.opacity = 0.1;
      cell.style.transform = "none";
    }
  }
  rotateCarousel();
}

setCarousel();

// 360 degrees in a circle
//100 cards
// 3.6 degrees apart
//i*3.6
//perspective 1000px
//next button
//--transform/translateX
//--currentPos+=3.6deg
//prev button
//--
