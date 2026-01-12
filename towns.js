$(document).ready(function() {
	const deleteBtn = document.getElementById("btnDelete")
	deleteBtn.addEventListener("click",deleteTown)

	const addButton = document.getElementById("btnAdd")
	addButton.addEventListener("click",addTown)

	const shuffleBtn = document.getElementById("btnShuffle")
	shuffleBtn.addEventListener("click",shuffleTown)
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

// Shuffler

function shuffleTown() {
	console.log('ShuffleTown invoked!')
	let towns = document.querySelectorAll("#towns option")
	let array = Array.from(towns)
	let townArray = array.map((el) => el.innerHTML)

	console.log('Towns are:', townArray)

		function shuffleArray(townArray){
			for (let i = townArray.length - 1; i > 0; i--) {
				// i = 3
				const j = Math.floor(Math.random() * (i+1));
				// j = 2
				const oldElement = townArray[i] //townArray[3] "Bourgas"
				townArray[i] = townArray[j]
				// townArray[3] = townArray[2]

				townArray[j] = oldElement
				// townArray[2] = townArray[3]
				
			}
		}
	
	shuffleArray(townArray)
	console.log('Shuffled towns are:', ...townArray)
	
	let selectList = document.getElementById('towns')
	selectList.replaceChildren()
	
	townArray.forEach((town) => {
		const option = document.createElement("option")
		option.innerHTML = town
		selectList.appendChild(option)
	})

	// ------------------------------------------------
	const resultEl = document.getElementById("result")
	resultEl.innerHTML = "Towns shuffled"
	
	setTimeout(() => {
		resultEl.innerHTML = ""
	},3000)
}

