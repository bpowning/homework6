var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

//play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

//pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate -= .1;
	console.log(video.playbackRate);
});

//speed up
document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate += .1;
	console.log(video.playbackRate);
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime);
	if ((video.duration - video.currentTime) > 5) {
		video.currentTime += 5
	}
	else {
		video.currentTime = 0 
	}
	console.log(video.currentTime);
});

//mute video
document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted)
	if (video.muted == false) {
		this.innerHTML = "Unmute";
		video.muted = true
	}
	else {
		this.innerHTML = "Mute";
		video.muted = false
	}
	console.log(video.muted)
});

//volume slider
document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Volume Slider");
	video.volume = this.value / 100;
	console.log(this.value);
	volume.innerHTML = this.value + "%";
})

//old school
document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
})

//original
document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
})