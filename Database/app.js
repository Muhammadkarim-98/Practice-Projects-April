import data from "./data.js";
// Selectors
const headContainer = document.querySelector(".headCont");
const bodyContainer = document.querySelector(".bodyCont");
const inputEl = document.getElementById('input');
// Event
inputEl.addEventListener('keyup', generateSearch)
const thead = headContainer.getElementsByTagName('th');

// Functions
function generateSearch(event) {
  // event.preventDefault();
  const filter = inputEl.value.toUpperCase();
  const tr = bodyContainer.getElementsByTagName('tr');
  for (let i = 0; i < tr.length; i++) {
    const txtValue = tr[i].textContent;
    console.log(tr.length);
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      tr[i].style.display = '';
    } else { tr[i].style.display = 'none' }
  }
};

function generateTh() {
  const tr = document.createElement("tr");
  headContainer.appendChild(tr);
  const keys = Object.keys(data[0]);
  for (let i = 0; i < keys.length; i++) {
    tr.innerHTML += `<th>${keys[i]}</th>`;
  }
  console.log(thead[0].textContent)
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
