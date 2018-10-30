/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/controls/index.ts":
/*!*******************************!*\
  !*** ./app/controls/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Controls {\r\n    constructor($root, $music) {\r\n        this.$elem = document.createElement('div');\r\n        this.$btnPrev = document.createElement('i');\r\n        this.$btnPlay = document.createElement('i');\r\n        this.$btnNext = document.createElement('i');\r\n        this.active = false;\r\n        this.$root = $root;\r\n        this.$music = $music;\r\n        this.$root.appendChild(this.$elem);\r\n        this.$elem.classList.add('controls');\r\n        this.$btnPrev.classList.add('fas', 'fa-fast-backward');\r\n        this.$elem.appendChild(this.$btnPrev);\r\n        this.$btnPlay.classList.add('fas', 'fa-play');\r\n        this.$elem.appendChild(this.$btnPlay);\r\n        this.$btnPlay.addEventListener('click', this.toggle.bind(this));\r\n        this.$btnNext.classList.add('fas', 'fa-fast-forward');\r\n        this.$elem.appendChild(this.$btnNext);\r\n    }\r\n    toggle() {\r\n        this.active = !this.active;\r\n        if (this.active) {\r\n            this.$btnPlay.classList.remove('fa-play');\r\n            this.$btnPlay.classList.add('fa-pause');\r\n            this.$music.play();\r\n        }\r\n        else {\r\n            this.$btnPlay.classList.remove('fa-pause');\r\n            this.$btnPlay.classList.add('fa-play');\r\n            this.$music.pause();\r\n        }\r\n    }\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./app/controls/index.ts?");

/***/ }),

/***/ "./app/favourite/index.ts":
/*!********************************!*\
  !*** ./app/favourite/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Favorite {\r\n    constructor($root) {\r\n        this.$elem = document.createElement('div');\r\n        this.$icon = document.createElement('i');\r\n        this.$modal = document.createElement('div');\r\n        this.active = false;\r\n        this.$root = $root;\r\n        this.$root.appendChild(this.$elem);\r\n        this.$elem.classList.add('favorite');\r\n        this.$icon.classList.add('fas', 'fa-heart');\r\n        this.$elem.appendChild(this.$icon);\r\n        this.$icon.addEventListener('click', this.toggle.bind(this));\r\n        this.$modal.classList.add('favorite-modal');\r\n        this.$elem.appendChild(this.$modal);\r\n    }\r\n    toggle() {\r\n        this.active = !this.active;\r\n        if (this.active) {\r\n            this.$icon.classList.remove('fas');\r\n            this.$icon.classList.add('far');\r\n        }\r\n        else {\r\n            this.$icon.classList.remove('far');\r\n            this.$icon.classList.add('fas');\r\n        }\r\n    }\r\n}\r\nexports.Favorite = Favorite;\r\n\n\n//# sourceURL=webpack:///./app/favourite/index.ts?");

/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst favourite_1 = __webpack_require__(/*! ./favourite */ \"./app/favourite/index.ts\");\r\nconst volume_1 = __webpack_require__(/*! ./volume */ \"./app/volume/index.ts\");\r\nconst controls_1 = __webpack_require__(/*! ./controls */ \"./app/controls/index.ts\");\r\nconst progress_bar_1 = __webpack_require__(/*! ./progress_bar */ \"./app/progress_bar/index.ts\");\r\nclass AudioPlayer {\r\n    constructor($root) {\r\n        this.$elem = document.createElement('div');\r\n        this.favorite = new favourite_1.Favorite(this.$elem);\r\n        this.volume = new volume_1.Volume(this.$elem);\r\n        this.music = new Audio('/assets/music.mp3');\r\n        this.controls = new controls_1.Controls(this.$elem, this.music);\r\n        this.progress = new progress_bar_1.Progress(this.$elem);\r\n        this.$root = $root;\r\n        this.$root.appendChild(this.$elem);\r\n        this.$elem.classList.add('audioplayer');\r\n        this.style();\r\n    }\r\n    style() {\r\n        const $style = document.createElement('style');\r\n        $style.innerHTML = `\r\n      .audioplayer {\r\n        margin: 0 auto;\r\n        display: flex;\r\n        max-width: 340px;\r\n        width: 100%;\r\n        height: 300px;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        background: url('/assets/background.png');\r\n        padding: 0 10px 0 10px;\r\n        position: relative;\r\n      }\r\n\r\n      .audioplayer div:nth-of-type(1) { order: 1; }\r\n      .audioplayer div:nth-of-type(2) { order: 3; }\r\n      .audioplayer div:nth-of-type(3) { order: 2; }\r\n      .audioplayer div:nth-of-type(4) { order: 2; }\r\n\r\n      .controls {\r\n        display: flex;\r\n        max-width: 150px;\r\n        width: 100%;\r\n        height: 40px;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        z-index: 10;\r\n        background: #000;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n      i {\r\n        width: 16px; \r\n        color: #ffffff;\r\n      }\r\n\r\n      .radial-progress {\r\n        background-color: #d6dadc;\r\n        width: 120px;\r\n        height: 120px;\r\n        border-radius: 50%;\r\n        \r\n      }\r\n\r\n      .mask {\r\n        clip: rect(0px, 120px, 120px, 60px);\r\n      }\r\n\r\n      .mask .left {\r\n        clip: rect(0px, 120px, 120px, 60px);\r\n      }\r\n\r\n      .mask .left .fill {\r\n        clip: rect(0px, 60px, 120px, 0px);\r\n      }\r\n\r\n      .mask .right {\r\n        clip: rect(0px, 60px, 120px, 0px);\r\n      }\r\n\r\n      .mask .right .fill {\r\n        clip: rect(0px, 120px, 120px, 60px);\r\n      }\r\n\r\n      .circle .fill {\r\n        position: absolute;\r\n        background-color: #97a71d;\r\n        width: 120px;\r\n        height: 120px;\r\n        transition: transform 1s;\r\n        transform: rotate(60deg);\r\n        clip: rect(0px, 60px, 120px, 0px);\r\n        \r\n        border-radius: 50%;\r\n      }\r\n      \r\n    `;\r\n        document.body.appendChild($style);\r\n    }\r\n}\r\nnew AudioPlayer(document.body);\r\nconst $fontAwesome = document.createElement('link');\r\n$fontAwesome.rel = 'stylesheet';\r\n$fontAwesome.href = 'https://use.fontawesome.com/releases/v5.4.1/css/all.css';\r\nif (document.head)\r\n    document.head.appendChild($fontAwesome);\r\n\n\n//# sourceURL=webpack:///./app/index.ts?");
=======
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst favourite_1 = __webpack_require__(/*! ./favourite */ \"./app/favourite/index.ts\");\r\nconst volume_1 = __webpack_require__(/*! ./volume */ \"./app/volume/index.ts\");\r\nconst controls_1 = __webpack_require__(/*! ./controls */ \"./app/controls/index.ts\");\r\nconst progress_bar_1 = __webpack_require__(/*! ./progress_bar */ \"./app/progress_bar/index.ts\");\r\nclass AudioPlayer {\r\n    constructor($root) {\r\n        this.$elem = document.createElement('div');\r\n        this.favorite = new favourite_1.Favorite(this.$elem);\r\n        this.volume = new volume_1.Volume(this.$elem);\r\n        this.music = new Audio('/assets/music.mp3');\r\n        this.controls = new controls_1.Controls(this.$elem, this.music);\r\n        this.progress = new progress_bar_1.Progress(this.$elem);\r\n        this.$root = $root;\r\n        this.$root.appendChild(this.$elem);\r\n        this.$elem.classList.add('audioplayer');\r\n        this.style();\r\n    }\r\n    style() {\r\n        const $style = document.createElement('style');\r\n        $style.innerHTML = `\r\n      .audioplayer {\r\n        margin: 0 auto;\r\n        display: flex;\r\n        max-width: 340px;\r\n        width: 100%;\r\n        height: 300px;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        background: url('/assets/background.png');\r\n        padding: 0 10px 0 10px;\r\n        position: relative;\r\n      }\r\n\r\n      .audioplayer div:nth-of-type(1) { order: 1; }\r\n      .audioplayer div:nth-of-type(2) { order: 3; }\r\n      .audioplayer div:nth-of-type(3) { order: 2; }\r\n      .audioplayer div:nth-of-type(4) { order: 2; }\r\n\r\n      .controls {\r\n        display: flex;\r\n        max-width: 150px;\r\n        width: 100%;\r\n        height: 40px;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        z-index: 10;\r\n        background: #000;\r\n        padding-left: 10px;\r\n        padding-right: 10px;\r\n        box-sizing: border-box;\r\n      }\r\n\r\n      i {\r\n        width: 16px; \r\n        color: #ffffff;\r\n      }\r\n\r\n      .radial-progress {\r\n        background-color: #d6dadc;\r\n        width: 120px;\r\n        height: 120px;\r\n        border-radius: 50%;\r\n      }\r\n\r\n      .mask {\r\n        clip: rect(0px,120px,120px,60px);\r\n      }\r\n\r\n      .mask .left {\r\n        clip: rect(0px, 120px, 120px, 60px);\r\n      }\r\n\r\n      .mask .left .fill {\r\n        clip: rect(0px, 60px, 120px, 0px);\r\n      }\r\n\r\n      .mask .right {\r\n        clip: rect(0px, 60px, 120px, 0px);\r\n      }\r\n\r\n      .mask .right .fill {\r\n        clip: rect(0px, 120px, 120px, 60px);\r\n      }\r\n\r\n      .circle .fill {\r\n        position: absolute;\r\n        background-color: #97a71d;\r\n        width: 120px;\r\n        height: 120px;\r\n        transition: ease-in-out 1s;\r\n        clip: rect(0px, 60px, 120px, 0px);\r\n        border-radius: 50%;\r\n      }\r\n      \r\n    `;\r\n        document.body.appendChild($style);\r\n    }\r\n}\r\nnew AudioPlayer(document.body);\r\nconst $fontAwesome = document.createElement('link');\r\n$fontAwesome.rel = 'stylesheet';\r\n$fontAwesome.href = 'https://use.fontawesome.com/releases/v5.4.1/css/all.css';\r\nif (document.head)\r\n    document.head.appendChild($fontAwesome);\r\n\n\n//# sourceURL=webpack:///./app/index.ts?");
>>>>>>> 32be98e1922bce45e66208c19ae7708de99936cb

/***/ }),

/***/ "./app/progress_bar/index.ts":
/*!***********************************!*\
  !*** ./app/progress_bar/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Progress {\r\n    constructor($root) {\r\n        this.$elem = document.createElement('div');\r\n        this.$progressCircle = document.createElement('div');\r\n        this.$progressMask = document.createElement('div');\r\n        this.$progressFill = document.createElement('div');\r\n        this.$root = $root;\r\n        this.$root.appendChild(this.$elem);\r\n        this.$elem.classList.add('radial-progress');\r\n        this.$progressCircle.classList.add('circle');\r\n        this.$elem.appendChild(this.$progressCircle);\r\n        this.$progressMask.classList.add('mask');\r\n        this.$progressCircle.appendChild(this.$progressMask);\r\n        this.$progressFill.classList.add('fill');\r\n        this.$progressMask.appendChild(this.$progressFill);\r\n        let div = this.$progressMask.cloneNode(true);\r\n        this.$progressMask.parentNode.insertBefore(div, this.$progressMask.nextElementSibling);\r\n        this.$progressCircle.firstChild.classList.add('left');\r\n        this.$progressCircle.lastChild.classList.add('right');\r\n        let fill = document.querySelectorAll('.circle .fill');\r\n        function randomize() {\r\n            let rotation = Math.floor(Math.random() * 360);\r\n            for (let i = 0; i < fill.length; i++) {\r\n                fill[i].style.transform = `rotate(${rotation}deg)`;\r\n            }\r\n        }\r\n        setInterval(function () {\r\n            randomize();\r\n        }, 1000);\r\n    }\r\n}\r\nexports.Progress = Progress;\r\n\n\n//# sourceURL=webpack:///./app/progress_bar/index.ts?");

/***/ }),

/***/ "./app/volume/index.ts":
/*!*****************************!*\
  !*** ./app/volume/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Volume {\r\n    constructor($root) {\r\n        this.$elem = document.createElement('div');\r\n        this.$icon = document.createElement('i');\r\n        this.$modal = document.createElement('div');\r\n        this.active = false;\r\n        this.$root = $root;\r\n        this.$root.appendChild(this.$elem);\r\n        this.$elem.classList.add('volume');\r\n        this.$icon.classList.add('fas', 'fa-volume-down');\r\n        this.$elem.appendChild(this.$icon);\r\n        this.$icon.addEventListener('click', this.toggle.bind(this));\r\n        this.$modal.classList.add('volume-modal');\r\n        this.$elem.appendChild(this.$modal);\r\n    }\r\n    toggle() {\r\n        this.active = !this.active;\r\n        if (this.active) {\r\n            this.$icon.classList.remove('fa-volume-down');\r\n            this.$icon.classList.add('fa-volume-mute');\r\n        }\r\n        else {\r\n            this.$icon.classList.remove('fa-volume-mute');\r\n            this.$icon.classList.add('fa-volume-down');\r\n        }\r\n    }\r\n}\r\nexports.Volume = Volume;\r\n\n\n//# sourceURL=webpack:///./app/volume/index.ts?");

/***/ })

/******/ });