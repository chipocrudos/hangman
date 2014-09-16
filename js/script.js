
var letter = {
	65: "A",
	66: "B",
	67: "C",
	68: "D",
	69: "E",
	70: "F",
	71: "G",
	72: "H",
	73: "I",
	74: "J",
	75: "K",
	76: "L",
	77: "M",
	78: "N",
	79: "O",
	80: "P",
	81: "Q",
	82: "R",
	83: "S",
	84: "T",
	85: "U",
	86: "V",
	87: "W",
	88: "X",
	89: "Y",
	90: "Z",
	192: "Ñ"
}

if ( ! localStorage.games ){
	localStorage.setItem('win', 0);
	localStorage.setItem('losse', 0);
	localStorage.setItem('games', 0);
}

var score = {
	"win": Number(localStorage.win),
	"losse": Number(localStorage.losse),
	"games": Number(localStorage.games),
}

var quiz = {
	word: "Ahorcado",
	try: 0,
	spell: [],
	hiden: "",
	correct: 0,
	total: 0,
	hits: [],
	find: function(search){
		quiz.hiden = ""
		if ( quiz.try - quiz.correct < 5 ) {
			quiz.total = 0;

			quiz.try += 1;
			for ( var index in quiz.spell ){
				if (search == quiz.spell[index]){
					quiz.hits.push(search);
					quiz.correct += 1;
					break;
				}
			}

			for ( var index in quiz.spell ){
				var addunderscore = false;
				for ( var indey in quiz.hits ){
					if ( quiz.spell[index] == quiz.hits[indey] ){
						addunderscore = true
						break;
					}
				}
				if (addunderscore){
					quiz.hiden += quiz.spell[index] + " ";
					quiz.total += 1; 
				} else {
					quiz.hiden += "_ ";
				}
			}
			var word = document.getElementById('block-word');
			word.innerHTML = quiz.hiden;
			drawhangman(quiz.try - quiz.correct);

		} else {
			drawhangman(6);
			drawword(0);
			alert("Has perdido");
			score.losse += 1;
			localStorage.setItem('losse', score.losse);
		}
		if ( quiz.spell.length == quiz.total ){
			score.win += 1;
			localStorage.setItem('win', score.win);
			drawhangman(0);
			drawword(1);
			alert("Felicidades has Ganado");
			
		};
	}
}

function normalize(normalword) {
	normalword = normalword.toUpperCase();
	normalword = normalword.replace(/[Ã,À,Á,Ä,Â]/g, 'A');
	normalword = normalword.replace(/[È,É,Ë,Ê]/g, 'E');
	normalword = normalword.replace(/[Ì,Í,Ï,Î]/g, 'I');
	normalword = normalword.replace(/[Ò,Ó,Ö,Ô]/g, 'O');
	normalword = normalword.replace(/[Ù,Ú,Ü,Û]/g, 'U');
	return normalword
}

function word(){
	selected = Math.floor((Math.random() * words.length) + 1);
	quiz.word = words[selected];
	quiz.spell = normalize(quiz.word).split("");
	quiz.hiden = normalize(quiz.word).replace(/\w/g, "_ ");
	quiz.hits = []
	quiz.try = 0;
	quiz.correct = 0;
	drawhangman(0);
	var word = document.getElementById('block-word');
	word.innerHTML = quiz.hiden;
}

function initializebutton(){
	window.addEventListener("keydown", keypress);
	var selectors = document.getElementsByClassName('letter');
	for ( var index in  selectors) {
		selectors[index].onclick=buttonpress;
	}
	document.getElementById("restartbutton").onclick=restartbutton;
}


function keypress(event){
	if ( event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode == 192 ){
		disablebutton(letter[event.keyCode]);
	}
}

function buttonpress(){
	disablebutton(this.value)
}

function disablebutton(key) {
	if ( quiz.spell.length ) {
		var element = document.getElementById(key);
		element.disabled = true;
		quiz.find(key);
	}
}

function restartbutton() {
	var selectors = document.getElementsByClassName('letter');
	for ( var index in  selectors) {
		selectors[index].disabled = false;
		selectors[index].onclick=buttonpress;
	}
	score.games += 1;
	localStorage.setItem('games', score.games);
	word();
}


window.addEventListener("load", function(){
	initializebutton();
});