/*
 * user.js
 * 
 * Last edit: 11/18/17 Noah Williamson
 *
 */

// USER PROFILE

/*  GLOBALS  */

// should be self explanatory, information for the user to fill out
var fields = {

  'name' : 'PLACEHOLDER',
  'username' : 'EMAIL',
  'password' : 'PROTECTED',
  'location' : 'LOCATION',
  'bio' : 'PLACEHOLDER',
  "pref_animal" : "PLACEHOLDER",
  "pref_age" : "PLACEHOLDER",
  "pref_gender" : "PLACEHOLDER",
  "age_weight" : "PLACEHOLDER",
  "gender_weight" : "PLACEHOLDER",
  "distance_weight" : "PLACEHOLDER"

};

var card_index = 0;

var likedPets = [];
var superLikedPets = [];
var dislikedPets = [];
var prefArray = [];

/*  FUNCTIONS */
// these should be self explanatory as well

// update the display
function getNext(){
  // transition to the next card  
  var card = cards[card_index];
  
  document.getElementById('pet_pic').src = card.image;
  
  var info = "" + card.animalName + ", " + card.animalGender +", "+ card.animalAge;
  info += "<br>" + card.animalType + "<br>";
  info += "" + card.animalLocation + "<br>"; 
  info += "" + card.animalBio + "<br>";
  
  document.getElementById('bio').innerHTML = info;
}

function recommend(mailAddress, pet){
  // handle recommend
  window.open('mailto:' + mailAddress + '?subject=Your New Pet!&body=Check out ' + pet.name + ', your next best friend!');
}

function like(pet){
  // handle 'liking' a pet
  likedPets.push(pet);
  card_index++;
  getNext();
}

function superLike(pet){
  // handle the 'super like', i.e. prioritize when sending matches
  superLikedPets.push(pet);
  card_index++;
  getNext();
}

function dislike(pets){
  // essentially we will just ignore the request here
  dislikedPets.push(pets);
  card_index++;
  getNext();
}

// MAYBE: undo
// i.e. go to previous pet profile card
function undo(){
  // go back
  // decrement our counter in which we keep track of the array of Objects
  card_index--;
  getNext();
}

// boost(){
//   // handle boosting
// }

function chat(pet){
  // send email!
  window.open('mailto:' + pet.username + '?subject=PetTinder Inquiry');
}

function setFields(name, username, password, location, bio, pref_animal, age_weight, gender_weight, distance_weight){
  fields.name = name;
  fields.username = username;
  fields.password = password;
  fields.location = location;
  fields.bio = bio;
  fields.pref_animal = pref_animal;

  fields.age_weight = age_weight;
  fields.gender_weight = gender_weight;
  fields.distance_weight = distance_weight;
  sortPrefArray();
}

function setPrefAnimal(pref_animal){
  fields.pref_animal = pref_animal;
}

function setAgeWeight(age_weight){
  fields.age_weight = age_weight;
}

function setGenderWeight(gender_weight){
  fields.gender_weight = gender_weight;
}

function setDistanceWeight(distance_weight){
  fields.distance_weight = distance_weight;
}

function sortPrefArray(){
  if(fields.age_weight > fields.gender_weight){
    if(fields.age_weight > fields.distance_weight){
    
      prefArray.push("age_weight");

      if(fields.distance_weight > fields.gender_weight){
        prefArray.push("distance_weight");
        prefArray.push("gender_weight");
      }
      else{
        prefArray.push("gender_weight");
        prefArray.push("distance_weight");
      }
    }

    else
    {
      prefArray.push("distance_weight");
      prefArray.push("age_weight");
      prefArray.push("gender_weight");
    }

  }

  else if(fields.distance_weight > fields.gender_weight){
    prefArray.push("distance_weight");
    prefArray.push("gender_weight");
    prefArray.push("age_weight");
  }

  else{
    prefArray.push("gender_weight");
    prefArray.push("distance_weight");
    prefArray.push("age_weight");
  }
}

function resetRelevantCards(){
  for(var i = 0; i < len(cards); i++){
    let x = cards[i].animalType.toLowerCase();
    let y = fields.pref_animal.toLowerCase();
    if(x == y){
      relevantCards.push(cards[i]);
    }
  }
}

/*

*/

// THIS IS THE FILE THAT HANDLES THE CARD OBJECTS

var cards = 
[ {'animalName' : 'Julio Osorio', 'animalType' : 'Camel', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 96, 'animalGender' : "MALE", 'image' : '/img/Camel/1.jpg'},
  {'animalName' : 'Russel', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Hartsville', 'animalBio' : 'Been used for petting zoos and nativity scenes. Leads she raised several calves, last one,weaned about 8 months ago. Please contact us for further information.', 'animalAge' : 156, 'animalGender' : 'FEMALE', 'image' : '/img/Camel/2.jpg'},
  {'animalName' : 'Tim', 'animalType' : 'Camel', 'animalOwner': '', 'animalLocation' : 'McKee', 'animalBio' : 'I have a 1.5 year old camel for sale. He has been used in a petting zoo all Fall and is ready to move on to a new home. He is very gentle and loves to eat out of your hand. Call or text at 606-438-9128 with any questions. I’m asking 5000 or may trade to some cattle.', 'animalAge' : 18, 'animalGender' : 'MALE', 'image' : '/img/camel/10.jpg'},
  {'animalName' : 'Matt Yoder' , 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Mount Hope', 'animalBio' : 'on the bottle\n$4500', 'animalAge' : 1, 'animalGender' : 'MALE', 'image' : '/img/Camel/16.jpg'},
  {'animalName' : 'Karl Mogensen', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Natural Bridge', 'animalBio' : 'Dromedary camel male born 10-4-2017. Bottle fed, super nice. $4000 Call 540-460-7158\nGreat for Christmas shows and petting zoos', 'animalAge' : 1, 'animalGender' : 'MALE', 'image' : '/img/Camel/18.jpg'},
  {'animalName' : 'Camille', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Sikeston', 'animalBio' : "Camille has been doing rides for about 5 years, she's had 3 calves and is currently in with two bull camels. She is trained to kush, hobble trained, loads up in a trailer easy. She is almost 7 foot tall she is a big girl. Asking $16,000 please call or text for any further information or photos. Serious inquires only!", 'animalAge' : 132, 'animalGender' : 'FEMALE', 'image' : '/img/Camel/3.jpg'},
  {'animalName' : 'Chris', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Minnesota', 'animalBio' : "Will lead and kush for any amateur, loads and trailers easy. Doesn't mind the weight of smalll children on his back. Get him a saddle and he'll absolutely make a great ride camel. $6,000", 'animalAge' : 24, 'animalGender' : 'MALE', 'image' : '/img/Camel/15.jpg'},
  {'animalName' : 'Mindy', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Tazewell', 'animalBio' : "Mindy is a five month old white female Bactrian Camel\nShe has a white mother and father\nShe is being bottle fed", 'animalAge' : 5, 'animalGender' : 'FEMALE', 'image' : '/img/Camel/17.jpg'},
  {'animalName' : 'Julio osorio', 'animalType' : 'Camel', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 8, 'animalGender' : "MALE", 'image' : '/img/Camel/1.jpg'},
  {'animalName' : 'Carla Meadors', 'animalType' : 'Kangaroo', 'animalOwner' : "", 'animalLocation' : "Florida", 'animalBio' : 'Most have been in a petting zoo and are tame.', 'animalAge' : 10, 'animalGender' : 'MALE', 'image' : '/img/Kangaroo/1.jpg'},
  {'animalName' : 'Billy', 'animalType' : 'Antelope', 'animalOwner' : "", 'animalLocation' : 'Africa', 'animalBio' : 'What do you think? He does antelope things' , 'animalAge' : 15, 'animalGender' : 'MALE', 'image' : '/img/Antelope/1.jpg'},
  {'animalName' : 'Jane', 'animalType' : 'Sloth', 'animalOwner' : "", 'animalLocation' : 'Frankfort, Germany', 'animalBio' : 'Enjoys long walks by the beach and hanging from trees.', 'animalAge' : 12, 'animalGender' : 'FEMALE', 'image' : '/img/Sloth/1.jpg'},
  {'animalName' : 'Horton', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Horton enjoys hopping and listening to whos.', 'animalAge' : 14, 'animalGender' : 'MALE', 'image' : '/img/Kangaroo/2.jpg'},
  {'animalName' : 'Vitali Akhramenko', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Sydney', 'animalBio' : 'Here\'s a picture of your future kangaroo kickin the shit out of another kangaroo.', 'animalAge' : 34, 'animalGender' : 'FEMALE', 'image' : '/img/kangaroo/3.jpg'},
  {'animalName' : 'Jack', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Friendly and enjoys cold ones. Doesn\'t (typically) bite. House trained.', 'animalAge' : 38, 'animalGender' : 'MALE', 'image' : '/img/Kangaroo/4.jpg'},
  {'animalName' : 'Albert', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Kansas', 'animalBio' : 'He is strong and an effective laborer.', 'animalAge' : 30, 'animalGender' : 'MALE', 'image' : '/img/Kangaroo/5.jpg'}
  // {'animalName' : 'Franky', 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : 'A HUGE kangaroo with a distinctive torn ear and "big pecs" is terrorising a neighbourhood.', 'animalAge' : 20, 'animalGender' : 'MALE', 'image' : '/img'}
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
];
var relevantCards = new Array();

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

	var sortOutputs = [];

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
	var sortedOut = [];

	for (let i = 0 ; i < preSortedOuts.length ; i++){
		for (let j = 0 ; j < preSortedOuts[i].length ; j++){
			sortedOut.push(preSortedOuts[i][j]);
		}
	}

	return sortedOut;
}

function sortDistance(array, distance){

	var arr = array;
	var outArr = [];
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
	var outArr = [];
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
	var outArr = [];
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

	var outArr = [];

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

function resetRelevantCards(){
  for(var i = 0; i < len(cards); i++){
    let x = cards[i].animalType.toLowerCase();
    let y = fields.pref_animal.toLowerCase();
    if(x == y){
      relevantCards.push(cards[i]);
    }
  }
}

//swaps two elements in cards
function swap(a, b){
	let temp = cards[a];
	cards[a] = cards[b];
	cards[b] = temp;
}
