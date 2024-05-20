let tableBody = document.getElementById("table-body");
let searchInput = document.getElementById("search");

// Retrieve data from local storage
let offenders = JSON.parse(localStorage.getItem("offenders")) || [];

// Display existing data in the table
offenders.forEach((offender) => {
  let tableRow = document.createElement("tr");
  let nameCell = document.createElement("td");
  nameCell.textContent = offender.name;
  let offenceCell = document.createElement("td");
  offenceCell.textContent = offender.offence;
  let ageCell = document.createElement("td");
  ageCell.textContent = offender.age
  let genderCell = document.createElement("td");
  genderCell.textContent = offender.gender;
  let actionCell = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  let editActionCell = document.createElement("td");
  let editCell = document.createElement("button");
  editCell.textContent = "Edit";
  deleteButton.onclick = () => deleteOffender(offender.name);
  editCell.onclick = () => editOffender(offender.name);
  actionCell.appendChild(deleteButton);
  tableRow.appendChild(nameCell);
  tableRow.appendChild(ageCell);
  tableRow.appendChild(genderCell);
  tableRow.appendChild(offenceCell);
  tableRow.appendChild(actionCell);
  tableRow.appendChild(editActionCell);
  tableBody.appendChild(tableRow);
});

function saveOffender() {
  let nameInput = document.getElementById("name");
  let offenceInput = document.getElementById("offence");
  let ageInput = document.getElementById("age");
  let genderInput = document.getElementById("gender");
  let name = nameInput.value;
  let offence = offenceInput.value;
  let age = ageInput.value;
  let gender = genderInput.value;
  nameInput.value = "";
  offenceInput.value = "";
  ageInput.value = "";
  genderInput.value = "";

  let offender = { name, offence, age, gender};
  offenders.push(offender);
  localStorage.setItem("offenders", JSON.stringify(offenders));

  let tableRow = document.createElement("tr");
  let nameCell = document.createElement("td");
  nameCell.textContent = name;
  let offenceCell = document.createElement("td");
  offenceCell.textContent = offence;
  let ageCell = document.createElement("td");
  ageCell.textContent = age;
  let genderCell = document.createElement("td");
  genderCell.textContent = gender;
  let actionCell = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  let editActionCell = document.createElement("td");
  let editCell = document.createElement("button");
  editCell.textContent = "Edit";
  deleteButton.onclick = () => deleteOffender(name);
  editCell.onclick = () => editOffender(offender.name);
  actionCell.appendChild(deleteButton);
  tableRow.appendChild(nameCell);
  tableRow.appendChild(ageCell);
  tableRow.appendChild(genderCell);
  tableRow.appendChild(offenceCell);
  tableRow.appendChild(actionCell);
  tableRow.appendChild(editActionCell);
  tableBody.appendChild(tableRow);
}

function searchOffender() {
  let searchValue = searchInput.value.toLowerCase();
  let tableRows = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < tableRows.length; i++) {
    let nameCell = tableRows[i].getElementsByTagName("td")[0];
    if (nameCell.textContent.toLowerCase().includes(searchValue)) {
      tableRows[i].style.display = "";
    } else {
      tableRows[i].style.display = "none";
    }
  }
}

function deleteOffender(name) {
  offenders = offenders.filter((offender) => offender.name !== name);
  localStorage.setItem("offenders", JSON.stringify(offenders));
  let tableRows = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < tableRows.length; i++) {
    let nameCell = tableRows[i].getElementsByTagName("td")[0];
    if (nameCell.textContent === name) {
      tableBody.removeChild(tableRows[i]);
      break;
    }
  }
}


function editOffender(element) {
	const row = element.parentNode.parentNode;
	const nameCell = row.cells[0];
	const offenceCell = row.cells[1];
	
	const nameInput = document.getElementById('name');
	const offenceInput = document.getElementById('offence');
	
	nameInput.value = nameCell.textContent;
	offenceInput.value = offenceCell.textContent;
	
	nameCell.textContent = '';
	offenceCell.textContent = '';
	
	const saveButton = document.createElement('button');
	saveButton.textContent = 'Save';
	saveButton.onclick = function() {
		const name = nameInput.value;
		const offence = offenceInput.value;
		
		if (name && offence) {
			nameCell.textContent = name;
			offenceCell.textContent = offence;
		} else {
			alert('Please enter both name and offence');
		}
	};
	
	row.appendChild(saveButton);
}
