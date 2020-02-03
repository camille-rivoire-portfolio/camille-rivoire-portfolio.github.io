// Modals
function openModal(e) {
	var element = e.parentNode;
	element.classList.toggle("modal-open");
}

// Add background scroll nav
window.onscroll = function () {
	var nav = document.getElementById('nav');
	if (window.pageYOffset > 300) {
		nav.classList.add("nav-background");
	} else {
		nav.classList.remove("nav-background");
	}
}