var imgBox = document.querySelector('.img-box');
var imgWarp = document.querySelector('.img-warp');
var originalImg = document.getElementById('original-img');

originalImg.style.width = imgBox.offsetWidth + 'px';


var leftSpace = imgBox.offsetLeft;
imgBox.onmousemove = function (e) {
  var boxWidth = (e.pageX - leftSpace) + 'px';
  imgWarp.style.width = boxWidth;
};