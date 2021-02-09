/* 
	Card Slider
	Author: Joseph Liao
	Date: 02/09/2021
*/

var ready = (callback) => {
	  if (document.readyState != "loading") callback();
	  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
	(function cardSlider(){
		let t= document.getElementsByClassName('cardSlider')[0];
			
			
		let featchCard = () => {
			//Get Card JSon Data
			var gJson = function(file, callback) {
				var xml = new XMLHttpRequest();
				xml.overrideMimeType("application/json");
				xml.open("GET", file, true);
				xml.onreadystatechange = function() {
					if (xml.readyState === 4 && xml.status == "200") {
						callback(xml.responseText);
					}
				}
				xml.send(null);
			}

			//Get Dummy Card JSON Feed
			gJson('http://127.0.0.1:3000/cards', function(data){
				let d= JSON.parse(data);
					console.log(d);
			});

		}
		

		featchCard();
	})();

	
});

