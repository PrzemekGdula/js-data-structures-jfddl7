const owoce = ['kiwi', 'ananas', 'mango', 'grapefruit'];

const newArray = []

const body = document.body;

const render = (what, where) => {

    what = owoce.map( function(element, index, array) {
        return element +  '  -  obszar uprawy: tereny tropikalne'
     } )

    where.innerHTML = what;
} 

render(newArray, body)




