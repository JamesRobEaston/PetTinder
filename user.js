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
  'username' : 'USER', //Email address of user
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

var likedPets;
var superLikedPets;
var dislikedPets;
var prefArray[];

/*  FUNCTIONS */
// these should be self explanatory as well


function getNext(){
  // transition to the next card  

}

function recommend(mailAddress, pet){
  // handle recommend
  window.open('mailto:' + mailAddress + '?subject=Your New Pet!&body=Check out ' + pet.name + ', your next best friend!');
}

function like(pet){
  // handle 'liking' a pet
  likedPets.push(pet);
  card_index++;
}

function superLike(pet){
  // handle the 'super like', i.e. prioritize when sending matches
  superLikedPets.push(pet);
  card_index++;
}

function dislike(pets){
  // essentially we will just ignore the request here
  dislikedPets.push(pets);
  card_index++;
}

// MAYBE: undo
// i.e. go to previous pet profile card
function undo(){
  // go back
  // decrement our counter in which we keep track of the array of Objects
  card_index--;
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
    
      prefArray.push("age");

      if(fields.distance_weight > fields.gender_weight){
        prefArray.push("distance");
        prefArray.push("gender");
      }
      else{
        prefArray.push("gender");
        prefArray.push("distance");
      }
    }

    else
    {
      prefArray.push("distance");
      prefArray.push("age");
      prefArray.push("gender");
    }

  }

  else if(fields.distance_weight > fields.gender_weight){
    prefArray.push("distance");
    prefArray.push("gender");
    prefArray.push("age");
  }

  else{
    prefArray.push("gender");
    prefArray.push("distance");
    prefArray.push("age");
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

var cards = 
[ {'animalName' : 'Julio Osorio', 'animalType' : 'Camel', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 8, 'animalGender' : "MALE", 'image' : '/img/Camel/1.jpg'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}
  {'animalName' : , 'animalType' : , 'animalOwner' : , 'animalLocation' : , 'animalBio' : , 'animalAge' : , 'animalGender' : , 'image' : '/img'}

];

