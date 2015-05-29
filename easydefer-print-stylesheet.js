/**
 * Appended loading of a print stylesheet
 *
 */
var ps = document.createElement('link');
ps.type = 'text/css';
ps.rel = 'stylesheet';
ps.href = 'your-print-stylesheet.css';
ps.media = 'print';
document.getElementsByTagName("head")[0].appendChild(ps);