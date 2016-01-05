importScripts("bower_components/viz.js/viz.js");

var PARSE_TOKEN = "#JS"

preprocess = function(str) {
	var replacements = {};
	var matches = str.match(/\/\* *#JS([\s\S]*)\*\//);
	if(matches){
		eval(matches[1].trim());
	}
 
	for (var key in replacements) {
  		if (replacements.hasOwnProperty(key)) {
			str = str.replace(new RegExp('\\$'+key, 'g'), replacements[key]);
  		}
	}
	return str;
};

onmessage = function(e) {
  var result = Viz(preprocess(e.data.src), e.data.options);
  postMessage(result);
}
