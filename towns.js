$(document).ready(function() {
	const deleteBtn = document.getElementById("btnDelete")
	deleteBtn.addEventListener("click",deleteTown)

	const addButton = document.getElementById("btnAdd")
	addButton.addEventListener("click",addTown)
});

/*
$(document).ready(function() {...})

- This is a jQuery method that ensures the enclosed code runs only after the DOM (Document Object Model) is fully loaded.
  It prevents any code from executing before the HTML elements are available for manipulation.

*/

function deleteTown() {

	console.log('DeleteTown invoked!')
	let townName = $('#townName').val();
	$('#townName').val('');
	let removed = false;
	for (let option of $('#towns option')) {
		if (option.textContent == townName) {
			removed = true;
			option.remove();
		}
	}
	if (removed)
		$('#result').text(townName + " deleted.");
	else
		$('#result').text(townName + " not found.");
}


function addTown() {
	const town = document.getElementById("addTown").value
	console.log('Town is:', town)

	if (town !== "") {
		let option = document.createElement('option')
		option.innerHTML = town
		const selectEl = document.getElementById('towns')
		selectEl.appendChild(option)
		document.getElementById("addTown").value = ""
		console.log(document.querySelector("div#result").innerHTML)
		document.querySelector("div#result").innerHTML = `${town} has been successfully added!`
	}
}
