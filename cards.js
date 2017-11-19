// THIS IS THE FILE THAT HANDLES THE CARD OBJECTS

var cards;
var relevantCards;

function addCard(name, type, owner, location, bio, age, gender){
	
	var newCard = {
		'animalName' : name,
		'animalType' : type,
		'animalOwner' : owner, //Email address
		'animalLocation' : location,
		'animalBio' : bio,
		'animalAge' : age,
		'animalGender' : gender};

	cards.push(newCard);
}

function sortCards(){
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

/*
"pref_animal" : "PLACEHOLDER"
"age_weight" : "PLACEHOLDER"
"gender_weight" : "PLACEHOLDER"
"distance_weight" : "PLACEHOLDER"
*/

function sortPreferences(){

	var sortOutputs;

	switch(prefArray[0]){
		case 'gender':
			sortOutputs.push(sortGender(relevantCards, fields.pref_gender));
			break;
		case 'age':	
			sortOutputs.push(sortAge(relevantCards, fields.pref_age));
			break;
		case 'distance':
			sortOutputs.push(sortDistance(relevantCards, fields.pref_distance));
			break;
	}

	for (let i = 1 ; i < prefArray.length ; i++){ //Iterate through each preference
		switch(prefArray[i]){
			case 'gender':
				sortOutputs.push(sortGender(sortOutputs[sortOutputs.length-1], fields.pref_gender));
				break;
			case 'age':	
				sortOutputs.push(sortAge(sortOutputs[sortOutputs.length-1], fields.pref_age));
				break;
			case 'distance':
				sortOutputs.push(sortDistance(sortOutputs[sortOutputs.length-1], fields.pref_distance));
				break;
		}
	}

	var preSortedOuts = sortOutputs[sortOutputs.length-1];
	var sortedOut;

	for (let i = 0 ; i < preSortedOuts.length ; i++){
		for (let j = 0 ; j < preSortedOuts[i].length ; j++){
			sortedOut.push(preSortedOuts[i][j]);
		}
	}

	return sortedOut;
}

function sortDistance(array, distance){

	var arr = array;
	var outArr;
	let numSorted = 0;
	let delta = 0;
	while (numSorted < len(arr)){
		
		let temp;

		for ( let i = 0 ; i < len(arr) ; i++){
			 if (arr[i] != undefined && (arr[i].animalLocation == distance - delta || arr[i].animalLocation == distance + delta) ){
				temp.push(arr[i]);
				delete arr[i];
				numSorted++;
			 }
		}

		if (len(temp)){
			outArr.push(temp);
		}

		delta++;
	}

	return outArr;

}

function sortAge(array, age){

	var arr = array;
	var outArr;
	let numSorted = 0;
	let delta = 0;
	while (numSorted < len(arr)){
		
		let temp;

		for ( let i = 0 ; i < len(arr) ; i++){
			 if (arr[i] != undefined && (arr[i].animalAge == age - delta || arr[i].animalAge == age + delta) ){
				 temp.push(arr[i]);
				delete arr[i];
				numSorted++;
			 }
		}

		if (len(temp) > 0){
			outArr.push(temp);
		}

		delta++;
	}

	return outArr;

}

function sortGender(array, gender){

	var arr = array;
	var outArr;
	let delta = 0;

	let temp;

	for ( let i = 0 ; i < len(arr) ; i++){
		if (arr[i].animalGender == gender){
		   temp.push(arr[i]);
		   delete arr[i];
		}
   }

   if (len(temp)){
	   outArr.push(temp);
   }

   for ( let i = 0 ; i < len(arr) ; i++){
	if (arr[i] != undefined){
	   outArr.push(arr[i]);
	   delete arr[i];
	}

	return outArr;
}

/*
Finds all animals (cards) of type 'type' in 'arr' and return them in a new array

PARAMETERS:
arr - array to sort
type - animal type to select

Returns array of animals of the selected type
*/
function selectAnimal(arr, type){

	var outArr;

	for (let i = 0 ; i < len(arr) ; i++){
		if (outArr[i].animalType === type){
			outArr.push(arr[i]);
		}
	}

	return outArr;

}

/*

function selectAge(arr, age){

	var outArr;
	
	for (let i = 0 ; i < len(arr) ; i++){
		if (outArr[i].animalAge === age){
			outArr.push(arr[i]);
		}
	}
	
	return outArr;

}

function selectGender(arr, gender){
	
	var outArr;
	
	for (let i = 0 ; i < len(arr) ; i++){
		if (outArr[i].animalGender === gender){
			outArr.push(arr[i]);
		}
	}
	
	return outArr;
}

function selectDistance(arr, dist){

	var outArr;
	
	for (let i = 0 ; i < len(arr) ; i++){
		if (outArr[i].animalLocation === dist){
			outArr.push(arr[i]);
		}
	}
	
	return outArr;

}
*/

//swaps two elements in cards
function swap(a, b){
	let temp = cards[a];
	cards[a] = cards[b];
	cards[b] = temp;
}