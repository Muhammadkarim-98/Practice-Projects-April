// Selectors
const btn = document.querySelector(".sub-btn");
const tableBody = document.querySelector(".tabBody");
const rContainer = document.querySelector(".row-container");
// Events
const rowContainer = `<tr class="row-container">
          <td><input type="text" class="inp" /></td>
          <td><input type="text" class="inp" /></td>
          <td><input type="text" class="inp" /></td>
          <td><input type="text" class="inp" /></td>
          <td><input type="text" class="inp" /></td>
</tr>
`;
tableBody.innerHTML = rowContainer;
btn.addEventListener("click", addRow);
// Functions

let s = 0;

function addRow() {
	let lastRow = tableBody.lastElementChild;
	const inpValue = lastRow.getElementsByTagName("input");
	for (let i = 0; i < inpValue.length; i++) {
		if (!inpValue[i].value) {
			s++;
			alert("Please do'nt skip any input!");
			break;
		}
	}
	if (s === 0) {
		tableBody.innerHTML += rowContainer;
	}
	s = 0;
}
