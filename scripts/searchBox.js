//<![CDATA[ // Create a search control
var searchControl = new GSearchControl();
// create a search object
searchControl.addSearcher(new GwebSearch());
// tell Google where to draw the
searchboxsearchControl.draw(document.getElementById("search-box"));
GSearch.setOnLoadCallback(OnLoad); //]]> 