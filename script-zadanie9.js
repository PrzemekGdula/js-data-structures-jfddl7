const napis = 'Lorem ipsum dolor sit amet...';

const paragraph = document.createElement('p')

const text = document.createTextNode('Przykladowy tekst: ')

const arrayText = document.createTextNode(Object.values(napis))

const body = document.body

const render = (what, where) => {
    what.appendChild(text)
    what.appendChild(arrayText)
    where.appendChild(what)
}

render(paragraph, body)