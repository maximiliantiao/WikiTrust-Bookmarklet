//javascript:(function(){var%20script=document.createElement('script');script.src='https://maximiliantiao.github.io/bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(script);})()

var styleSheet = document.createElement("style");
styleSheet.innerHTML = `
.tooltip {
    position: relative;
    display: inline-block;
    z-index: 200;
}
.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: white;
    color: black;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 200;
    top: -5px;
    right: 13px;
    font-weight: bold
}
.tooltip:focus .tooltiptext {
    visibility: visible;
    z-index: 1000;
    border: none;
}
button {
    border: none;
    padding: 1px;
}
`;
document.head.appendChild(styleSheet);
           
var modify_class = document.querySelector('.mw-body-content');
modify_class.style.setProperty('z-index', 'unset');

var p_tag = document.getElementsByTagName('p');
for (var i = 1; i < p_tag.length; i += 1) {
  var outer_span = document.createElement('span');
  outer_span.setAttribute('style', 'font-family: sans-serif; font-size: 12pt; white-space: pre-wrap');
    
  var button_element = document.createElement('button');
  button_element.appendChild(document.createTextNode(' # '));
  button_element.setAttribute('class', 'tooltip');
   
  var inner_span = document.createElement('span');
  inner_span.appendChild(document.createTextNode(' Trust Level: 100 Author Trust: 50 [some details] See Revision 180 for more details '));
  inner_span.setAttribute('class', 'tooltiptext');
    
  button_element.appendChild(inner_span);
  outer_span.appendChild(button_element);
  p_tag[i].insertAdjacentElement('afterbegin', outer_span);
}
