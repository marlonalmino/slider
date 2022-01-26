document.querySelector('#imgGlobal').style = 'width: 50%'

function slider() {
  let slideNumber = document.getElementById('elemento').value
  document.querySelector('#imgGlobal').style = `width: ${slideNumber}%;`
  document.querySelector('#showNumber').value = slideNumber
}

function choose(value) {
  switch (value) {
    case 1:
      imgGlobal.setAttribute('src', 'images/pernalonga.jpg')
      break

    case 2:
      imgGlobal.setAttribute('src', 'images/patolino.jpg')
      break

    case 3:
      imgGlobal.setAttribute('src', 'images/pica-pau.jpg')
      break

    case 4:
      imgGlobal.setAttribute('src', 'images/goku-ssj-1000.jpg')
      break

    case 5:
      imgGlobal.setAttribute('src', 'images/zoro-whatsapp.jpg')
      break

    default:
      imgGlobal.setAttribute('src', 'images/pernalonga.jpg')
      break
  }
}
