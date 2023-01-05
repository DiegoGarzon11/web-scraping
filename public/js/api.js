const avatar = document.querySelector('.avatar');
const img = document.querySelector('.img');
const elejir = document.querySelector('#elejir');
const buscar = document.querySelector('#buscar');
const imgAvatar = document.createElement('img');

buscar.addEventListener('click', () => {
	fetch(`http://localhost:3000/api/${elejir.value}`)
		.then((res) => res.json())
		.then((res) => {
			avatar.innerText = res.campeon;
			imgAvatar.src = res.img;
			img.appendChild(imgAvatar);
		});

	imgAvatar.innerHTML = '';
});
