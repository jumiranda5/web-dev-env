/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/images/image.jpg
const image_namespaceObject = __webpack_require__.p + "images/image-86243fe9e83e29eb3dfb.jpg";
;// CONCATENATED MODULE: ./src/assets/images/halie-unsplash.jpg
const halie_unsplash_namespaceObject = __webpack_require__.p + "images/halie-unsplash-6eb8fd3d09c2b91d7a44.jpg";
;// CONCATENATED MODULE: ./src/page-home/main.js
'use-strict'

;


 // convert to webp

const p = document.createElement('p');
p.textContent = 'Hello from webpack!';
document.body.append(p);

const myImage = document.createElement('img');
myImage.src = image_namespaceObject;
document.body.append(myImage);

const myImage2 = document.createElement('img');
myImage2.src = halie_unsplash_namespaceObject;
document.body.append(myImage2);
/******/ })()
;
//# sourceMappingURL=index.bundle-2acb45b3a1ae090ae5d9.js.map