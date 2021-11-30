let slideIndex = 1

const showImage = n => {
	let slide = document.getElementsByClassName('slides'),
		i

	if (n > slide.length) {
		slideIndex = 1
	}

	if (n < 1) {
		slideIndex = slide.length
	}

	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = 'none'
	}

	slide[slideIndex - 1].style.display = 'block'
}

showImage(slideIndex)

const plusIndex = n => {
	showImage((slideIndex += n))
}

setInterval(() => {
	plusIndex(1)
}, 8000)
