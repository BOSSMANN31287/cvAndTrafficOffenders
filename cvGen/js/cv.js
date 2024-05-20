const name = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const qualificationsList = document.getElementById('qualifications-list');
const certificatesList = document.getElementById('certificates-list');

// Add event listeners to input fields
document.getElementById('name-input').addEventListener('input', (e) => {
	name.textContent = e.target.value;
});

document.getElementById('age-input').addEventListener('input', (e) => {
	age.textContent = e.target.value;
});

document.getElementById('gender-input').addEventListener('input', (e) => {
	gender.textContent = e.target.value;
});

// Add qualifications and certificates sections dynamically
function addQualification() {
	const qualificationItem = document.createElement('li');
	qualificationItem.textContent = document.getElementById('qualification-input').value;
	qualificationsList.appendChild(qualificationItem);
	document.getElementById('qualification-input').value = '';
}

function addCertificate() {
	const certificateItem = document.createElement('li');
	certificateItem.textContent = document.getElementById('certificate-input').value;
	certificatesList.appendChild(certificateItem);
	document.getElementById('certificate-input').value = '';
}
