document.addEventListener('click', function newBubble(event) {
	if (event.target.classList.contains('cont')) {
		event.target.remove();
	} else {
		const container = document.createElement('div');
		container.classList.add('cont');
		// Random size:
		const size = Math.floor(Math.random() * (200 - 25) + 25);
		// Random color:
		const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

		container.style.backgroundColor = randomColor;
		container.style.width = `${size}px`;
		container.style.height = `${size}px`;
		container.style.top = `${event.clientY - (size / 2)}px`;
		container.style.left = `${event.clientX - (size / 2)}px`;

		document.body.appendChild(container)
	}
});


document.addEventListener('click', disappear);

function disappear(event) {
	if (event.target.classList.contains('cont')) {
		event.target.remove();
	}
}
