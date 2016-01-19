class Slider  {
	constructor(id='slider') {
		this.sliderDOM = document.getElementById(id);
		this.spinner = this.sliderDOM.childNodes[1].childNodes[1];
		this.imagesSrc = [];
		this._getImagesData();
		this.iterator = 0;
		this._play();
		this.interval = setInterval(()=>this._play(),4000);
	}
	_play(){
		if (this.iterator===this.imagesSrc.length)
			this.iterator=0;
		let mainChild = this.sliderDOM.childNodes[1].childNodes[1];

		let img = new Image();
		img.src = this.imagesSrc[this.iterator];
		img.className = "slider-img img-responsive"
		// img.style.opacity = 0;
		if (mainChild.tagName==="IMG"/* && img.complete===false*/) 
			this._replaceImg();
		
		img.onload = ()=>{
		let elem = this.sliderDOM.childNodes[1].childNodes[1];
		if (elem.tagName!=="IMG")
			this._replaceSpinner(img);
		else
			elem.setAttribute('src', img.src);
		setTimeout(()=>img.style.opacity = 1,50);
		};
		this.iterator++;
	}
	_getImagesData(){
		this.imagesSrc = [];
		let images = this.sliderDOM.querySelectorAll('.slider-img-data');
		for (var i = 0; i < images.length; i++) {
			this.imagesSrc.push(images[i].getAttribute('data-src'));
		}
	}
	_replaceImg(){
		this.sliderDOM.childNodes[1].replaceChild(this.spinner,this.sliderDOM.childNodes[1].childNodes[1]);
	}
	_replaceSpinner(img){
		this.sliderDOM.childNodes[1].replaceChild(img,this.spinner);
	}
	getDOM()
	{
		return this.sliderDOM;
	}
	
}

let slider = new Slider();
// console.log(slider.getId());