// This is for our javascript logic
let heroes = []
let searchValue
let totLikes = 0

const baseUrl = 'https://gateway.marvel.com'
let heroUrl = `${baseUrl}/v1/public/characters`

const getHash = (ts, apiPrivateKey, apiKey) => {
    return md5(ts + apiPrivateKey + apiKey).toString()
}

let apiKey = '51cb29fb1cc1d0c2b69da2796c3d5906'
let apiPrivateKey = '99082f538e901ab37e9830648166088bf93af8d4'
let ts = Date.now().toString()
let hash = getHash(ts, apiPrivateKey, apiKey)
let requestUrl = `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}`


//node getters
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
const divNameInput = () => document.getElementById('name-input')
const browseHeroForm = () => document.getElementById('browse-form')
const browseResultsRow = () => document.getElementById('browse-results-row')
const messageHeroForm = () => document.getElementById('message-form')
const likeBtns = () => document.querySelectorAll('a.like-btns')
const numLikes = () => document.querySelectorAll('num-like')


//functions
const resetBrowse = () => {
    browseResultsRow().remove()
}

const resetMain = () => {
    mainDiv().innerHTML = ''
}
const requestUrlSearchByName = (searchValue) => `${heroUrl}?ts=${ts}&apikey=${apiKey}&hash=${hash}&nameStartsWith=${searchValue}`

const fetchHeroes = () =>
    fetch(requestUrl)
    .then(resp => resp.json())
    .then(data => {
        heroes = data
    })

const browseHeroesByName = () =>
    fetch(requestUrlSearchByName(searchValue))
    .then(resp => resp.json())
    .then(data => {
        heroes = data
        resetBrowse()
        renderHeroes(heroes)
    })



const renderHero = (hero) => {
    const col = document.createElement('div')
    col.className = 'col s12 m4 l4'
    
    col.appendChild(createCard(hero))

    return col
}

const renderHeroes = () => {
    const row = document.createElement('row')
    row.className = 'row'
    row.id = 'browse-results-row'
    heroes.data.results.forEach(hero => {
        const col = renderHero(hero)
        row.appendChild(col)
    })
    
    mainDiv().appendChild(row)
}

const renderMessages = () => {

}
    

//event handlers

const addLikes = (e) => {
    e.preventDefault()
    totLikes = totLikes + 1
    console.log(totLikes)
}

const renderBrowsePage = (e) => {
    e.preventDefault()
    resetMain()

    const h3 = document.createElement('h3')
    h3.innerText = 'Browse Available Heroes'

    mainDiv().appendChild(h3)
    createBrowseForm()
    nameStartsWithEvent()
    renderHeroes(heroes)
    likeBtnEvent()
}

const searchHeroes = (e) => {
    e.preventDefault()
    searchValue = document.getElementById('name').value
    browseHeroesByName(searchValue)
}

const renderMessagePage = (e) => {
    e.preventDefault()

    resetMain()
    const h3 = document.createElement('h3')
    h3.innerText = 'Message A Hero'

    mainDiv().appendChild(h3)

    createMessageForm()

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

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, heroes);
  });

const renderHomeEvent = () => {
    homeLink().addEventListener('click', renderHomePage)
}

const browseHeroEvent = () => {
    browseLink().addEventListener('click', renderBrowsePage)
}

const nameStartsWithEvent = () => {
    browseHeroForm().addEventListener('submit', searchHeroes)
}

const messageHeroEvent = () => {
    messageHero().addEventListener('click', renderMessagePage)
}

const hideMessageCount = () => {
    messageCount().style.display = 'none'
}

const likeBtnEvent = () => {
    likeBtns().forEach(btn => {
        btn.addEventListener('click', addLikes)
    })
}

document.addEventListener('DOMContentLoaded', () => {
    fetchHeroes()
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
    const spanLikes = document.createElement('span')
    let imgPath = hero.thumbnail.path
    let imgExtension = hero.thumbnail.extension
    let imgUrl = `${imgPath}.${imgExtension}`

    divCard.className = 'card'
    divImage.className = 'card-image'
    span.className = 'card-title'
    divCardContent.className = 'card-content'
    divCardAction.className = 'card-action'
    linkOne.id = 'like-button'
    linkOne.className = 'like-btns'
    spanLikes.className = 'num-like'

    divCardContent.setAttribute('style', 'font-size: 10px')
    linkOne.setAttribute('href',' ')
    linkOne.setAttribute('style','color:black; font-weight:bold')
    img.setAttribute('src', imgUrl)
    img.setAttribute('class','crop-image')
    span.setAttribute('style', 'color:white; font-weight: bold; font-size: 20px; background-color: black')
    spanLikes.setAttribute('style', 'color:black; font-weight: bold')

    span.innerText = hero.name
    pDescription.innerText = hero.description
    linkOne.innerText = "like"
    spanLikes.innerText = `${totLikes}`
    
    divImage.appendChild(img)
    divImage.appendChild(span)
    divCardContent.appendChild(pDescription)
    divCardAction.appendChild(linkOne)
    divCardAction.appendChild(spanLikes)

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

//browse form
const createBrowseForm = () => {
    const browseForm = document.createElement('form')
    const search = document.createElement('button')
    const divNameRow = document.createElement('div')
    const divNameInputField = document.createElement('div')
    const inputName = document.createElement('input')
    const labelName = document.createElement('label')

    browseForm.className = 'col s12'
    browseForm.id = 'browse-form'
    divNameRow.id = 'name-row'
    divNameRow.className = 'row'
    divNameInputField.className = 'input-field col s6'
    divNameInputField.id = 'name-input'
    inputName.id = 'name'
    inputName.type = 'text'
    inputName.class = 'validate'
    labelName.for = 'name'


    search.type = 'submit'
    search.name = 'action'
    search.className = "btn waves-effect waves-light"
    search.id = 'search'

    labelName.innerText = 'Search Heroes by Name'
    search.innerHTML = 'Search <i class="material-icons right">send</i>'

    mainDiv().appendChild(browseForm)
    browseHeroForm().appendChild(divNameRow).appendChild(divNameInputField).appendChild(inputName)
    divNameInput().appendChild(labelName)
    divNameInput().appendChild(search)
    
}


//message form
const createMessageForm = () => {
    const messageForm = document.createElement('form')
    const divHeroSelect = document.createElement('div')
    const selectHeroSelect = document.createElement('select')
    const optionHeroSelect = document.createElement('option')
    const send = document.createElement('button')
    const divNameRow = document.createElement('div')
    const divSubjRow = document.createElement('div')
    const divMessageRow = document.createElement('div')
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
    
    divHeroSelect.className = 'input-field col s12'
    optionHeroSelect.value = " "
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

    send.type = 'submit'
    send.name = 'action'
    send.className = "btn waves-effect waves-light"
    send.id = 'send'

    send.innerHTML = 'Message <i class="material-icons right">send</i>'

    optionHeroSelect.innerText = 'Choose Your Hero'
    labelFirstName.innerText = 'First Name'
    labelLastName.innerText = 'Last Name'
    labelSubj.innerText = 'Subject'
    labelMessage.innerText = 'Message'
    
    mainDiv().appendChild(messageForm)
    messageHeroForm().appendChild(divHeroSelect).appendChild(selectHeroSelect).appendChild(optionHeroSelect)
    messageHeroForm().appendChild(divNameRow).appendChild(divFirstInputField).appendChild(inputFirstName)
    divFirstNameInput().appendChild(labelFirstName)
    messageHeroForm().appendChild(divNameRow).appendChild(divLastInputField).appendChild(inputLastName)
    divLastNameInput().appendChild(labelLastName)
    messageHeroForm().appendChild(divSubjRow).appendChild(divSubjInputField).appendChild(inputSubj)
    divSubjectInput().appendChild(labelSubj)
    messageHeroForm().appendChild(divMessageRow).appendChild(divMessageInputField).appendChild(textAreaMessage)
    divMessageInput().appendChild(labelMessage)
    messageHeroForm().appendChild(send)

}
