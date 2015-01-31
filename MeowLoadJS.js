function MeowLoadJS() {
	// Main file
	///////////// Async ////////////////////////
	'use strict';

	// MeowJS CSS file Loader
	function meowLoaderCSS() {
	var xx = window.document.createElement("link");
	var ref = before || window.document.getElementsByTagName("script")[0];
	var meowStyleSheets = window.document.styleSheets;
	xx.rel = "stylesheet";
	xx.href = href;
	xx.media = "specific"; // fetches without blocking render
	xx.onLoad = callback || function() {};
	ref.parentNode.insertBefore(xx, ref);
	function toggleMedia() {
		var defined;
		for(var m = 0; m < meowStyleSheets.length; m++) {
			if(meowStyleSheets[m].href && meowStyleSheets[m].href.indexOf(href) > -1) {
				defined = true;
			}
		}
		if(defined) {
			xx.media = media || "all";
		} else {
			setTimeout(toggleMedia);
		}
	}
	toggleMedia();
	return xx;
	}
	// End of MeowJS CSS loader

	// MeowJS JS file Loader
	function meowLoaderJS(src, cb) {
		// src => source
		// cb => callback
		var ref = window.document.getElementsByTagName("script")[0];
		var script = window.document.createElement("script");
		script.src = src;
		script.async = true;
		ref.parentNode.insertBefore(script, ref);
		if(cb && typeof(cb) === "function") {
			script.onLoad = cb;
		}
		return script;
	}
	// End of MeowJS JS loader
}
