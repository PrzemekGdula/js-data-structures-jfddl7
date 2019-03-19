function render(where, what) {

    const myFoundElement = what.find(function(element, index, array) {
        return element.indexOf('A') === 0;
    });
    
    where.innerHTML = 'Pierwszą literą jest A: <strong>' + myFoundElement + '</strong>';


}

var body = document.body;

var owoce = ['Kiwi', 'Mango', 'Ananas', 'Grapefruit'];

render(body, owoce);
