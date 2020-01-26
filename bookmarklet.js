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
    background-image: linear-gradient(lightgreen, white);
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
                          
var p_tag = document.getElementsByTagName('p');
for (var i = 1; i < p_tag.length; i += 1) {
  var outer_span = document.createElement('span');
  var button_element = document.createElement('button');
  var inner_span = document.createElement('span');
  
  p_tag[i].insertAdjacentElement('afterbegin', span_element);
}
