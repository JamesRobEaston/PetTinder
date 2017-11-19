// THIS IS THE FILE THAT HANDLES THE CARD OBJECTS

var cards;

function addCard(newCard){
	card.push(newCard);
}

sortCards(){
	//Alphabetic sort
	cards.sort(function(a, b){
        var x = a.animalType.toLowerCase();
        var y = b.animalType.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });

	let influence = 
    cards.sort(function(a, b){
        var x = a.type.toLowerCase();
        var y = b.type.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
}

//swaps two elements in cards
swap(a, b){
	let temp = cards[a];
	cards[a] = cards[b];
	cards[b] = temp;
}