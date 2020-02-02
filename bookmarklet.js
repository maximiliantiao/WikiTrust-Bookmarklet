// To use this bookmarket, copy the javascipt before (with the '//') and paste it in when you favorite the Wikipedia article you want to apply the bookmarklet to
//javascript:(function(){var%20script=document.createElement('script');script.src='https://maximiliantiao.github.io/WikiTrust-Bookmarklet/bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(script);})()

// Creating a CSS stylesheet for tooltip
var styleSheet = document.createElement("style");
styleSheet.innerHTML = `
.mw-body-content {
    position: initial;
    font-size: 0.875em;
    line-height: 1.6;
    z-index: 0;
}
.tooltip {
    position: relative;
    display: inline-block;
    z-index: 200;
}
.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background: linear-gradient(lightgreen, white);
    color: black;
    text-align: center;
    border: 1px black solid;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 200;
    top: -5px;
    right: 13px;
    font-size: 12px;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 16%;
  left: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent black;
}
.tooltip:focus .tooltiptext {
    visibility: visible;
    border: none;
    outline: none;
}
button {
    border: none;
    padding: 1px;
    outline: none;
}
button:focus {
    outline: none;
}
`;
document.head.appendChild(styleSheet);
//document.getElementsByClassName('mw-body-content').style.position = "absolute";

// Add in tooltip html code at the beginning of every paragraph           
var p_tag = document.getElementsByTagName('p');
for (var i = 1; i < p_tag.length; i += 1) {
  var outer_span = document.createElement('span');
  outer_span.setAttribute('style', 'font-family: sans-serif; white-space: pre-wrap');
    
  var button_element = document.createElement('button');
  button_element.appendChild(document.createTextNode('◖'));
  button_element.setAttribute('class', 'tooltip');
   
  var inner_span = document.createElement('span');
  inner_span.appendChild(document.createTextNode(' Trust Level: 100\n Author Trust: 50\n [some details]\n See Revision ' + (i) + ' for more details '));
  inner_span.setAttribute('class', 'tooltiptext');
    
  button_element.appendChild(inner_span);
  outer_span.appendChild(button_element);
  p_tag[i].insertAdjacentElement('afterbegin', outer_span);
}
