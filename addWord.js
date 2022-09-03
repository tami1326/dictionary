const myList = new Array();
function addToList() {
	let currentWord = document.getElementById('inputWord').value;
	myList.push(currentWord);
	alert("Your word has been memorised!");
	return false;
}
