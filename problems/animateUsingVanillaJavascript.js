// https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
// http://www.javascriptkit.com/javatutors/requestanimationframe.shtml
// https://codepen.io/gohilumesh/pen/xjJyWq   --- Use this 
//  <div id="animatedElem"><div>
/*
#animatedElem {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #ff6600;
}
*/


var elem = document.getElementById("animatedElem"),
  left = 0,
  lastFrame = +new Date,
  timer;
// Move the element on the right at ~600px/s
timer = setInterval(function() {
  var now = +new Date,
    deltaT = now - lastFrame;
  elem.style.left = ( left += 10 * deltaT / 16 ) + "px";
  lastFrame = now;
  // clear the timer at 400px to stop the animation
  if ( left > 400 ) {
    clearInterval( timer );
  }
}, 16);
