const img = document.querySelector('.img1')
const btn = document.querySelector('.arrow-btn')

const showImg = () => {
	img.classList.toggle('show')
	if (img.classList.contains('show')) {
		btn.style.transform = 'rotate(180deg)'
	} else {
		btn.style.transform = 'rotate(0deg)'
	}
}
btn.addEventListener('click', showImg)