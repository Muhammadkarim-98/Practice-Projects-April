import data from "./data.js";
// Selectors
const tabContainer = document.querySelector(".tableContainer");
const headContainer = document.querySelector(".headCont");
const bodyContainer = document.querySelector(".bodyCont");

// Functions
function generateTh() {
  const tr = document.createElement("tr");
  headContainer.appendChild(tr);
  const keys = Object.keys(data[0]);
  for (let i = 0; i < keys.length; i++) {
    tr.innerHTML += `<th>${keys[i]}</th>`;
  }
}

function generateTd() {
  for (let x = 0; x < data.length; x++) {
    const tr = document.createElement("tr");
    const values = Object.values(data[x]);
    bodyContainer.append(tr);
    for (let i = 0; i < values.length; i++) {
      tr.innerHTML += `<td>${values[i]}</td>`
    }
  }
}

generateTh();
generateTd();
