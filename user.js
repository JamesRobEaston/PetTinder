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
  "pref_price" : 0,
  "age_weight" : 2,
  "gender_weight" : 1,
  "price_weight" : 0

};

var card_index = 0;

var likedPets = [];
var superLikedPets = [];
var dislikedPets = [];
var prefArray = [];

var relevantCards = new Array();

var cards = 
[ {'animalName' : ':(', 'animalType' : 'ERROR_OUT_OF_MATCHES', 'animalOwner' : '', 'animalLocation' : ':(', 'animalBio' : ':(', 'animalAge' : -1, 'animalGender' : ':(', 'image' : 'img/Errors/thats_all_folks.jpg'},
  {'animalName' : ':(', 'animalType' : 'ERROR_NO_ITEMS_MATCHED', 'animalOwner' : '', 'animalLocation' : ':(', 'animalBio' : ':(', 'animalAge' : -1, 'animalGender' : ':(', 'image' : 'img/Errors/no_items.jpg'},
  {'animalName' : 'Julio Osorio', 'animalType' : 'Camel', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 96, 'animalGender' : "MALE", 'image' : 'img/Camel/1.jpg'},
  {'animalName' : 'Russel', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Hartsville', 'animalBio' : 'Been used for petting zoos and nativity scenes. Leads she raised several calves, last one,weaned about 8 months ago. Please contact us for further information.', 'animalAge' : 156, 'animalGender' : 'Female', 'image' : 'img/Camel/2.jpg'},
  {'animalName' : 'Tim', 'animalType' : 'Camel', 'animalOwner': '', 'animalLocation' : 'McKee', 'animalBio' : 'I have a 1.5 year old camel for sale. He has been used in a petting zoo all Fall and is ready to move on to a new home. He is very gentle and loves to eat out of your hand. Call or text at 606-438-9128 with any questions. I’m asking 5000 or may trade to some cattle.', 'animalAge' : 18, 'animalGender' : 'Male', 'image' : 'img/camel/10.jpg'},
  {'animalName' : 'Matt Yoder' , 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Mount Hope', 'animalBio' : 'on the bottle\n$4500', 'animalAge' : 1, 'animalGender' : 'Male', 'image' : 'img/Camel/16.jpg'},
  {'animalName' : 'Karl Mogensen', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Natural Bridge', 'animalBio' : 'Dromedary camel male born 10-4-2017. Bottle fed, super nice. $4000 Call 540-460-7158\nGreat for Christmas shows and petting zoos', 'animalAge' : 1, 'animalGender' : 'Male', 'image' : 'img/Camel/18.jpg'},
  {'animalName' : 'Camille', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Sikeston', 'animalBio' : "Camille has been doing rides for about 5 years, she's had 3 calves and is currently in with two bull camels. She is trained to kush, hobble trained, loads up in a trailer easy. She is almost 7 foot tall she is a big girl. Asking $16,000 please call or text for any further information or photos. Serious inquires only!", 'animalAge' : 132, 'animalGender' : 'Female', 'image' : 'img/Camel/3.jpg'},
  {'animalName' : 'Chris', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Minnesota', 'animalBio' : "Will lead and kush for any amateur, loads and trailers easy. Doesn't mind the weight of smalll children on his back. Get him a saddle and he'll absolutely make a great ride camel. $6,000", 'animalAge' : 24, 'animalGender' : 'Male', 'image' : 'img/Camel/15.jpg'},
  {'animalName' : 'Mindy', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Tazewell', 'animalBio' : "Mindy is a five month old white female Bactrian Camel\nShe has a white mother and father\nShe is being bottle fed", 'animalAge' : 5, 'animalGender' : 'Female', 'image' : 'img/Camel/17.jpg'},
  {'animalName' : 'Julio osorio', 'animalType' : 'Camel', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 8, 'animalGender' : "MALE", 'image' : 'img/Camel/1.jpg'},
  {'animalName' : 'Carla Meadors', 'animalType' : 'Kangaroo', 'animalOwner' : "", 'animalLocation' : "Florida", 'animalBio' : 'Most have been in a petting zoo and are tame.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/1.jpg'},
  {'animalName' : 'Billy', 'animalType' : 'Antelope', 'animalOwner' : "", 'animalLocation' : 'Africa', 'animalBio' : 'What do you think? He does antelope things' , 'animalAge' : 15, 'animalGender' : 'Male', 'image' : 'img/Antelope/1.jpg'},
  {'animalName' : 'Jane', 'animalType' : 'Sloth', 'animalOwner' : "", 'animalLocation' : 'Frankfort, Germany', 'animalBio' : 'Enjoys long walks by the beach and hanging from trees.', 'animalAge' : 12, 'animalGender' : 'Female', 'image' : 'img/Sloth/1.jpg'},
  {'animalName' : 'Horton', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Horton enjoys hopping and listening to whos.', 'animalAge' : 14, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/2.jpg'},
  {'animalName' : 'Vitali Akhramenko', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Sydney', 'animalBio' : 'Here\'s a picture of your future kangaroo kickin the shit out of another kangaroo.', 'animalAge' : 34, 'animalGender' : 'Female', 'image' : 'img/kangaroo/3.jpg'},
  {'animalName' : 'Jack', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Friendly and enjoys cold ones. Doesn\'t (typically) bite. House trained.', 'animalAge' : 38, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/4.jpg'},
  {'animalName' : 'Albert', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Kansas', 'animalBio' : 'He is strong and an effective laborer.', 'animalAge' : 30, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/5.jpg'},
  {'animalName' : 'Franky', 'animalType' : '', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'A HUGE kangaroo with a distinctive torn ear and "big pecs" is terrorising a neighbourhood.', 'animalAge' : 20, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/6.jpg'}
];

/*  FUNCTIONS */
// these should be self explanatory as well

function getNext(){
  
  // transition to the next card
  var card;
  if (card_index < relevantCards.length){
    card = relevantCards[card_index];
  }else{
    for (let a = 0 ; a < cards.length ; a++){
      if (cards[a].animalType == "ERROR_OUT_OF_MATCHES"){
        card = cards[a];
      }
    }
  }
  
  if (card != undefined){
    document.getElementById('pet_pic').src = card.image;
    document.getElementById('bio').innerHTML = card.animalBio;
  }else{
    document.getElementById('pet_pic').src = 'img/Errors/technical_difficulties.jpg';
  }

  // set top name line
  var name = "" + card.animalName + ", " + card.animalGender +", " + card.animalAge;
  name += "<br>";
  
  // set bio
  var bio = card.animalType + ", " + card.animalLocation + "<br>"; 
  bio += card.animalBio + "<br>";
  
  document.getElementById('name_line').innerHTML = name;
}

function fetchFirstCard(){
  resetRelevantCards();
  sortArray();
  card_index = 0;
  getNext();
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

function setFields(name, username, password, location, bio, pref_animal,pref_age, pref_gender, pref_price, age_weight, gender_weight, price_weight){
  fields.name = name;
  fields.username = username;
  fields.password = password;
  fields.location = location;
  fields.bio = bio;
  fields.pref_animal = pref_animal;
  fields.pref_age = pref_age;
  fields.pref_gender = pref_gender;
  fields.pref_price = pref_price;
  fields.age_weight = age_weight;
  fields.gender_weight = gender_weight;
  fields.price_weight = price_weight;
  sortPrefArray();
}

function setPrefAnimal(pref_animal){
  fields.pref_animal = pref_animal;
}

function setPrefAge(pref_age){
  fields.pref_age = pref_age;
}

function setPrefGender(pref_gender){
  fields.pref_gender = pref_gender;
}

function setPrefPrice(pref_price){
  fields.pref_price = pref_price;
}

function setAgeWeight(age_weight){
  fields.age_weight = age_weight;
}

function setGenderWeight(gender_weight){
  fields.gender_weight = gender_weight;
}

function setPriceWeight(price_weight){
  fields.price_weight = price_weight;
}

function sortPrefArray(){
  if(fields.age_weight > fields.gender_weight){
    if(fields.age_weight > fields.price_weight){
    
      prefArray.push("age");

      if(fields.price_weight > fields.gender_weight){
        prefArray.push("price");
        prefArray.push("gender");
      }
      else{
        prefArray.push("gender");
        prefArray.push("price");
      }
    }

    else
    {
      prefArray.push("price");
      prefArray.push("age");
      prefArray.push("gender");
    }

  }

  else if(fields.price_weight > fields.gender_weight){
    prefArray.push("price");
    prefArray.push("gender");
    prefArray.push("age");
  }

  else{
    prefArray.push("gender");
    prefArray.push("price");
    prefArray.push("age");
  }
}

/*
Selects all cards of the correct animal type and loads them into relevant cards
*/
function resetRelevantCards(){
  relevantCards = []; //Clear relevantCards
  for(var i = 0; i < cards.length; i++){
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

/*var cards = 
[ {'animalName' : 'Julio Osorio', 'animalType' : 'Camel', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 96, 'animalGender' : "MALE", 'image' : 'img/Camel/1.jpg'},
  {'animalName' : 'Russel', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Hartsville', 'animalBio' : 'Been used for petting zoos and nativity scenes. Leads she raised several calves, last one,weaned about 8 months ago. Please contact us for further information.', 'animalAge' : 156, 'animalGender' : 'Female', 'image' : 'img/Camel/2.jpg'},
  {'animalName' : 'Tim', 'animalType' : 'Camel', 'animalOwner': '', 'animalLocation' : 'McKee', 'animalBio' : 'I have a 1.5 year old camel for sale. He has been used in a petting zoo all Fall and is ready to move on to a new home. He is very gentle and loves to eat out of your hand. Call or text at 606-438-9128 with any questions. I’m asking 5000 or may trade to some cattle.', 'animalAge' : 18, 'animalGender' : 'Male', 'image' : 'img/camel/10.jpg'},
  {'animalName' : 'Matt Yoder' , 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Mount Hope', 'animalBio' : 'on the bottle\n$4500', 'animalAge' : 1, 'animalGender' : 'Male', 'image' : 'img/Camel/16.jpg'},
  {'animalName' : 'Karl Mogensen', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Natural Bridge', 'animalBio' : 'Dromedary camel male born 10-4-2017. Bottle fed, super nice. $4000 Call 540-460-7158\nGreat for Christmas shows and petting zoos', 'animalAge' : 1, 'animalGender' : 'Male', 'image' : 'img/Camel/18.jpg'},
  {'animalName' : 'Camille', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Sikeston', 'animalBio' : "Camille has been doing rides for about 5 years, she's had 3 calves and is currently in with two bull camels. She is trained to kush, hobble trained, loads up in a trailer easy. She is almost 7 foot tall she is a big girl. Asking $16,000 please call or text for any further information or photos. Serious inquires only!", 'animalAge' : 132, 'animalGender' : 'Female', 'image' : 'img/Camel/3.jpg'},
  {'animalName' : 'Chris', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Minnesota', 'animalBio' : "Will lead and kush for any amateur, loads and trailers easy. Doesn't mind the weight of smalll children on his back. Get him a saddle and he'll absolutely make a great ride camel. $6,000", 'animalAge' : 24, 'animalGender' : 'Male', 'image' : 'img/Camel/15.jpg'},
  {'animalName' : 'Mindy', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Tazewell', 'animalBio' : "Mindy is a five month old white female Bactrian Camel\nShe has a white mother and father\nShe is being bottle fed", 'animalAge' : 5, 'animalGender' : 'Female', 'image' : 'img/Camel/17.jpg'},
  {'animalName' : 'Julio osorio', 'animalType' : 'Camel', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 8, 'animalGender' : "MALE", 'image' : 'img/Camel/1.jpg'},
  {'animalName' : 'Carla Meadors', 'animalType' : 'Kangaroo', 'animalOwner' : "", 'animalLocation' : "Florida", 'animalBio' : 'Most have been in a petting zoo and are tame.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/1.jpg'},
  {'animalName' : 'Billy', 'animalType' : 'Antelope', 'animalOwner' : "", 'animalLocation' : 'Africa', 'animalBio' : 'What do you think? He does antelope things' , 'animalAge' : 15, 'animalGender' : 'Male', 'image' : 'img/Antelope/1.jpg'},
  {'animalName' : 'Jane', 'animalType' : 'Sloth', 'animalOwner' : "", 'animalLocation' : 'Frankfort, Germany', 'animalBio' : 'Enjoys long walks by the beach and hanging from trees.', 'animalAge' : 12, 'animalGender' : 'Female', 'image' : 'img/Sloth/1.jpg'},
  {'animalName' : 'Horton', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Horton enjoys hopping and listening to whos.', 'animalAge' : 14, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/2.jpg'},
  {'animalName' : 'Vitali Akhramenko', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Sydney', 'animalBio' : 'Here\'s a picture of your future kangaroo kickin the shit out of another kangaroo.', 'animalAge' : 34, 'animalGender' : 'Female', 'image' : 'img/kangaroo/3.jpg'},
  {'animalName' : 'Jack', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Friendly and enjoys cold ones. Doesn\'t (typically) bite. House trained.', 'animalAge' : 38, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/4.jpg'},
  {'animalName' : 'Albert', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Kansas', 'animalBio' : 'He is strong and an effective laborer.', 'animalAge' : 30, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/5.jpg'},
  {'animalName' : 'Franky', 'animalType' : '', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'A HUGE kangaroo with a distinctive torn ear and "big pecs" is terrorising a neighbourhood.', 'animalAge' : 20, 'animalGender' : 'Male', 'image' : 'img'}
];
*/
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'},
  // {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : 'img'}


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
		case 'price':
			sortOutputs.push(sortPrice(relevantCards, fields.pref_price));
      break;
    default:
      sortOutputs.push(sortAge(relevantCards, fields.pref_age)); //Note! This line is executing because the switch cases aren't matching with the prefArray values. Fix this! The sort won't work correctly until you do!
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
			case 'price':
				sortOutputs.push(sortPrice(sortOutputs[sortOutputs.length-1], fields.pref_price));
				break;
      default:
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

function sortPrice(array, price){

	var arr = array;
	var outArr = [];
	let numSorted = 0;
	let delta = 0;
	while (numSorted < arr.length){
		
		let temp = [];

		for ( let i = 0 ; i < arr.length ; i++){
			 if (arr[i] != undefined && (arr[i].animalLocation == price - delta || arr[i].animalLocation == price + delta) ){
				temp.push(arr[i]);
				delete arr[i];
				numSorted++;
			 }
		}

		if (temp.length > 0){
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
	while (numSorted < arr.length){
		
		let temp = [];

		for ( let i = 0 ; i < arr.length ; i++){
			 if (arr[i] != undefined && (arr[i].animalAge == age - delta || arr[i].animalAge == age + delta) ){
				  temp.push(arr[i]);
				  delete arr[i];
				  numSorted++;
			 }
		}

		if (temp.length > 0){
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

	let temp = [];

	for ( let i = 0 ; i < arr.length ; i++){
		if (arr[i].animalGender == gender){
		   temp.push(arr[i]);
		   delete arr[i];
		}
   }

   if (temp.length > 0){
	   outArr.push(temp);
   }

  for ( let i = 0 ; i < arr.length ; i++){
    if (arr[i] != undefined){
      outArr.push(arr[i]);
      delete arr[i];
    }
  }

	return outArr;
}

function sortArray(){
  if (prefArray[0] === "age"){
      let animalAspect = 'animalAge';
  }
  else if(prefArray[0] === "price"){
     let animalAspect = "animalPrice";
  }
  else{
    let animalAspect = "animalGender";
  }
  bubbleSort(relevantCards,animalAspect, fields["pref_" + prefArray[0]]);
  let j = 0;
  let k = 0;
  let counter = 0;
  for(let i = 1; i < 3; i++){
    if (prefArray[i] === "age"){
      animalAspect = 'animalAge';
    }
    else if(prefArray[i] === "price"){
      animalAspect = "animalPrice";
    }
    else{
      animalAspect = "animalGender";
    }
    while(j < relevantCards.length){
      let temp = new Array();
      temp.push(relevantCards[j]);
      k = j+1;
      counter = 0;
      while(k < relevantCards.length){
        if(relevantCards[k][animalAspect] === temp[counter][animalAspect]){
          temp.push(relevantCards[k]);
          counter++;
          k++;
        }
        else{
          break;
        }
      }
      bubbleSort(temp, animalAspect, fields["pref_" + prefArray[i]]);
      for(counter = j; counter < k; counter++){
        relevantCards[counter] = temp[counter - j];
      }
    }
  }
}

//array==the array that needs to be sorted, aspect == the attribute to sort by, 
//prefAspectVal == the preferred value of the aspect
function bubbleSort(array, aspect, prefAspectVal){
  let delta = 0;
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length- i- 1; j++){
      //if the value of aspect in array[j] is further from the prefered value than array[j+1], swap
      if(Math.abs(array[j][aspect] - delta - prefAspectVal) > Math.abs(array[j][aspect] - delta - prefAspectVal)){
        swap(array, j , j+1);
      }
      delta++;
    }
  }
}

/*
Finds all animals (cards) of type 'type' in 'arr' and return them in a new array

PARAMETERS:
arr - array to sort
type - animal type to select

Returns array of animals of the selected type
*/
// function selectAnimal(arr, type){

// 	var outArr = [];

// 	for (let i = 0 ; i < arr.length ; i++){
// 		if (outArr[i].animalType === type){
// 			outArr.push(arr[i]);
// 		}
// 	}

// 	return outArr;

// }

/*

function selectAge(arr, age){

	var outArr = [];
	
	for (let i = 0 ; i < arr.length ; i++){
		if (outArr[i].animalAge === age){
			outArr.push(arr[i]);
		}
	}
	
	return outArr;

}

function selectGender(arr, gender){
	
	var outArr = [];
	
	for (let i = 0 ; i < arr.length ; i++){
		if (outArr[i].animalGender === gender){
			outArr.push(arr[i]);
		}
	}
	
	return outArr;
}

function selectPrice(arr, dist){

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
  relevantCards = [];
  for(var i = 0; i < cards.length; i++){
    let x = cards[i].animalType.toLowerCase();
    let y = fields.pref_animal.toLowerCase();
    if(x == y){
      relevantCards.push(cards[i]);
    }
  }

  if (relevantCards.length == 0){
    
    for(var i = 0; i < cards.length; i++){
      if(cards[i].animalType.toLowerCase() == 'ERROR_NO_ITEMS_MATCHED'){
        relevantCards.push(cards[i]);
      }
    }

  }

}

//swaps two elements in cards
function swap(array, a, b){
	let temp = array[a];
	array[a] = array[b];
	array[b] = temp;
}

function populateUserPref(){
  fields.name = 'John Doe';
  fields.username = 'john_doe@website.come';
  fields.pref_animal = 'Kangaroo';
  fields.age = 20;
  fields.gender = 'Male';
  /*'name' : 'PLACEHOLDER',
  'username' : 'EMAIL',
  'password' : 'PROTECTED',
  'location' : 'LOCATION',
  'bio' : 'PLACEHOLDER',
  "pref_animal" : "PLACEHOLDER",
  "pref_age" : "PLACEHOLDER",
  "pref_gender" : "PLACEHOLDER",
  "age_weight" : 2,
  "gender_weight" : 1,
  "price_weight" : 0*/
}

//Populate user preferences
populateUserPref();

// update the display
fetchFirstCard();