//javascript:(function(){var%20script=document.createElement('script');script.src='https://maximiliantiao.github.io/bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(script);})()

var styleSheet = document.createElement("style");
styleSheet.innerHTML = `
.hashtag {
color: yellow;
}
`;
document.head.appendChild(styleSheet);
                          
var p_tag = document.getElementsByTagName('p');
for (var i = 1; i < p_tag.length; i += 1) {
  var span_element = document.createElement('span');
  span_element.appendChild(document.createTextNode(' # '));
  span_element.setAttribute('class', 'hashtag');
  p_tag[i].insertAdjacentElement('afterbegin', span_element);
}
