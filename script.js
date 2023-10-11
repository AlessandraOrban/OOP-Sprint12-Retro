import Car from "./car.js";
const carList = [
    new Car("Honda", "Civic", 2016, 12000, true), 
    new Car("Ford", "Mustang", 2018, 8000, true), 
    new Car("Toyota", "Camry", 2011, 45000, false)
];

console.log(carList[1].display());

const carListContainer = document.getElementById("car-container");
// console.log(carListContainer);

for(let i=0; i<carList.length; i++) {
    const car = carList[i];

    // Am creat un container pentru fiecare masina (poza+detalii)
    const carContainer = document.createElement("div");
    carContainer.classList.add("car-cont");

   // Am creat un element de tip imagine
   const carImage = document.createElement("img");
   carImage.src = `./images/masina${i + 1}.jpg`;
   carImage.alt = `Masina cu nr ${i + 1}`;
   carImage.classList.add("car-image");

   // Am creat containerul cu detalii pentru masina
   const carDetails = document.createElement("div");
   carDetails.classList.add("car-details");

//    Cream elemente pentru fiecare detaliu
const marcaEl = document.createElement("p");
const modelEl = document.createElement("p");
const anLansareEl = document.createElement("p");
const kilometrajEl = document.createElement("p");
const esteAutomataEl = document.createElement("p");


// punem text in fiecare p
marcaEl.textContent = `Marca: ${car.marca}`;
modelEl.textContent = `Model: ${car.model}`;
anLansareEl.textContent = `An lansare: ${car.anLansare}`;
kilometrajEl.textContent = `Kilometraj: ${car.kilometraj}`;
esteAutomataEl.textContent = `Este automata: ${car.esteAutomata ? "Da" : "Nu"}`;


// atasam la html
carDetails.appendChild(marcaEl);
carDetails.appendChild(modelEl);
carDetails.appendChild(anLansareEl);
carDetails.appendChild(kilometrajEl);
carDetails.appendChild(esteAutomataEl);

carContainer.appendChild(carImage);
carContainer.appendChild(carDetails);

carListContainer.appendChild(carContainer);
}