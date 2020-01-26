//javascript:(function(){var%20script=document.createElement('script');script.src='https://maximiliantiao.github.io/bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(script);})()

var p_tag = document.getElementsByTagName('p');
var span_element = document.createElement('span');
span_element.appendChild(document.createTextNode(' Hello there '));
span_element.style.color = 'yellow';
for (var i = 0; i < p_tag.length; i += 1) {
  alert(p_tag[i].innerHTML);   
}

