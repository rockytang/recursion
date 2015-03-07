// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

var accept = function(node){
	if(node.classList !== undefined) {
		
		for(var i = 0; i < node.classList.length; i++) {
			if(node.classList[i] == className) {
				output.push(node);
			}
		}
	}
};

var treeWalk = function(node){
	accept(node);
	if(node.childNodes.length) {
		for(var i = 0; i < node.childNodes.length; i++){
			treeWalk(node.childNodes[i]);
		}
	}
};

  var output = [];

  for(var i = 0; i < document.childNodes.length; i++) {
  	treeWalk(document.childNodes[i]);
  }

	return output;
};
