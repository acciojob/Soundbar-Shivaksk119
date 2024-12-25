//your JS code here. If required.

let buttons = document.querySelectorAll('.btn');

buttons.forEach((button)=>{
	button.addEventListener('click',()=>{
		let track = button.getAttribute('data-sound');
		let audio = document.getElementById(track);
		if(audio.paused){
			audio.play();
		}
		else{
			audio.pause();
			audio.currentTime = 0;
		}
	})
})
