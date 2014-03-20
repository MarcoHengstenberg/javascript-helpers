/* A wonderful script that makes IE 10 behave when it comes to viewport
scaling and snap-mode and what not */

// Yes, it is a check for the user-agent and this is bad but this is IE...
if( navigator.userAgent.match(/IEMobile\/10\.0/)) {

	// if you are an IE10 than you get an extra style-tag
	var msViewportStyle=document.createElement("style");

	// then add something specific to IE
	msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));

	// put it just before the ending head-tag
	document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
};