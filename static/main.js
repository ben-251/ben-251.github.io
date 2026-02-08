const modal = document.getElementById("modal");
let modalImage = document.getElementById("modal-image");
let modalHeader = document.getElementById("modal-text-header");
let modalDescription = document.getElementById("modal-description");
const modalContent = document.querySelector('#modal-content');

function ImageClicked(image) {
	OpenModal();
	modalImage.src = image.src;
	modalHeader.innerHTML = image.getAttribute("data-name");
	if (!image.hasAttribute("data-description")) {
		modalDescription.innerHTML = "Made by Ben."
	} else {
		modalDescription.innerHTML = image.getAttribute("data-description");
	}
	modalContent.style.width = "max(60%, " + (modalImage.clientWidth * 2) + "px)";
}

function CloseModal() {
	modal.classList.remove("darkened-modal");
	modal.classList.add("closed");
	modalContent.classList.add("closed")
}

function OpenModal() {
	modal.classList.remove("closed");
	modal.classList.add("darkened-modal");
	modalContent.classList.remove("closed")
}

document.addEventListener(
	"click",
	function (event) {
		if (
			event.target.matches("#modal") || event.target.matches(".modal-close-button")
		) {
			CloseModal()
		}
	},
	false
)

const header = document.querySelector('.header');
if (header != null) {
	SetupHeader()
}

function SetupHeader() {
	header.addEventListener(
		"mousedown",
		function (e) {
			header.dataset.mouseDownAt = e.clientX;
		}
	)
	header.addEventListener(
		"mousemove",
		function (event) {
			if (header.dataset.mouseDownAt === "0") return;
			lastOffset = parseFloat(header.dataset.lastOffset);
			mouseDelta = parseFloat(header.dataset.mouseDownAt) - event.clientX;
			header.style.setProperty('--background-offset', String(mouseDelta + lastOffset) + 'px');
		}
	)
	header.addEventListener(
		"mouseup",
		function () {
			header.dataset.mouseDownAt = "0";
			header.dataset.lastOffset = getComputedStyle(header).getPropertyValue('--background-offset');
		}
	)
}

const galleryGrid = document.querySelector('.gallery-grid');
if (galleryGrid != null) {
	setupGalleryGrid()
}
function setupGalleryGrid() {
	for (const Image of galleryGrid.children) {
		Image.draggable = false
		Image.addEventListener(
			"click",
			function () { ImageClicked(Image) }
		)
	}
}

const test = document.querySelector('#test');
if (test != null) {
	setupTest()
}

function setupTest() {
	test.addEventListener(
		"mouseover",
		function () {
			test.classList.add("hovered");
			test.classList.remove("unhovered")
		}
	)
	test.addEventListener(
		"mouseout",
		function () {
			test.classList.add("unhovered");
			test.classList.remove("hovered");
		}
	)
}

// theme:
const themeItems = document.querySelectorAll('.theme-item');

const themes = Array.from(themeItems).flatMap(item =>
	Array.from(item.classList)
	  .filter(className => className.startsWith('theme-') && className !== 'theme-item')
  );
var currentTheme = localStorage.getItem('theme') || 'theme-default';

const middleStart = 90;
const middleEnd = 80;
const rightStart = 95;
const rightEnd = 90;


function applyTheme(theme) {
	localStorage.setItem('prevtheme', localStorage.getItem('theme'));
	// console.log(`pre-remove classlist: ${document.body.classList}`)
	document.body.classList.remove(...themes);
	document.body.classList.remove('theme-default');
	// console.log(`pos-remove classlist: ${document.body.classList}`)
	document.body.classList.add(theme);  
	// console.log(`post-add classlist: ${document.body.classList}`)
	localStorage.setItem('theme', theme);  
}

function setActive(theme) {
	// console.log("setting active")
	const prevTheme = localStorage.getItem('prevtheme'); // Get the value of 'prevtheme'

	const forwardTime = 200;
	const backwardTime = 50;
	themeItems.forEach(item => {
		if (item.classList.contains(theme)) {
			item.classList.add("active");
			animateProperty(item, '--middle', middleStart, middleEnd, forwardTime); 
			animateProperty(item, '--right', rightStart, rightEnd, forwardTime*1.7); 
		} else if (item.classList.contains(prevTheme)) {
			animateProperty(item, '--middle', middleEnd, middleStart, backwardTime*1.2);
			animateProperty(item, '--right', rightEnd, rightStart, backwardTime); 
			item.classList.remove("active")
		} else {
			item.classList.remove("active")
		}
	})
}

// console.log(currentTheme)
applyTheme(currentTheme);
// console.log(currentTheme)


themeItems.forEach(item => {
	item.style.setProperty('--middle', `${middleStart}%`);
	item.style.setProperty('--right', `${rightStart}%`);

	item.addEventListener('click', () => {
		const selectedTheme = item.classList[1];  // The second class is the theme class
		applyTheme(selectedTheme);
		setActive(selectedTheme);
	});
});



const themeItem = document.querySelector('.theme-item.active');

function animateProperty(element, property, start, end, duration) {
	const startTime = performance.now();

	function updateFrame(currentTime) {
		const elapsedTime = currentTime - startTime;
		const progress = Math.min(elapsedTime / duration, 1); // Ensure progress is in [0, 1]
		const value = start + (end - start) * progress;

		// Update the CSS custom property
		element.style.setProperty(property, `${value}%`);

		if (progress < 1) {
			requestAnimationFrame(updateFrame); // Continue animation
		}
	}

	requestAnimationFrame(updateFrame);
}

// TAG system
function filterForTag(tag) {
	console.log("clicked tag!!")
	const posts = document.querySelectorAll('.blog-post-list li')
	posts.forEach(post => {
		const tags = post.dataset.tags.split(',')
		console.log(`tags: ${tags}`)
		if (tags.includes(tag)) {
			post.style.display = ''
		} else {
			post.style.display = 'none'
		}
	})
}

const navbar = document.querySelector("nav.navbar");

if (window.matchMedia('(max-width: 768px)').matches) {
	let isNavActive = true;

	function initialiseMobileNav() {
		const computedStyle = getComputedStyle(navbar);
		const width = computedStyle.width;
		navbar.style.transform = `translateX(-${parseInt(width)}px)`;
		console.log(`width is ${width}`)
		console.log(navbar.style.transform);
		isNavActive = false;
	}

	initialiseMobileNav();
	const expand = document.getElementById("expand");
	const modal = document.getElementById("modal-background");
	console.log("0 reach test")
	console.log("1 reach test")

	function hideMobileNav() {
		navbar.style.transition = 'transform 300ms ease-out'; 
		const computedStyle = getComputedStyle(navbar);
		const width = computedStyle.width;
		navbar.style.transform = `translateX(-${parseInt(width)}px)`;
		navbar.addEventListener('transitionend', () => {
			navbar.style.transition = 'none';
		}, { once: true });
		isNavActive = false
		expand.classList.remove('active');
		document.body.style.overflow = '';
		modal.style.display = 'none'
	}

	function showMobileNav() {
		console.log("trying to show");
		navbar.style.transition = 'transform 300ms ease'; 
		navbar.style.transform = `translateX(0px)`;
		navbar.addEventListener('transitionend', () => {
			navbar.style.transition = 'none';
		}, { once: true });
		isNavActive = true
		expand.classList.add('active')
		document.body.style.overflow = 'hidden';
		modal.style.display = 'block'
	};

	expand.addEventListener('click', () => {
		if (isNavActive) {
			hideMobileNav()
		} else {
			showMobileNav();
		}
	});

	const nonClosingElements = [navbar, expand]
	document.addEventListener('click', function(event) {
		if (!isNavActive) return;
	  
		const clickedInside = nonClosingElements.some(el => el && el.contains(event.target));
		if (!clickedInside) {
		  hideMobileNav();
		}
	  });
};


// System to Number Figures:
document.addEventListener("DOMContentLoaded", () => {
	var figures = document.getElementsByClassName("article-figure");
	// console.log("running")
	Array.from(figures).forEach((figure, i) => {
		var caption = figure.querySelector('.article-figcaption');
		// console.log(`The current caption for the figure is ${caption.textContent}`);
		let currentCaptionText = caption.textContent;
		let indexSpan = document.createElement("span");
		indexSpan.classList.add('figcaption-index');
		indexSpan.textContent = `Figure ${i+1}: `;
		let newText = document.createTextNode(currentCaptionText);
		caption.textContent = '';
		caption.appendChild(indexSpan);
		caption.appendChild(newText);

		// console.log(`The current caption for the figure is ${caption.textContent}`);
	});
});
