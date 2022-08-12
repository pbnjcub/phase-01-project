// This is for our javascript logic
let heroes = []
const baseUrl = 'http://localhost:3000'


//node getters
const formLink = () => document.getElementById('findHero')
const mainDiv = () => document.getElementById('main')
const browseLink = () => document.getElementById('browseHero')
const homeLink = () => document.getElementById('home')

//functions

const fetchHeroes = () =>
    fetch(baseUrl + "/heroes")
    .then(resp => resp.json())
    .then(data => {
        heroes = data
    })

const renderForm = () => {
    // create a form

}

const renderHero = (hero) => {
    const col = document.createElement('div')
    col.className = 'col s12 m4 l3'
    
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
    const h3 = document.createElement('h3')
    h3.innerText = 'Browse Available Heroes'

    mainDiv().appendChild(h3)

    renderHeroes()

}

const renderHomePage = (e) => {
    e.preventDefault()

    resetMain()

    const h3 = document.createElement('h3')
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')
    const br = document.createElement('br')
    h3.innerText = 'Welcome to myHERO'
    p1.innerText = 'If you are interested in getting to know heroes who have similar interests and powers to your own, this is the place to be.'
    p2.innerText = 'Click on the "Find Your Hero" link to take the "Personality Quiz" to narrow your search.' 
    p3.innerText = 'Or you can browse through all our heroes using the "Browse Heroes" tool.'

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p1)
    mainDiv().appendChild(p2)
    mainDiv().appendChild(p3)
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
    browseLink().addEventListener('click', renderBrowsePage)
}

document.addEventListener('DOMContentLoaded', () => {
    fetchHeroes()
    attachFormEvent()
    renderHomeEvent()
    browseHeroEvent()
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
    const img = document.createElement('img')

    divCard.className = 'card'
    divImage.className = 'card-image'
    span.className = 'card-title'
    divCardContent.className = 'card-content'
    divCardAction.className = 'card-action'

    linkOne.setAttribute('href','')
    img.setAttribute('src', hero.imageUrl)

    span.innerText = hero.name
    pDescription.innerText = hero.description
    linkOne.innerText = 'more'
    
    divImage.appendChild(img)
    divImage.appendChild(span)
    divCardContent.appendChild(pDescription)
    divCardAction.appendChild(linkOne)

    divCard.appendChild(divImage)
    divCard.appendChild(divCardContent)
    divCard.appendChild(divCardAction)

    return divCard
}



{/* <h3>Welcome to myHERO</h3>
<p>lkjasd;flkja;dslkfj ;lkjdofm kjdkfdjk.</p> */}