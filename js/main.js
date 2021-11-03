const MARGIN = 10;
let rect;
let viewport = {
   bottom: 0,
   left: 0,
   right: 0,
   top: 0
}
let inputTop = document.getElementById("inputTop");
let inputLeft = document.getElementById("inputLeft");

//Make the DIV element draggagle:
dragElement(document.getElementById(("draggableItem")));

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
      viewport.bottom = box.offsetHeight + MARGIN;
      viewport.left = MARGIN;
      viewport.right = box.offsetWidth + MARGIN;
      viewport.top = MARGIN;

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
      newLeft = elem.offsetLeft - pos1;
      newTop = elem.offsetTop - pos2;
     
      if (newLeft < viewport.left ||
         newTop < viewport.top ||
         newLeft + rect.width > viewport.right ||
         newTop + rect.height > viewport.bottom
      ) {
         // the element will hit the boundary, do nothing...
      } else {
         // set the element's new position:
         elem.style.top = (elem.offsetTop - pos2) + "px";
         inputTop.value = (elem.offsetTop - pos2) - MARGIN ;
         if (inputTop.value < 0) inputTop.value = 0
         elem.style.left = (elem.offsetLeft - pos1) + "px";
         inputLeft.value = (elem.offsetLeft - pos1) - MARGIN;
         if (inputLeft.value < 0) inputLeft.value = 0
      }
   }

   function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
   }

      //  moving item when the arrows are pressed :
      inputTop.addEventListener('mouseup', function(e) {
         elem.style.top = MARGIN + +inputTop.value + 'px';
      })
      // moving item when numbers are entered from the keyboard :
      inputTop.addEventListener('keyup', function(e) {
         elem.style.top = MARGIN + +inputTop.value + 'px';
      })
      inputLeft.addEventListener('mouseup', function(e) {
         elem.style.left = MARGIN + +inputLeft.value + 'px';
      })
      inputLeft.addEventListener('keyup', function(e) {
         elem.style.left = MARGIN + +inputLeft.value + 'px';
      })
      // the boundaries for inputs
      inputTop.oninput = function () {
         if (this.value > 500) {
             this.value = 500; 
         }
      }
      inputLeft.oninput = function () {
         if (this.value > 386) {
             this.value = 386; 
         }
      }

}

