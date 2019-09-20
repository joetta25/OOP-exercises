class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
      console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
  }

let sonny = new Person ('sonny','sonny@hotmail.com', '483-485-4948' );
let jordan = new Person('Jordan','jordan@aol.com','495-586-3456');

//console.log(sonny);
//console.log(jordan);

//jordan.greet(sonny);
//sonny.greet(jordan);

console.log(`phone: ${jordan.phone}, email: ${jordan.email}`);
console.log(`phone: ${sonny.phone}, email: ${sonny.email}`);


class Card {
    constructor ( point , suit,) {
        this.point = point;
        this.suit = suit;
        
    }
    getImageURL(){
        return `images/${this.point}_of_${this.suit}`
    }
}
let myCard = new Card(5, 'diamond');
console.log(myCard);
myCard.getImageURL();

class Hand {
    constructor(){
 this.cards = [];
    }
    addCard(card){
 this.cards.pusg(card);
    }
getPoints(){
    let total = 0;
    this.cards.forEach(card => {
        total += card.point;
    })
    return total;
}
}