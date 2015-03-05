// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var str = "";

  if(typeof obj === "number"){
  	str = str + obj;
  }

  if(typeof obj === "boolean"){
  	str = str + obj;
  }
  if(typeof obj === "string"){
  	str = '"' + str + obj + '"';
  }
  if(Array.isArray(obj)){
  	
  	if(obj.length > 1) {
	  	str = str + "[";

	  	for(var i = 0; i < obj.length; i++) {

	  		str = str + stringifyJSON(obj[i]);
	  	}

	  	str = str + "]";

  	} else {

  		str = "[" + stringifyJSON(obj[0]) + "]"
  	}
  } else {
  	
  	if(typeof obj === "object"){
  	str = str + obj;
  	}
  }

  return str;
  
};

function spliceStr(str, index, count, add) {
  return str.slice(0, index) + (add || "") + str.slice(index + count);
}