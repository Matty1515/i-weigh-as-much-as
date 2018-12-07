/*jshint esversion: 6 */
$(document).ready(() => {
// Simple getElementById test to see if the JavaScript has stopped working
document.getElementById('testTitle').innerHTML = "JavaScript is working!";
// Logs how far the page has been scrolled
window.addEventListener('scroll', function() {
	console.log(pageYOffset + 'px');
});

const textOutput = document.getElementById('textOutput');
const weightField = document.getElementById('weightField');

// factory function to create animal objects with name and weight as values
const animalFactory = (name, weight, notes, textColour, backColour) => {
	return {
		name,
		weight,
		notes,
		textColour,
		backColour
	};
};
// individual animals saved as objects with name and weight (in grams) as values
// add more common small animals
// to add images, create a new value in constructor (animalImage) and save every image with a name the same as the image name. Then do document.getElementById("div").src="./images/" + animalImage + ".png"
const hamsterObj = animalFactory("Hamster", 23, "The average weight of the common Roborovski hamster is between 20 and 25 grams", "#116476", "#f59e8c");
const guineaPigObj = animalFactory("Guinea Pig", 1050, "For a healthy adult male guinea pig, the average weight is between 0.9 and 1.2 kilograms", "#0b3f7e", "#fcc384");

function weightFunction() {
	const inputWeight = document.getElementById('weightField').value;
	
	// convert weight and save it as a variable
	const userWeight = inputWeight / 2;
	
	// choose a number at random and attach it to an animal object
	const randomNum = Math.floor(Math.random() * 6) + 1;
	if (randomNum <= 3) {
		printAnimalValues(hamsterObj);
	} else if (randomNum > 3) {
		printAnimalValues(guineaPigObj);
	}
	
	// print text relating to the chosen animal object
	function printAnimalValues(animalName) {
		if (userWeight === 0) {
			textOutput.innerHTML = `Please submit a valid weight.`;
		} else {
			textOutput.innerHTML = `You weigh the same as ${Math.round(userWeight / animalName.weight)} ${animalName.name}s. ${animalName.notes}. The text colour is ${animalName.textColour} and the background colour is ${animalName.backColour}`;
			//why the fuck doesn't this work? - because .css doesn't support 'color'. It's stupid I know, but that's just how it is
			$('#background-div').css('color', animalName.textColour);
			$('#background-div').css('background-color', animalName.backColour);
			$('#weightField').hide();
		}
	}
}

const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', weightFunction);

});