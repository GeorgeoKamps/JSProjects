// App state
const reviews = [
    {id:0, personaName: 'anna b.', job: 'web dev', img: 'https://img.freepik.com/free-photo/cheerful-middle-aged-woman-with-curly-hair_1262-20859.jpg?w=996&t=st=1689265358~exp=1689265958~hmac=37b1cc79dc41eea3545856302df23d5346f7866e33bcc07c21e8f931be7c41a7', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fugit nemo accusamus nisi odit tenetur numquam nam laudantium, quia offici'}, 
    {id:1, personaName: 'chris', job: 'java dev', img: 'https://img.freepik.com/premium-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fugit nemo accusamus nisi odit tenetur numquam nam laudantium, quia offici'},
    {id:2, personaName: 'maria', job: 'senior prog manager', img: 'https://img.freepik.com/free-photo/positive-human-reactions-feelings-emotions-charming-elegant-middle-aged-sixty-year-old-female-with-short-gray-hair-with-pleased-smile-her-eyes-full-happiness-joy_343059-2855.jpg', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam fugit nemo accusamus nisi odit tenetur numquam nam laudantium, quia offici'}, {}, {}
]

let personaId = Math.floor(Math.random() * reviews.length)

window.addEventListener('DOMContentLoaded', function() {
    showPersonaById(personaId)

    document.querySelector('#prevBtn').addEventListener('click', function() {
        onPrevBtnClicked()
    })

    document.querySelector('#nextBtn').addEventListener('click', function() {
        onNextBtnClicked()
    })
})


function showPersonaById(personaId) {
    const persona = reviews.find(p => p.id === personaId)
    const { personaName, job, img : image, descr } = persona
    document.querySelector('#personaImg').src = image
    document.querySelector('#personaName').innerHTML = personaName
    document.querySelector('#personaJob').innerHTML = job
    document.querySelector('#personaDescr').innerHTML = descr
}

/**
 * Actions taken after prev button clicked.
 * Actions include ahow previous person
 */
function onPrevBtnClicked() {
    showPrevPersona()
}
/**
 * Actions taken after next button clicked.
 * Actions include ahow next persona
 */

function onNextBtnClicked() {
    showNextPersona()
}

/**
 * Circulary finds the previous persona id and shoes the persona.
 */
function showPrevPersona() {
    personaId = (personaId < 0 )? reviews.length - 1 : --personaId
    showPersonaById(personaId)
}

/**
 * Circulary finds the next persona id and shoes the persona.
 */
function showNextPersona() {
    personaId = (++personaId % reviews.length)
    showNextPersona(personaId)
}