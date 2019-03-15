var s = document.getElementById('root');

function getChildren(parent) {
  if (parent.hasChildNodes()) {
    var children = parent.childNodes;
    for (var _i = 0; _i < children.length; _i++) {
      if (children[_i].tagName === "g") {
        var nl = children[_i].childNodes;
        var result = [];
        for (var _i = 0, ll = nl.length; _i != ll; result.push(nl[_i++])) {}
        return result;
      }
    }
  }
}

var extractPaths = function extractPaths(nodeList) {
  var i = 0;
  var g = [];
  nodeList.forEach(function () {
    if (nodeList[i].tagName === 'g' || nodeList[i].tagName === 'path') {
      g.push(nodeList[i]);
    }
    i++;
  });
  return g;
};

var els = getChildren(s);

var paths = extractPaths(els);

//paths[0].setAttribute('fill', 'red');