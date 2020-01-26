//javascript:(function(){var%20script=document.createElement('script');script.src='https://maximiliantiao.github.io/bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(script);})()

var p_tag = document.getElementsByTagName('p');
for (var i = 1; i < p_tag.length; i += 1) {
  var span_element = document.createElement('span');
  span_element.appendChild(document.createTextNode(' # '));
  span_element.style.color = 'green';
  p_tag[i].appendChild(span_element);
}

