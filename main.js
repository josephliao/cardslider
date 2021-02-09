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
		let c = document.getElementsByClassName('cardSlider')[0];
		let l = c.getAttribute('data-set');
			console.log('l: ' + l);
			
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
				let d= JSON.parse(data),
					card = '';
				for(let i=0; i<l; i++){
					console.log(d[i].title);
					card += `<div class="card" id="${d[i].id}">
						<div class="imgWrapper">
							<img src="${d[i].image_url}" class="img">
						</div>
						<div class="card_content">
							<div class="title_wrapper">
								<div class="goHenry_logo"></div>
								<div class="card_header">
									<div class="title">${d[i].title}</div>
									<div class="subtitle">${d[i].subtitle}</div>
								</div>
							</div>
							<p>${d[i].text}</p>
							<a href="https://www.gohenry.com/uk/" target="_blank" class="learMore">Learn More</a>
						</div>
					</div>`
				}
					
				c.innerHTML = card;
			});

		}
		

		featchCard();
	})();

	
});

