// selectors
const btn = document.querySelector(".sub-btn");
const table = document.querySelector(".table");
const rContainer = document.querySelector('.row-container')
// Events
document.addEventListener('DOMContentLoaded', () => {
	const tr = rContainer.createElement("tr");
	tr.classList.add("oneContainer");

	tr.innerHTML = `<td><input type="text" class="inp" /></td>
          <td><input type="text" class="inp" /></td>
          <td><input type="text" class="inp" /></td>
          <td><input type="text" class="inp" /></td>
          <td><input type="text" class="inp" /></td>
          `;
	rContainer.appendChild(tr);
})
// CLICK EVENT
btn.addEventListener("click", addRow);
const input = document.querySelectorAll(".inp");
// Funtions
function addRow() {
	let addRow = false;
	for (let i = 0; input.length > 0; i++) {
		if (input[i].value !== "") {
			addRow = true;
			break;
		}
	}

	if (addRow === true) {
		// const tr = document.createElement("tr");
		// tr.classList.add("row-container");

		// tr.innerHTML = `  <td><input type="text" class="inp" /></td>
		//       <td><input type="text" class="inp" /></td>
		//       <td><input type="text" class="inp" /></td>
		//       <td><input type="text" class="inp" /></td>
		//       <td><input type="text" class="inp" /></td>
		//       <td><input type="text" class="inp" /></td>
		//       <td><input type="text" class="inp" /></td>
		//       <td><input type="text" class="inp" /></td>`;

		// table.appendChild(tr);
	}
}
