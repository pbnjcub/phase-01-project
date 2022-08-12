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
const homeLink = () => document.getElementById('home')

//functions
const renderForm = () => {
    // create a form

}

const renderHero = () => {
    const col = document.createElement('div')
    col.className = 'col s12 m7'
    
    col.appendChild(createCard(hero))

    return col
}

const renderHeroes = () => {
    const row = document.createElement('row')
    row.className = 'row'
    
    heroes.forEach(hero => {
        const col = renderHero(hero)

        row.appendChild(col)
    })
    
    mainDiv().appendChild(row)
}


//event handlers
const renderFormPage = (e) => {
    e.preventDefault()

    resetMain()
    
    const h3 = document.createElement('h3')
    h3.innerText = 'Find Your Hero'

    mainDiv().appendChild(h3)
    renderForm()



}

const renderBrowsePage = (e) => {
    e.preventDefault()

    resetMain()
    alert('hello')
    const h3 = document.createElement('h3')
    h3.innerText = 'Browse Available Heroes'

    mainDiv().appendChild(h3)

    renderHeroes()

}

const renderHomePage = (e) => {
    e.preventDefault()

    resetMain()
    
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    h3.innerText = 'Welcome to myHERO'
    p.innerText = 'If you are interested in getting to know heroes who have similar interests and powers to your own, this is the place to be. <br> Click on the "Find Your Hero" link to take the "Personality Quiz" to narrow your search. <br> Or you can browse through all our heroes using the "Browse Heroes" tool.'

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)
}

//event listeners
const attachFormEvent = () => {
    formLink().addEventListener('click', renderFormPage)
}

const resetMain = () => {
    mainDiv().innerHTML = ''
}

const renderHomeEvent = () => {
    homeLink().addEventListener('click', renderHomePage)
}

const browseHeroEvent = () => {
    browseLink().addEventlistener('click', renderBrowsePage)
}

document.addEventListener('DOMContentLoaded', () => {
    attachFormEvent()
})

//helpers

const createCard = (hero) => {
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