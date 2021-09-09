const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav22');
	const navLinks = document.querySelectorAll('.nav22 li');

	burger.addEventListener('click',() => {
		//Toggle Nav
		nav.classList.toggle('nav22-active');
		
		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation){
				link.style.animation = '';
			} else {
				link.style.animation = `navlinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
			}
		});
		//Burger Animation
		burger.classList.toggle('toggle');
	});
};

navSlide();
