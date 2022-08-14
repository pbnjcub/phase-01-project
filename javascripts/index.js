// This is for our javascript logic
let heroes = []

const baseUrl = 'https://gateway.marvel.com'
let heroUrl = `${baseUrl}/v1/public/characters`

const getHash = (ts, apiPrivateKey, apiKey) => {
    return md5(ts + apiPrivateKey + apiKey).toString()
}

let apiKey = '51cb29fb1cc1d0c2b69da2796c3d5906'
let apiPrivateKey = '99082f538e901ab37e9830648166088bf93af8d4'
let ts = Date.now().toString()
let hash = getHash(ts, apiPrivateKey, apiKey)

let requestUrl = `${heroUrl}?ts=${ts}&apiKey=${apiKey}&hash=${hash}`

//node getters
const formLink = () => document.getElementById('findHero')
const mainDiv = () => document.getElementById('main')
const browseLink = () => document.getElementById('browseHero')
const homeLink = () => document.getElementById('home')
const messageCount = () => document.getElementById('message-count')
const messageHero = () => document.getElementById('message-hero')
const divNameRow = () => document.getElementById('name-row')
const divFirstNameInput = () => document.getElementById('first-name-input')
const divLastNameInput = () => document.getElementById('last-name-input')
const divSubjectInput = () => document.getElementById('subject-input')
const divMessageInput = () => document.getElementById('message-input')

//functions

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

const fetchHeroes = () =>
    fetch(requestUrl)
    .then(resp => resp.json())
    .then(data => {
        heroes = data
        console.log(heroes)
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

const renderMessages = () => {

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

const renderMessagePage = (e) => {
    e.preventDefault()

    resetMain()
    const h3 = document.createElement('h3')
    h3.innerText = 'Message A Hero'

    mainDiv().appendChild(h3)

    createMessageForm()

    renderMessages()

}

const renderHomePage = (e) => {
    e.preventDefault()

    resetMain()

    const h3 = document.createElement('h3')

    h3.innerText = 'Welcome to myHERO'

    mainDiv().appendChild(h3)
    createHomePage()

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

const messageHeroEvent = () => {
    messageHero().addEventListener('click', renderMessagePage)
}

const hideMessageCount = () => {
    messageCount().style.display = 'none'
}

document.addEventListener('DOMContentLoaded', () => {
    fetchHeroes()
    attachFormEvent()
    renderHomeEvent()
    browseHeroEvent()
    hideMessageCount()
    messageHeroEvent()
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

const createHomePage = () => {
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.innerText = 'If you are interested in getting to know heroes who have similar interests and powers to your own, this is the place to be.'
    p2.innerText = 'Click on the "Find Your Hero" link to take the "Personality Quiz" to narrow your search.' 
    p3.innerText = 'Or you can browse through all our heroes using the "Browse Heroes" tool.'

    mainDiv().appendChild(p1)
    mainDiv().appendChild(p2)
    mainDiv().appendChild(p3)
}


const createMessageForm = () => {
    const messageForm = document.createElement('form')
    const send = document.createElement('button')
    const divNameRow = document.createElement('div')
    const divSubjRow = document.createElement('div')
    const divMessageRow = document.createElement('div')
    const divSubmitRow = document.createElement('div')
    const divFirstInputField = document.createElement('div')
    const divLastInputField = document.createElement('div')
    const inputFirstName = document.createElement('input')
    const labelFirstName = document.createElement('label')
    const inputLastName = document.createElement('input')
    const labelLastName = document.createElement('label')
    const divSubjInputField = document.createElement('div')
    const divMessageInputField = document.createElement('div')
    const inputSubj = document.createElement('input')
    const labelSubj = document.createElement('label')
    const textAreaMessage = document.createElement('textArea')
    const labelMessage = document.createElement('label')

    messageForm.className = 'col s12'
    messageForm.id = 'message-form'
    
    divNameRow.id = 'name-row'
    divNameRow.className = 'row'
    divFirstInputField.className = 'input-field col s6'
    divFirstInputField.id = 'first-name-input'
    divLastInputField.className = 'input-field col s6'
    divLastInputField.id = 'last-name-input'
    inputFirstName.id = 'first_name'
    inputFirstName.type = 'text'
    inputFirstName.class = 'validate'
    labelFirstName.for = 'first_name'
    inputLastName.id = 'last_name'
    inputLastName.type = 'text'
    inputLastName.class = 'validate'
    labelLastName.for = 'last_name'
    
    divSubjRow.id = 'subject-row'
    divSubjRow.className = 'row'
    divSubjInputField.id = 'subject-input'
    divSubjInputField.className = 'input-field col s12'
    inputSubj.id = 'subject'
    inputSubj.type = 'text'
    inputSubj.class = 'validate'
    labelSubj.for = 'subject'

    divMessageRow.id = 'message-row'
    divMessageRow.className = 'row'
    divMessageInputField.id = 'message-input'
    divMessageInputField.className = 'input-field col s12'
    textAreaMessage.id = 'textarea1'
    textAreaMessage.class = 'materialize-textarea'
    labelMessage.for = 'subject'

    divSubmitRow.id = 'submit-row'
    divSubmitRow.className = 'row'
    send.type = 'button'
    send.value = 'Send'

    labelFirstName.innerText = 'First Name'
    labelLastName.innerText = 'Last Name'
    labelSubj.innerText = 'Subject'
    labelMessage.innerText = 'Message'
    
    mainDiv().appendChild(messageForm)
    mainDiv().appendChild(divNameRow).appendChild(divFirstInputField).appendChild(inputFirstName)
    divFirstNameInput().appendChild(labelFirstName)
    mainDiv().appendChild(divNameRow).appendChild(divLastInputField).appendChild(inputLastName)
    divLastNameInput().appendChild(labelLastName)
    mainDiv().appendChild(divSubjRow).appendChild(divSubjInputField).appendChild(inputSubj)
    divSubjectInput().appendChild(labelSubj)
    mainDiv().appendChild(divMessageRow).appendChild(divMessageInputField).appendChild(textAreaMessage)
    divMessageInput().appendChild(labelMessage)
    mainDiv().appendChild(divSubmitRow).appendChild(send)

}
