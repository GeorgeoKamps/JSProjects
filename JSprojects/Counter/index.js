// app state - The only sourche of truth
const DEFAULT = 0
let counter = DEFAULT

const counterDOM = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

/**
 * Listener
 */
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if (e.currentTarget.id === 'btnDecr') {
            onDecreaceClicked()
        } else if (currentTarget.id === 'btnIncr') {
            onIncreaseClicked()
        } else {
            onResetClicked()
        }
    })
})

// Controllers

/**
 * Actions taken after 'Decrease' button clicked.
 * Actions include decreasing the counter.
 */
function onDecreaceClicked() {
    decreaseCounter()
}

/**
 * Actions taken after 'Increase' button clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

/**
 * Actions taken after 'Reset' button clicked.
 * Actions include reseting the counter.
 */
function onResetClicked() {
    resetCounter()
}

/**
 * Decreases the counter and syncs the UI.
 */
function decreaseCounter() {
    counter--
    showCounter(counter)
}

/**
 * increases the counter and syncs the UI.
 */
function increaseCounter() {
    counter++
    showCounter(counter)
}

/**
 * Reset the counter and syncs the UI.
 */
function resetCounter() {
    counter = DEFAULT
    showCounter(counter)
}

/**
 * Assigns the counter to the corresponding UI element
 * ans styles accordingly.
 * @param {Number|String } counter - the counter value
 */
function showCounter(counter) {
    counterDOM.innerHTML = counter
    styleCounter(counter)
}

/**
 * Assigns a specific color to the counter.
 * Green ,when positive values, red when negative values,
 * black when zero
 * @param {Number}} counter = the counter value 
 */
function styleCounter(counter) {
    if (counter > 0) {
        counterDOM.style.color = 'green'
    } else if (counter < 0) {
        counterDOM.style.color = 'red'
    } else {
        counterDOM.style.color = 'black'
    }
}