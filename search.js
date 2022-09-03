function searchWord() {
	let currentWord = document.getElementById('inputWord').value;
	if (myList.includes(currentWord) == true) {
		alert("We know this one already!");
	} else {
		alert("This is a new word!");
	}
	return false;
}
