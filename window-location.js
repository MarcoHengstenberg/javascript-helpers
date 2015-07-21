function showNode (oNode) {
  var nLeft = 0, nTop = 0;
  for (var oItNode = oNode; oItNode; nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent);
  document.documentElement.scrollTop = nTop;
  document.documentElement.scrollLeft = nLeft;
}

function showBookmark (sBookmark, bUseHash) {
  if (arguments.length === 1 || bUseHash) { location.hash = sBookmark; return; }
  var oBookmark = document.querySelector(sBookmark);
  if (oBookmark) { showNode(oBookmark); }
}