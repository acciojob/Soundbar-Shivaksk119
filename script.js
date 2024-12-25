//your JS code here. If required.

let buttons = document.querySelectorAll('.btn');

buttons.forEach((button)=>{
	button.addEventListener('click',()=>{
		let track = button.innerText;
		let audio = new Audio(`./sounds/${track}`);
		audio.play();
	})
})
