import data from "./data.js";
// Selectors
const headContainer = document.querySelector(".headCont");
const bodyContainer = document.querySelector(".bodyCont");
const inputEl = document.getElementById('input');
const btn = document.querySelector('.btn');
// Event
inputEl.addEventListener('keyup', generateSearch)
// Functions
function generateSearch(event) {
  event.preventDefault();
  const filter = inputEl.value.toUpperCase();
  const td = document.getElementsByTagName('td');
  for (let i = 0; i < td.length; i++) {
    // Just pending.
  }
};

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





// event.preventDefault();
// for (let x = 0; x < data.length; x++) {
//   let name = data[x].name;
//   const inputVal = inputEl.value;
//   for (let i = 0; i < name.length; i++) {

//     console.log(name[i], inputEl[x])

//   }
// }
