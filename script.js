let Input = document.getElementById('inputBox');
let ListContainer = document.getElementById('listContainer');



function addTask() {
	if (Input.value == '') {
		alert('Write Somethink')
	} else {
		let li = document.createElement("li");

		li.innerHTML = Input.value;
		ListContainer.appendChild(li);

		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);


	}
	Input.value = "";
	saveData()
	checkTodoList();
}
console.log(ListContainer)

ListContainer.addEventListener("click", function (e) {
	if (e.target.tagName === "LI") {
		e.target.classList.toggle("checked");
		saveData()
	} else if (e.target.tagName === "SPAN") {
		e.target.parentElement.remove();
		saveData()
		checkTodoList();
	}
}, false);

function checkTodoList() {
	if (ListContainer.innerHTML == '') {
		document.querySelector('.check').innerHTML = `( List is empty ! )`;
	} else {
		document.querySelector('.check').innerHTML = ``;
	}
}
function saveData() {
	localStorage.setItem("data", ListContainer.innerHTML);

}

function showTask() {
	ListContainer.innerHTML = localStorage.getItem("data");

}
showTask();
checkTodoList();