/* 
	Card Slider
	Author: Joseph Liao
	Date: 02/11/2021
*/
(function (){
	(function cardSlider(){
		let c = document.getElementsByClassName('cardSlider');
		let x = 328;
		// Featch Card
		let featchCard = (i) => {
			let l = c[i].getAttribute('data-set');
			let	arrowR = document.createElement('span');
			arrowR.setAttribute('id','ar-' + i);
			arrowR.setAttribute('data-testid','right-arrow');
			arrowR.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2DA936" width="20px" height="20px">
									<path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
								</svg>`;

			let	arrowL = document.createElement('span');
			arrowL.setAttribute('id','al-' + i);
			arrowL.setAttribute('data-testid','left-arrow');
			arrowL.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#2DA936" width="20px" height="20px">
									<path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
								</svg>`;	
			//  Get Card JSon Data
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

			//  Get Cards JSON Feed
			gJson('http://127.0.0.1:3000/cards', function(data){
				let d= JSON.parse(data),
					card = '';
					
				card += `<div class="cards_wrapper index-${i}" style="left: 0">`;

				for(let i=0; i<l; i++){
					card += `<div class="card card-${d[i].id}">
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

				let x = 1;

				// Left Arrow Button
				lBtn = (i) => {
					let eL =['click'];
					for(e of eL){
						arrowL.addEventListener(e, function(){ 
							var len2;
							(document.body.clientWidth >= 500)? len2 = l - 2 : len2 = l;
							if(x => 1 && x < len2){
								let len = x+1;
								for(let j=1; j < len; j++){
									let el = document.querySelector('.index-' + i);
									if(j < len2){
										let cardI = el.querySelector('.card-' + j);
										cardI.classList.remove('showA');
										cardI.classList.add('hideA');
										setTimeout(function(){
											cardI.classList.add('hide');
										}, 800)
									}
								}
								return x++;
							}
						}, false);
					}
				}
				lBtn(i);

				// Right Arrow Button
				rBtn = (i) => {
					let eL =['click'];
					
					for(e of eL){
						arrowR.addEventListener(e, function(){ 
							let el = document.querySelector('.index-' + i);
							if(x > 1){
								var j;
								if(document.body.clientWidth >= 500){
									(x > 2)? j = x - 2 : j = 1;
								} else {
									j = x - 1;
								}
								console.log(`j: ${j} x: ${x}`);
								let	cardI = el.querySelector('.card-' + j);
								if(cardI != null){
									cardI.classList.remove('hide');
									cardI.classList.remove('hideA');
									cardI.classList.add('showA');
									setTimeout(function(){cardI.classList.remove('showA');}, 800)
									return x--;
								}
							}
						}, false);
					}
				}
				rBtn(i);
			});



		}
		//Initial featchCard 
		Array.prototype.forEach.call(c, function(c, i) {featchCard(i);});
		
	})();
})();
