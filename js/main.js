const email = document.querySelector(".email");
const warn = document.querySelector(".warn");
const input = document.querySelector(".input img");
const redBorder = document.querySelector(".redBorder");

function valid() {
	let valEmail = email.value;

	const validEmail =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let data = validEmail.test(valEmail);

	if (!data) {
		redBorder.style.border = "2px solid red";
		input.style.display = "block";
		warn.style.display = "block";
	} else {
		redBorder.style.border = "1px solid grey";
		input.style.display = "none";
		warn.style.display = "none";
	}
}
