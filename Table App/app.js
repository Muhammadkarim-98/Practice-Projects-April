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
function addRow() {
	const lastRow = tableBody.lastElementChild;
	const inpValue = lastRow.getElementsByClassName("inp");
	for (let i = 0; i < inpValue.length; i++) {
		if (inpValue[i].value === '') {
			// console.log(inpValue[i].value)
			alert("Please do'nt skip any input!");
			break;
		} else {
			// tableBody.innerHTML += rowContainer;
			console.log('added')
			break;
		}
	}
}
