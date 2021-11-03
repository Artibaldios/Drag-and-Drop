var PADDING = 8;

var rect;
var viewport = {
   bottom: 0,
   left: 0,
   right: 0,
   top: 0
}

//Make the DIV element draggagle:
dragElement(document.getElementById(("mydiv")));

function dragElement(elem) {
   var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
   if (document.getElementById(elem.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elem.id + "header").onmousedown = dragMouseDown;
   } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elem.onmousedown = dragMouseDown;
   }

   function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;

      // store the current viewport and element dimensions when a drag starts
      rect = elem.getBoundingClientRect();
      viewport.bottom = box.offsetHeight + PADDING;
      viewport.left = PADDING;
      viewport.right = box.offsetWidth + PADDING;
      viewport.top = PADDING;
  

      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
   }

   function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
     
      // check to make sure the element will be within our viewport boundary
      let newLeft = elmnt.offsetLeft - pos1;
      let newTop = elmnt.offsetTop - pos2;
     
      if (newLeft < viewport.left ||
         newTop < viewport.top ||
         newLeft + rect.width > viewport.right ||
         newTop + rect.height > viewport.bottom
      ) {
         // the element will hit the boundary, do nothing...
      } else {
         // set the element's new position:
         elem.style.top = (elem.offsetTop - pos2) + "px";
         elem.style.left = (elem.offsetLeft - pos1) + "px";
      }
      console.log("newleft: ", elem.offsetLeft - pos1);
       console.log("newtop: ", elem.offsetTop - pos2);
   }

   function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
   }
}