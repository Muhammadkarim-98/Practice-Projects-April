// selectors


document.addEventListener('click', function (e) {
	let size = rand(25, 200);
	let color = get_random_color();
	let top = e.clientY - (size / 2);
	let left = e.clientX - (size / 2);


	let circeEl = document.createElement('div');
	circeEl.classList.add('circeItem');
	circeEl.style.top = `${top}px`;
	circeEl.style.left = `${left}px`;
	circeEl.style.width = `${size}px`;
	circeEl.style.height = `${size}px`;
	circeEl.style.backgroundColor = color;


	document.body.appendChild(circeEl)

})

function rand(min, max) {
	return min + Math.random() * (max - min);
}

function get_random_color() {
	var h = rand(1, 360);
	var s = rand(0, 100);
	var l = rand(0, 100);

	return 'hsl(' + h + ',' + s + '%,' + l + '%)';

}
