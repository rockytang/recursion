// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){

  //the function I need to copy
  var arr = document.getElementsByClassName(className);

  var arr2 = Array.prototype.slice.apply(arr);
  //I use this to compare to my answer I get later.


var accept = function(node){
	if(node.classList !== undefined) {
		if(node.classList == className) {
			output.push(node)
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


// This pulls the right nodes but I cheated a bit by looking at the testing suite
// Having trouble using recursion with this
/*
	for(var i = 0; i < document.childNodes[1].childNodes.length; i++){
		source = document.childNodes[1].childNodes[i];
		accept(source);

		var sLength = source.childNodes.length;

		for(var j = 0; j < sLength; j++){
			source2 = source.childNodes[j];
			accept(source2);
		}
	} 
*/

debugger;
	return output;

};

//A treewalker solution I found at http://ejohn.org/blog/getelementsbyclassname-speed-comparison/
//as reference only

  //document.getElementsByClass = function(needle) {

  /*
  function acceptNode(node) {
    if (node.hasAttribute("class")) {
      var c = " " + node.className + " ";
       if (c.indexOf(className) != -1)
         return NodeFilter.FILTER_ACCEPT;
    } 
    return NodeFilter.FILTER_SKIP;
  }
  

  var treeWalker = document.createTreeWalker(document.documentElement,
      NodeFilter.SHOW_ELEMENT, acceptNode, true);

  var outArray = new Array();

  if (treeWalker) {
    var node = treeWalker.nextNode();
    while (node) {
      outArray.push(node);
      node = treeWalker.nextNode();
    }
  }

  return outArray;
*/
