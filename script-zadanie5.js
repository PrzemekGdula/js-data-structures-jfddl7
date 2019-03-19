const owoce = ['kiwi', 'mango', 'ananas', 'grapefruit'];

const concatenatedFruit = ''

const body = document.body

const render = (what, where) => {
    what = owoce.reduce( (reduced, element, index, array) => reduced +=
    element, 'Sklejone nazwy owocow: ' )
    where.innerHTML = what
}

render(concatenatedFruit, body)
