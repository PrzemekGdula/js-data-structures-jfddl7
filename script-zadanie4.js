const owoce = ['kiwi', 'mango', 'ananas', 'grapefruit'];

const filteredFruit = []

const body = document.body

const render = (what, where) => {
    what = owoce.filter( (element, index, array) => 
    element.length >= 6 && element.length < 10)

    where.innerHTML = what
}
render(filteredFruit, body)