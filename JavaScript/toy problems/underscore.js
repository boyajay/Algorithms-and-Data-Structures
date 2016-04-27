var fanOut = function(input, fn) {
  var map = [];
  if (Array.isArray(input)){
    for (var i = 0; i < input.length; i++) {
      map.push(fn(input[i]));
    }
  }
  else {
    for (i in collection) {
      map.push(fn(input[i]));
    }
  };
  return map;
};