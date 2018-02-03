// Survivor dictionary
const spoilers = [
  'survivor', 'τσανκ', 'κινέζος', 'Ορέστης', 'αγώνισμα', 'Ορέστης', 'Σάρα', 'Τσανγκ', 'Μισθοφόρος',
  'Λάουρα', 'Σπαλιάρας', 'Σπαλ', 'Χρανιώλα', 'Χρανιώτης', 'ΜΠΟ ', 'Ασυλία', 'Κολιδά', 'Μαχητές',
  'Αγγελόπουλος', 'Βαλαβάνη', 'orestis', 'Ελισάβετ', 'ΒΑΛΑΒΑΝΗ', 'ΕΛΙΣΑΒΕΤ', 'mounopanos'
]

// Generate regex string
const spoilersRegex = new RegExp(spoilers.join('|'), 'i')

function killOnScroll (e) {
  killSurvivor()
}

function init () {
  window.addEventListener('scroll', killOnScroll)
}

window.onload = function () {
  init()
  killSurvivor()
}

function closestByClass (el, classToFound) {
  while (!el.className.includes(classToFound)) {
    el = el.parentNode
    if (!el || el.className === undefined) {
      return null
    }
  }
  return el
}

// Finds and terminates posts that contain survivor things
function killSurvivor () {
  const elementsFB = ['.userContent']

  const elements = document.querySelectorAll(elementsFB)
  elements.forEach(function (element) {
    if (element.innerText.match(spoilersRegex) !== null && !element.classList.contains('survivor-found')) {
      element.classList.add('survivor-found')
      const newElement = document.createElement('span')
      newElement.innerHTML = 'Survivor found, click to see the post! :('
      newElement.style = 'font-size: 20px;'
      newElement.addEventListener('click', function(e) {
        e.target.replaceWith(element)
      })
      closestByClass(element, 'userContentWrapper').replaceWith(newElement)
    }
  })
}
