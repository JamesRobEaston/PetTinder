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
  'username' : 'USER',
  'password' : 'PROTECTED',
  'location' : 'LOCATION',
  'bio' : 'PLACEHOLDER'
  "pref_animal" : "PLACEHOLDER"
  "age_weight" : "PLACEHOLDER"
  "gender_weight" : "PLACEHOLDER"
  "location_weight" : "PLACEHOLDER"
  
};


/*  FUNCTIONS */
// these should be self explanatory as well


getNext(){
  // transition to the next card  
}

recommend(){
  // handle recommend
}

like(){
  // handle 'liking' a pet
}

superLike(){
  // handle the 'super like', i.e. prioritize when sending matches
}

dislike(){
  // essentially we will just ignore the request here
}

// MAYBE: undo
// i.e. go to previous pet profile card
undo(){
  // go back
  // decrement our counter in which we keep track of the array of Objects
}

boost(){
  // handle boosting
}

chat(){
  // send email!
}

setFields(name, username, password, location, bio){
  
}

