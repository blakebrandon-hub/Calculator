const numbers = document.getElementsByClassName("button-number");
const operands = document.getElementsByClassName("button-operand");
const equals = document.getElementsByClassName("equals");
const clear = document.getElementsByClassName("clear");
const del = document.getElementById("delete");
var current = document.getElementById('current')
var previous = document.getElementById('previous')
var total = ''

for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener("click", append)
}

for (var i = 0; i < operands.length; i++) {
	operands[i].addEventListener("click", append)
}

equals[0].addEventListener("click", evaluate)
clear[0].addEventListener("click", allClear)
del.addEventListener("click", delButton)

function evaluate(){
	if (current.innerText != 0){
		previous.innerText = total
		current.innerText = eval(current.innerText)	
		previous.innerText += ' ='
		total = eval(current.innerText)		
	}
}

function append(){
	if (this.innerText != '='){
		num = this.innerText
		total += num
		current.innerText = total	
	}
}

function allClear(){
	current.innerText = 0
	previous.innerText = ''
	total = ''
}

function delButton(){
	if (String(total).length > 0){
		total = current.innerText.slice(0,-1)
		current.innerText = current.innerText.slice(0,-1)
		previous.innerText = ''	
	}

}
