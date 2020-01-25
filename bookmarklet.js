//javascript:(function(){var%20script=document.createElement('script');script.src='https://maximiliantiao.github.io/bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(script);script.remove()})()

var p_tag = document.getElementsByTagName('p');
var span_element = document.createElement('span');
span_element.appendChild(document.createTextNode(' Hello '));
span_element.style.color = 'yellow';
p_tag[0].appendChild(span_element);
