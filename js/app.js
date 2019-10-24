
var url = window.location.href;
var swLocation = "/ptsinaloa/sw.js";



if (navigator.serviceWorker){

if(url.includes('127.0.0.1')){
	swLocation = '/sw.js';
}

	navigator.serviceWorker.register(swLocation);
}