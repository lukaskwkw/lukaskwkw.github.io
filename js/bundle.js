(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = (function () {
	function Slider() {
		var _this = this;

		var id = arguments.length <= 0 || arguments[0] === undefined ? 'slider' : arguments[0];

		_classCallCheck(this, Slider);

		this.sliderDOM = document.getElementById(id);
		this.spinner = this.sliderDOM.childNodes[1].childNodes[1];
		this.imagesSrc = [];
		this._getImagesData();
		this.iterator = 0;
		this._play();
		this.interval = setInterval(function () {
			return _this._play();
		}, 4000);
		// console.log(this.imagesSrc);
	}

	_createClass(Slider, [{
		key: "_play",
		value: function _play() {
			var _this2 = this;

			if (this.iterator === this.imagesSrc.length) this.iterator = 0;
			var mainChild = this.sliderDOM.childNodes[1].childNodes[1];
			if (mainChild.tagName === "IMG") this._replaceImg();

			var img = new Image();
			img.src = this.imagesSrc[this.iterator];
			img.className = "slider-img img-responsive";
			// if (img.complete===false)
			img.onload = function () {
				_this2._replaceSpinner(img);
				// img.style.opacity = 1;
				setTimeout(function () {
					return img.style.opacity = 1;
				}, 50);
			};
			this.iterator++;
		}
	}, {
		key: "_getImagesData",
		value: function _getImagesData() {
			this.imagesSrc = [];
			var images = this.sliderDOM.querySelectorAll('.slider-img-data');
			for (var i = 0; i < images.length; i++) {
				this.imagesSrc.push(images[i].getAttribute('data-src'));
			}
		}
	}, {
		key: "_replaceImg",
		value: function _replaceImg() {
			this.sliderDOM.childNodes[1].replaceChild(this.spinner, this.sliderDOM.childNodes[1].childNodes[1]);
		}
	}, {
		key: "_replaceSpinner",
		value: function _replaceSpinner(img) {
			this.sliderDOM.childNodes[1].replaceChild(img, this.spinner);
		}
	}, {
		key: "getDOM",
		value: function getDOM() {
			return this.sliderDOM;
		}
	}]);

	return Slider;
})();

var slider = new Slider();
// console.log(slider.getId());

},{}]},{},[1]);
