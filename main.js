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
		let c = document.getElementsByClassName('cardSlider');

		let featchCard = (i) => {
			let l = c[i].getAttribute('data-set');
			let	arrowR = document.createElement('span');
			arrowR.setAttribute('id','ar-' + i);
			arrowR.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2DA936" width="20px" height="20px">
									<path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
								</svg>`;

			let	arrowL = document.createElement('span');
			arrowL.setAttribute('id','al-' + i);
			arrowL.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2DA936" width="20px" height="20px">
									<path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
								</svg>`;	
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
				card += `<div class="cards_wrapper">`;
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
				card += `</div>`;
				card += `<div class="arrows_wrapper">
							<div class="al-btn-${i}"></div>
							<div class="ar-btn-${i}"></div>
						</div>`;	
				c[i].innerHTML = card;
				document.querySelector('.al-btn-' + i).appendChild(arrowL);
				document.querySelector('.ar-btn-' + i).appendChild(arrowR);
			});

		}
		//Initial featchCard 
		Array.prototype.forEach.call(c, function(c, i) {
			featchCard(i);
		});
		
	})();

	
});

