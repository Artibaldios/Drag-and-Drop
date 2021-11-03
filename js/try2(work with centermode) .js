var MARGIN = 10;
var rect;
var viewport = {
   bottom: 0,
   left: 0,
   right: 0,
   top: 0
}

//Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));

function dragElement(elmnt) {
  
   if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
   } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
   }

   function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      // store the current viewport and element dimensions when a drag starts
      rect = elmnt.getBoundingClientRect();
      console.log("rect:", rect)
      viewport.bottom = box.offsetHeight + MARGIN;
      console.log("viewport.bottom: ",viewport.bottom)
      viewport.left = MARGIN;
      console.log("viewport.left: ",viewport.left)
      viewport.right = box.offsetWidth + MARGIN;
      console.log("viewport.right: ",viewport.right)
      viewport.top = MARGIN;
      console.log("viewport.top: ",viewport.top)

      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
   }

   function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      let shiftX = e.clientX - ball.getBoundingClientRect().left;
      let shiftY = e.clientY - ball.getBoundingClientRect().top;
      pos3 = e.clientX;
      pos4 = e.clientY;
     
      // check to make sure the element will be within our viewport boundary
      var newLeft = elmnt.offsetLeft - shiftX;
      
      var newTop = elmnt.offsetTop - shiftY;
     
      if (newLeft < viewport.left ||
         newTop < viewport.top ||
         newLeft + rect.width > viewport.right ||
         newTop + rect.height > viewport.bottom
      ) {
         // the element will hit the boundary, do nothing...
      } else {
         // set the element's new position:
         moveAt(e.pageX, e.pageY);
         function moveAt(pageX, pageY) {
         elmnt.style.top = (pageX - shiftY) + "px";
         elmnt.style.left = (pageY - shiftX) + "px";
         }
      }
      console.log("newleft: ", elmnt.offsetLeft - shiftX);
       console.log("newtop: ", elmnt.offsetTop - shiftY);
   }

   function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
   }
}