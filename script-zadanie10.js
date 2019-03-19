const osoby = [
    {
        imie: 'Jan',
        nazwisko: 'Kowalski',
        wiek: 18,
        imieNazwisko: function() { 
            return `${this.imie}  ${this.nazwisko}`;
        }
    },
    {
        imie: 'Maria',
        nazwisko: 'Nowak',
        wiek: 21,
        imieNazwisko: function() {
            return `${this.imie} ${this.nazwisko}`;
        }
    }
];

console.log( Object.entries (osoby) )
