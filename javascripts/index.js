// This is for our javascript logic
let heroes = [
    {
        name: 'Captain America',
        description: 'America\'s first Avenger',
        powers: 'super-human strength and amazing leadership abilities',

    }
]


//node getters
const formLink = () => document.getElementById('findHero')
const mainDiv = () => document.getElementById('main')
const browseLink = () => document.getElementById('browseHero')

//functions
const renderForm = () => {
    // create a form

}



//event handlers
const renderFormPage = (e) => {
    e.preventDefault()

    resetMain()
    
    const h3 = document.createElement('h3')
    h3.innerText = 'Find Your Hero'

    renderForm()

    mainDiv().appendChild(h3)

}

const renderBrowse = (e) => {
    e.preventDefault()

    resetMain()

    const h3 = document.createElement('h3')

}

//event listeners
const attachFormEvent = () => {
    formLink().addEventListener('click', renderFormPage)
}

const resetMain = () => {
    mainDiv().innerHTML = ''
}

const browseHeroEvent = () => {
    browseLink().addEventlistener('click', renderBrowse)
}

document.addEventListener('DOMContentLoaded', () => {
    attachFormEvent()
})

//helpers

const createCard = () => {
    const divCard = document.createElement('div')
    const divImage = document.createElement('div')
    const span = document.createElement('span')
    const divCardContent = document.createElement('div')
    const pDescription = document.createElement('p')
    const divCardAction = document.createElement('div')
    const linkOne = document.createElement('a')

    divCard.className = 'card'
    divImage.className = 'card-image'
    span.className = 'card-title'
    divCardContent = 'card-content'
    divCardAction = 'card-action'

    
    link1.setAttribute('href','')
    img.setAttribute('src',"https://www.ed92.org/wp-content/uploads/2021/06/captain-america-1-657x1024.png")

    span.innerText = 'Card Title'
    pDescription.innerText = 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.'
    linkOne.innerText = 'more'
    
    divImage.appendChild(img)
    divImage.appendChild(span)
    divCardContent.appendChild(pDescription)
    divCardAction.appendChild(link1)

    divCard.appendChild(divImage)
    divCard.appendChild(divCardContent)
    divCard.appendChild(divCardAction)

    return divCard
}



{/* <h3>Welcome to myHERO</h3>
<p>lkjasd;flkja;dslkfj ;lkjdofm kjdkfdjk.</p> */}