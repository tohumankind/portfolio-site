window.onload = function(){
	console.log(':~)');

	document.getElementById('wrapper').style.opacity="1";
}

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("proj-header").style.fontSize = "20px";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("proj-header").style.fontSize = "60px";
    // document.getElementById("logo").style.fontSize = "35px";
  }
}

const animatedClassName = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	let addAnimation = false;
	// On the last element in the page, add a listener to remove
	// ---> animation-class when animation ends
	if (element.classList[1] == "FLASH") {
		g = element;
		element.addEventListener("animationend", e => {
			element.classList.remove(animatedClassName);
		});
		addAnimation = true;
	}

	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

		// Add an animation-class to animate via CSS.
		if (addAnimation) element.classList.add(animatedClassName);
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});
