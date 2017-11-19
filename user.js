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
  'bio' : 'PLACEHOLDER'
  "pref_animal" : "PLACEHOLDER"
  "age_weight" : "PLACEHOLDER"
  "gender_weight" : "PLACEHOLDER"
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
  card_index++;
}

function recommend(mailAddress, pet){
  // handle recommend
  window.open('mailto:' + mailAddress + '?subject=Your New Pet!&body=Check out ' + pet.name + ', your next best friend!');
}

function like(pet){
  // handle 'liking' a pet
  likedPets.push(pet);
}

function superLike(pet){
  // handle the 'super like', i.e. prioritize when sending matches
  superLikedPets.push(pet);
}

function dislike(pets){
  // essentially we will just ignore the request here
  dislikedPets.push(pets);
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
