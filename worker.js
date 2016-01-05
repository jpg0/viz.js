importScripts("bower_components/viz.js/viz.js");

preprocess = function(str) {
	var matches = str.match(/\/\* *replacements([\s\S]*)\*\//);
	if(matches){
		var replacements = JSON.parse(matches[1].trim());
	} else {
		var replacements = {};
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
