// This is for our javascript logic

//node getters
const formLink = () => document.getElementById('findHero')

//event handlers
const renderFormPage = (e) => {
    e.preventDefault()
    alert('hi')
}

//event listeners
const attachFormEvent = () => {
    formLink().addEventListener('click', renderFormPage)
}

document.addEventListener('DOMContentLoaded', () => {
    attachFormEvent()
})