(function(){
	var video = document.getElementById('video'),
			vendorUrl = window.URL || window.webkitURL;


	navigator.getMedia = navigator.getUserMedia || 
												navigator.mediaDevices.webkitGetUserMedia ||
												navigator.mediaDevices.getUserMedia ||
												navigator.mediaDevices.msGetuserMedia;
	
	navigator.getMedia({
		video: true,
		audio: false
	}, function(stream){
		video.srcObject=stream;
		video.play();
	}, function(error){})
})();