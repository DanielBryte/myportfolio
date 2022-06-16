/********* TYping Effect *********/


const aboutMe = document.getElementById('aboutme'),
messages = [
  'Frontend Developer,',
  'Hybrid Mobile Developer,',
  'Graphics Designer.',
];
let currentMessage = 0;
function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  const currentStr = messages[currentMessage];
  currentStr.split();
  let part = '';
  let currentLetter = 0;
  let int1 = setInterval(()=>{
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(()=>{
        deleteMessage(part);
      }, 800);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      aboutMe.innerText = part;
    }
  }, 100);
}
function deleteMessage(str) {
  let int = setInterval(()=>{
    if (str.length === 0) {
      setTimeout(()=>{
        typeMessage();
      }, 500);
      clearInterval(int);
    } else {
      str = str.split('');
      str.pop();
      str = str.join('');
      aboutMe.innerText = str;
    }
  },50);
}
typeMessage();



/********* Scroll*********/

window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { //find scroll container
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { //find the top of target relatively to the container
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

/**** Animation On View ****/
