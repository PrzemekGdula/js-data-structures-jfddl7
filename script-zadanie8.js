const kontynenty = ['Europa', 'Ameryka Północna', 'Azja',7, true];

const paragraph = document.createElement('p')

const text = document.createTextNode('Wynik dzialania naszej metody to tablica: ')

const arrayText = document.createTextNode(Object.keys(kontynenty))

const body = document.body

const render = (what, where) => {
    what.appendChild(text)
    what.appendChild(arrayText)
    where.appendChild(what)
}

render(paragraph, body)