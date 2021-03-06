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
[ {'animalName' : 'Julio Osorio', 'animalType' : 'ERROR_OUT_OF_MATCHES', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 96, 'animalGender' : "MALE", 'image' : 'img/Errors/Thats_all_folks.png', 'price' : 6500},
  {'animalName' : 'Julio Osorio', 'animalType' : 'Camel', 'animalOwner' : "", 'animalLocation' : "Magnolia", 'animalBio' : 'Cushes on command, bomb proof, leads loads goes anywhere,\nAsking 6500\n Available for looking at or pick up Monday-Thursday', 'animalAge' : 96, 'animalGender' : "MALE", 'image' : 'img/Camel/1.jpg', 'price' : 6500},
  {'animalName' : 'Russel', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Hartsville', 'animalBio' : 'Been used for petting zoos and nativity scenes. Leads she raised several calves, last one,weaned about 8 months ago. Please contact us for further information.', 'animalAge' : 156, 'animalGender' : 'Female', 'image' : 'img/Camel/2.jpg', 'price' : 8000},
  {'animalName' : 'Tim', 'animalType' : 'Camel', 'animalOwner': '', 'animalLocation' : 'McKee', 'animalBio' : 'I have a 1.5 year old camel for sale. He has been used in a petting zoo all Fall and is ready to move on to a new home. He is very gentle and loves to eat out of your hand. Call or text at 606-438-9128 with any questions. I’m asking 5000 or may trade to some cattle.', 'animalAge' : 18, 'animalGender' : 'Male', 'image' : 'img/camel/10.jpg', 'price' : 0},
  {'animalName' : 'Matt Yoder' , 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Mount Hope', 'animalBio' : 'on the bottle\n$4500', 'animalAge' : 1, 'animalGender' : 'Male', 'image' : 'img/Camel/16.jpg', 'price' : 4500},
  {'animalName' : 'Karl Mogensen', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Natural Bridge', 'animalBio' : 'Dromedary camel male born 10-4-2017. Bottle fed, super nice. $4000 Call 540-460-7158\nGreat for Christmas shows and petting zoos', 'animalAge' : 1, 'animalGender' : 'Male', 'image' : 'img/Camel/18.jpg', 'price' : 4000},
  {'animalName' : 'Camille', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Sikeston', 'animalBio' : "Camille has been doing rides for about 5 years, she's had 3 calves and is currently in with two bull camels. She is trained to kush, hobble trained, loads up in a trailer easy. She is almost 7 foot tall she is a big girl. Asking $16,000 please call or text for any further information or photos. Serious inquires only!", 'animalAge' : 132, 'animalGender' : 'Female', 'image' : 'img/Camel/3.jpg', 'price' : 16000},
  {'animalName' : 'Chris', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Minnesota', 'animalBio' : "Will lead and kush for any amateur, loads and trailers easy. Doesn't mind the weight of smalll children on his back. Get him a saddle and he'll absolutely make a great ride camel. $6,000", 'animalAge' : 24, 'animalGender' : 'Male', 'image' : 'img/Camel/15.jpg', 'price' : 6000},
  {'animalName' : 'Mindy', 'animalType' : 'Camel', 'animalOwner' : '', 'animalLocation' : 'Tazewell', 'animalBio' : "Mindy is a five month old white female Bactrian Camel\nShe has a white mother and father\nShe is being bottle fed", 'animalAge' : 5, 'animalGender' : 'Female', 'image' : 'img/Camel/17.jpg', 'price' : 12000},
  {'animalName' : 'Carla Meadors', 'animalType' : 'Kangaroo', 'animalOwner' : "", 'animalLocation' : "Florida", 'animalBio' : 'Most have been in a petting zoo and are tame.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/1.jpg', 'price' : 9000},
  {'animalName' : 'Billy', 'animalType' : 'Antelope', 'animalOwner' : "", 'animalLocation' : 'Africa', 'animalBio' : 'What do you think? He does antelope things' , 'animalAge' : 15, 'animalGender' : 'Male', 'image' : 'img/Antelope/1.jpg', 'price' : 3000},
  {'animalName' : 'Jane', 'animalType' : 'Sloth', 'animalOwner' : "", 'animalLocation' : 'Frankfort, Germany', 'animalBio' : 'Enjoys long walks by the beach and hanging from trees.', 'animalAge' : 12, 'animalGender' : 'Female', 'image' : 'img/Sloth/1.jpg', 'price' : 2000},
  {'animalName' : 'Horton', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Horton enjoys hopping and listening to whos.', 'animalAge' : 14, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/2.jpg', 'price' : 1000},
  {'animalName' : 'Vitali Akhramenko', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Sydney', 'animalBio' : 'Here\'s a picture of your future kangaroo kickin the shit out of another kangaroo.', 'animalAge' : 34, 'animalGender' : 'Female', 'image' : 'img/kangaroo/3.jpg', 'price' : 100000},
  {'animalName' : 'Jack', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Friendly and enjoys cold ones. Doesn\'t (typically) bite. House trained.', 'animalAge' : 38, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/4.jpg', 'price' : 500},
  {'animalName' : 'Albert', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Kansas', 'animalBio' : 'He is strong and an effective laborer.', 'animalAge' : 30, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/5.jpg', 'price' : 2500},
  {'animalName' : 'Franky', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'A HUGE kangaroo with a distinctive torn ear and "big pecs" is terrorising a neighbourhood.', 'animalAge' : 20, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/6.jpg', 'price' : 7000},
  {'animalName' : 'Igor', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Igor is wanted in 18 countries for murder. He has a temper. Otherwise he is very caring and makes a wonderful pet.', 'animalAge' : 35, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/11.jpg', 'price' : 3750},
  {'animalName' : 'Johannes', 'animalType' : 'Kangaroo', 'animalOwner' : 'There is a mini kangaroo in me belly. Thats low key wierd bro.', 'animalLocation' : 'Australia', 'animalBio' : '', 'animalAge' : 23, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/12.jpg', 'price' : 3891},
  {'animalName' : 'Donald', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'London', 'animalBio' : "Who doesn't want a Kangaroo?", 'animalAge' : 24, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/7.jpg', 'price' : 1000},
  {'animalName' : 'Bertha', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Sydney', 'animalBio' : "Also known as 'Big Bertha' in the ring. She is the perfect boxing partner.", 'animalAge' : 30, 'animalGender' : 'Female', 'image' : 'img/Kangaroo/8.jpg', 'price' : 4000},
  {'animalName' : 'Dorg', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : "Please help. Dorg the unstoppable destroyed my entire village and I can't contain him.", 'animalAge' : 18, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/9.jpg', 'price' : 1},
  {'animalName' : 'Nicholas', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : 'Nicholas is the love of my life, but if you love somethin you must let them go. I love you Nicholas, Goodbye.', 'animalAge' : 7, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/10.jpg', 'price' : 900},
  {'animalName' : 'Kate', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : '', 'animalAge' : 47, 'animalGender' : 'Female', 'image' : 'img/Kangaroo/13.jpg', 'price' : 1901},
  {'animalName' : 'Kangaroo Jack', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'London', 'animalBio' : 'This Kangaroo stole my jacket with all of my money in it. Please take him.', 'animalAge' : 22, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/14.jpg', 'price' : -10},
  {'animalName' : 'Francis', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'London', 'animalBio' : '', 'animalAge' : 15, 'animalGender' : 'Female', 'image' : 'img/Kangaroo/15.jpg', 'price' : 1905},
  {'animalName' : 'Kelsey', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'London', 'animalBio' : '', 'animalAge' : 20, 'animalGender' : 'Female', 'image' : 'img/Kangaroo/16.jpg', 'price' : 4000},
  {'animalName' : 'Maisy', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'London', 'animalBio' : '', 'animalAge' : 31, 'animalGender' : 'Female', 'image' : 'img/Kangaroo/17.jpg', 'price' : 5050},
  {'animalName' : 'Muki', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'London', 'animalBio' : '', 'animalAge' : 11, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/18.jpg', 'price' : 10000},
  {'animalName' : 'Francois', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'London', 'animalBio' : '', 'animalAge' : 20, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/19.jpg', 'price' : 3060},
  {'animalName' : 'Louis', 'animalType' : 'Kangaroo', 'animalOwner' : '', 'animalLocation' : 'Australia', 'animalBio' : '', 'animalAge' : 33, 'animalGender' : 'Male', 'image' : 'img/Kangaroo/20.jpg', 'price' : 1600},
  {'animalName' : 'Doge', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Toronto', 'animalBio' : "Doge is one-of-a-kind. I'm giving you a steal", 'animalAge' : 24, 'animalGender' : 'Male', 'image' : 'img/Dog/1.jpg', 'price' : 10000000},
  {'animalName' : 'Jon', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Toronto', 'animalBio' : "Jon is the perfect K9 dog, he can smell up to 9 K's from a mile away!", 'animalAge' : 32, 'animalGender' : 'Male', 'image' : 'img/Dog/2.jpg', 'price' : 400},
  {'animalName' : 'Stephen', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Toronto', 'animalBio' : 'He is a good boy.', 'animalAge' : 15, 'animalGender' : 'Male', 'image' : 'img/Dog/3.jpg', 'price' : 1200},
  {'animalName' : 'Jean', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Toronto', 'animalBio' : "Jean's first name is Billy and he is not my lover", 'animalAge' : 47, 'animalGender' : 'Male', 'image' : 'img/Dog/4.jpg', 'price' : 850},
  {'animalName' : 'Anthony', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Toronto', 'animalBio' : 'He can walk like a hooman. Come on now.', 'animalAge' : 37, 'animalGender' : 'Male', 'image' : 'img/Dog/5.jpg', 'price' : 700},
  {'animalName' : 'Tim', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Dubai', 'animalBio' : 'This is Tim flying! He is a flying doggo.', 'animalAge' : 27, 'animalGender' : 'Male', 'image' : 'img/Dog/6.jpg', 'price' : 3000},
  {'animalName' : 'Ivan', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Hamburg', 'animalBio' : 'Rabies!', 'animalAge' : 63, 'animalGender' : 'Male', 'image' : 'img/Dog/7.jpg', 'price' : 600},
  {'animalName' : 'Vladimir', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Dubai', 'animalBio' : 'He is also known as the living marshmellow.', 'animalAge' : 23, 'animalGender' : 'Male', 'image' : 'img/Dog/8.jpg', 'price' : 400},
  {'animalName' : 'Sergei', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Hamburg', 'animalBio' : "Я настоящая собака, а не бот.", 'animalAge' : 52, 'animalGender' : 'Male', 'image' : 'img/Dog/9.jpg', 'price' : 20},
  {'animalName' : 'Robert', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Dubai', 'animalBio' : 'Also known as the bone shredder', 'animalAge' : 15 ,'animalGender' : 'Male', 'image' : 'img/Dog/10.jpg', 'price' : 800},
  {'animalName' : 'Franklin', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Dubai', 'animalBio' : 'Franklin is a sweet dog; be carefule though, she is often mistaked for a cloud.', 'animalAge' : 35, 'animalGender' : 'Male', 'image' : 'img/Dog/11.jpg', 'price' : 150},
  {'animalName' : 'Jackie', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Hamburg', 'animalBio' : 'Jackie is a lover and likes to think she is a lap dog.', 'animalAge' : 27, 'animalGender' : 'Female', 'image' : 'img/Dog/12.jpg', 'price' : 250},
  {'animalName' : 'Luna', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Dubai', 'animalBio' : 'Monkey not included.', 'animalAge' : 16, 'animalGender' : 'Female', 'image' : 'img/Dog/13.jpg', 'price' : 0},
  {'animalName' : 'Maisy', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Hamburg', 'animalBio' : 'Maisy likes long walks and the beach and to stare off into the distance.', 'animalAge' : 36, 'animalGender' : 'Female', 'image' : 'img/Dog/14.jpg', 'price' : 830},
  {'animalName' : 'Generic dog', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Dubai', 'animalBio' : 'Generic Dog is good dog. Plz luv.', 'animalAge' : 35, 'animalGender' : 'Female', 'image' : 'img/Dog/15.jpg', 'price' : 900},
  {'animalName' : 'Bitey dog', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Dubai', 'animalBio' : 'Bitey Dog is almost as savage as your mom.', 'animalAge' : 25, 'animalGender' : 'Female', 'image' : 'img/Dog/16.jpg', 'price' : 370},
  {'animalName' : 'Megan', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Hamburg', 'animalBio' : 'Wut du u wunt hooman?', 'animalAge' : 26, 'animalGender' : 'Female', 'image' : 'img/Dog/17.jpg', 'price' : 90},
  {'animalName' : 'Kate', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Hamburg', 'animalBio' : 'Kate is a playful, fun-loving best friend!', 'animalAge' : 15, 'animalGender' : 'Female', 'image' : 'img/Dog/18.jpg', 'price' : 560},
  {'animalName' : 'Christine', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Dubai', 'animalBio' : 'Christine is a wonderful loving dog, but she is very protective!', 'animalAge' : 26, 'animalGender' : 'Female', 'image' : 'img/Dog/19.jpg', 'price' : 62},
  {'animalName' : 'Paula', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Los Angeles', 'animalBio' : 'Paula will often disapear for days at a time, but when shes home she is wonderful!', 'animalAge' : 62, 'animalGender' : 'Female', 'image' : 'img/Dog/20.jpg', 'price' : 98},
  {'animalName' : 'Hubert', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Hamburg', 'animalBio' : 'Does anyone actually read these?', 'animalAge' : 15, 'animalGender' : 'Female', 'image' : 'img/Dog/21.jpg', 'price' : 320},
  {'animalName' : 'Kylie', 'animalType' : 'Dog', 'animalOwner' : '', 'animalLocation' : 'Los Angeles', 'animalBio' : 'Kylie loves water, she swims whenever she cans and sometimes plays with the water!', 'animalAge' : 22, 'animalGender' : 'Female', 'image' : 'img/Dog/22.jpg', 'price' : 20},
  {'animalName' : 'Mitch', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : 'Mitch is a wonderfule friend and often makes the nights feel less lonely. He is not needy and would be good in any home.', 'animalAge' : 17, 'animalGender' : 'Male', 'image' : 'img/Turtle/1.jpg', 'price' : 800},
  {'animalName' : 'John', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : 'John has a great sense of humor! Every time you love him he pretends to not love you and hides in his shell...haha!', 'animalAge' : 14, 'animalGender' : 'Male', 'image' : 'img/Turtle/2.jpg', 'price' : 700},
  {'animalName' : 'Luke', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : "Luke is a great pet! However, I must warn you, do NOT try to walk him. It doesn't work out well", 'animalAge' : 12, 'animalGender' : 'Male', 'image' : 'img/Turtle/3.jpg', 'price' : 5020},
  {'animalName' : 'Paul', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : "They say Paul's skin is made from obsidian, but do not take him out at night. You won't see him for days.", 'animalAge' : 17, 'animalGender' : 'Male', 'image' : 'img/Turtle/4.jpg', 'price' : 100},
  {'animalName' : 'Will', 'animalType' : 'Turtl', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : '', 'animalAge' : 13, 'animalGender' : 'Male', 'image' : 'img/Turtle/5.jpg', 'price' : 10000},
  {'animalName' : 'Shelly', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : '', 'animalAge' : 18, 'animalGender' : 'Female', 'image' : 'img/Turtle/6.jpg', 'price' : 22},
  {'animalName' : 'Courtney', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : '', 'animalAge' : 13, 'animalGender' : 'Female', 'image' : 'img/Turtle/7.jpg', 'price' : 12},
  {'animalName' : 'Sarah', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : '', 'animalAge' : 17, 'animalGender' : 'Female', 'image' : 'img/Turtle/8.jpg', 'price' : 1000},
  {'animalName' : 'Abby', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : '', 'animalAge' : 11, 'animalGender' : 'Female', 'image' : 'img/Turtle/9.jpg', 'price' : 15},
  {'animalName' : 'Kathy', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : '', 'animalAge' : 18, 'animalGender' : 'Female', 'image' : 'img/Turtle/10.jpg', 'price' : 3000},
  {'animalName' : 'Ellen', 'animalType' : 'Turtle', 'animalOwner' : '', 'animalLocation' : 'Florida', 'animalBio' : '', 'animalAge' : 13, 'animalGender' : 'Female', 'image' : 'img/Turtle/11.jpg', 'price' : 100},
  {'animalName' : 'Frank', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : '', 'animalAge' : 21, 'animalGender' : 'Male', 'image' : 'img/Cat/1.jpg', 'price' : 700},
  {'animalName' : 'Don', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : '', 'animalAge' : 25, 'animalGender' : 'Male', 'image' : 'img/Cat/2.jpg', 'price' : 100},
  {'animalName' : 'Joe', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : '', 'animalAge' : 27, 'animalGender' : 'Male', 'image' : 'img/Cat/3.jpg', 'price' : 0},
  {'animalName' : 'Walter', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : '', 'animalAge' : 20, 'animalGender' : 'Male', 'image' : 'img/Cat/4.jpg', 'price' : .50},
  {'animalName' : 'Martin', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : '', 'animalAge' : 21, 'animalGender' : 'Male', 'image' : 'img/Cat/5.jpg', 'price' : 300},
  {'animalName' : 'Isaac', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : '', 'animalAge' : 26, 'animalGender' : 'Male', 'image' : 'img/Cat/6.jpg', 'price' : 10000},
  {'animalName' : 'Jim', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : 'Jim has an appetite for human flesh and has a mighty bite. Keep away form children.', 'animalAge' : 28, 'animalGender' : 'Male', 'image' : 'img/Cat/7.jpg', 'price' : 9200},
  {'animalName' : 'Sally', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : 'Sally likes to be pet. She also likes food and eating food. She is a cat. Cats purr sometimes. Sally has fur and is approximately furry.', 'animalAge' : 21, 'animalGender' : 'Female', 'image' : 'img/Cat/8.jpg', 'price' : 34},
  {'animalName' : 'Francine', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : 'This cat is an excellent hunter. If you have a surpluss of deer on your property, Francine here can take that problem off you and bury it in your shoe.', 'animalAge' : 21, 'animalGender' : 'Female', 'image' : 'img/Cat/9.jpg', 'price' : 2000},
  {'animalName' : 'Roxanne', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : 'Roxanne here is just waiting to gain your trust, then she will literally bite your hand off. You have been warned. Also, you should adopt her.', 'animalAge' : 22, 'animalGender' : 'Female', 'image' : 'img/Cat/10.jpg', 'price' : 20},
  {'animalName' : 'Juliet', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : 'This cat isn\'t very soft. I wouldn\'t recommend you touch this cat.', 'animalAge' : 25, 'animalGender' : 'Female', 'image' : 'img/Cat/11.jpg', 'price' : 300},
  {'animalName' : 'Oliver', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : 'Oliver has all of his shots and is ready for a loving home.', 'animalAge' : 21, 'animalGender' : 'Female', 'image' : 'img/Cat/12.jpg', 'price' : 7},
  {'animalName' : 'Amanda', 'animalType' : 'Cat', 'animalOwner' : '', 'animalLocation' : 'Portland', 'animalBio' : 'This cat is very loving and enjoys naps.', 'animalAge' : 21, 'animalGender' : 'Female', 'image' : 'img/Cat/13.jpg', 'price' : 10},
  {'animalName' : 'Bob', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Bob is a fish. He does fish things.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/1.jpg', 'price' : 15},
  {'animalName' : 'Ken', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Blub blub.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/2.jpg', 'price' : 300},
  {'animalName' : 'Lee', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : '^This little dude\'s gonna get devoured by a shark. I can see it in his eyes.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/3.jpg', 'price' : 3},
  {'animalName' : 'Dob', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Mmmmm. A little katchup, maybe a little mustand - this bugger would be mighty delicious.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/4.jpg', 'price' : 100},
  {'animalName' : 'Dory', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Dory is currently searching for her parents, please help her.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/5.jpg', 'price' : 10},
  {'animalName' : 'Harry', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : "Harry has a heart of gold, he is the best dang fish you'll ever see.", 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/6.jpg', 'price' : 10},
  {'animalName' : 'Cindy', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : "This is Cindy the shark, she's a great shark and has pleged that fish are friends, not food.", 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/7.jpg', 'price' : 92},
  {'animalName' : 'Jane', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Jane is a true beaut, she is the Megan Fox of fish', 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/8.jpg', 'price' : 72.3},
  {'animalName' : 'Mary', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'This where you put lost pets right? Please help my find Mary, my parents said that they sent her to the farm but I think she just got lost! Ill give you an award!', 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/9.jpg', 'price' : 2},
  {'animalName' : 'Donna', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : "Donna reminds you of your mom, doesn't she?", 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/10.jpg', 'price' : 1000},
  {'animalName' : 'Delilah', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Delilah is an excellent sword for fighting; be careful though, a fish as fiesty as her is not meant for kids.', 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/11.jpg', 'price' : 10},
  {'animalName' : 'Jay', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : '', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/12.jpg', 'price' : 30},
  {'animalName' : 'Deke', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : '', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/13.jpg', 'price' : 1},
  {'animalName' : 'Eli', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : '', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/14.jpg', 'price' : 1000},
  {'animalName' : 'Nick', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Boo!', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/15.jpg', 'price' : 500},
  {'animalName' : 'Michael', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Michael is a freindly fish who plays well with others.', 'animalAge' : 10, 'animalGender' : 'Male', 'image' : 'img/Fish/16.jpg', 'price' : 14000000},
  {'animalName' : 'Julie', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'Julie is up a delightful fish who is ready for a wonderful home.', 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/17.jpg', 'price' : 7000},
  {'animalName' : 'Janet', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'This fish is so terrifying, that even she is shocked when she sees her reflection. ', 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/18.jpg', 'price' : 500},
  {'animalName' : 'Ellen', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'This stout fish would make a good friend or a nutritious snack.', 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/19.jpg', 'price' : 2000},
  {'animalName' : 'Eileen', 'animalType' : 'Fish', 'animalOwner' : '', 'animalLocation' : '', 'animalBio' : 'This fish is cool.', 'animalAge' : 10, 'animalGender' : 'Female', 'image' : 'img/Fish/20.jpg', 'price' : 100}
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
      if (cards[a].animalType === "ERROR_OUT_OF_MATCHES"){
        card = cards[a];
      }
    }
  }
  
  if (card != undefined){
    document.getElementById('pet_pic').src = card.image;
    document.getElementById('bio').innerHTML = card.animalBio;

    // set top name line
    var name = "" + card.animalName + ", " + card.animalGender + ", " + (card.animalAge/12).toFixed(2) + " Yrs";
    name += "<br>Adoption Price: $ " + card.price;
    
    // set bio
    var bio = card.animalType + ", " + card.animalLocation + "<br>"; 
    bio += card.animalBio + "<br>";
    
    document.getElementById('name_line').innerHTML = name;
    console.log('New animal should be displayed. Name: ' + card.animalName);
  }else{
    document.getElementById('pet_pic').src = 'img/Errors/technical_difficulties.jpg';
    document.getElementById('bio').innerHTML = "";
    document.getElementById('name_line').innerHTML = "";
  }

  if (card.animalType === "ERROR_OUT_OF_MATCHES"){
    document.getElementById('bio').innerHTML = "";
    document.getElementById('name_line').innerHTML = "";
  }
}

function fetchFirstCard(){
  console.log('A');
  populateUserPref();
  console.log('B');
  resetRelevantCards();
  console.log('C');
  sortPrefArray();
  console.log('D');
  sortArray();
  console.log('E');
  card_index = 0;
  getNext();
  console.log('F');
}

function recommend(mailAddress, pet){
  // handle recommend
  window.open('mailto:' + mailAddress + '?subject=Your New Pet!&body=Check out ' + pet.name + ', your next best friend!');
}

function like(pet){
  // handle 'liking' a pet
  likedPets.push(pet);
  card_index++;
  if (card_index > relevantCards.length){
    card_index = relevantCards.length;
  }
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
  if (card_index < 0){
    card_index = 0;
  }
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

  var str = 'Sort Pref Array Output: ';
  for (let a = 0 ; a < prefArray.length ; a++){
    str = str + ' ' + prefArray[a];
  }

  console.log(str);
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
  let animalAspect = '';
  if (prefArray[0] === "age"){
    animalAspect = 'animalAge';
    bubbleSort(relevantCards,animalAspect, fields.temp_str);
  }
  else if(prefArray[0] === "price"){
    animalAspect = "price";
    bubbleSort(relevantCards,animalAspect, fields.temp_str);
  }
  else{
    // animalAspect = "animalGender";
    console.log("TARGET GENDER: " + fields.pref_gender);
    var temp = [];
    for (let a = 0 ; a < relevantCards.length ; a++){
      if (relevantCards[a].animalGender === fields.pref_gender){
        temp.push(relevantCards[a]);
      }
    }
    for (let a = 0 ; a < relevantCards.length ; a++){
      if (relevantCards[a].animalGender !== fields.pref_gender){
        temp.push(relevantCards[a]);
      }
    }
    relevantCards = [];
    relevantCards = temp;

    for (let b = 0 ; b < relevantCards.length ; b++){
      console.log("\t\t" + relevantCards[b]);
    }

    // relevantCards = sortGender(relevantCards, fields.pref_gender);
  }
  // var temp_str = "pref_" + prefArray[0];
  
  // let j = 0;
  // let k = 0;
  // let counter = 0;
  // for(let i = 1; i < 3; i++){
  //   if (prefArray[i] === "age"){
  //     animalAspect = 'animalAge';
  //   }
  //   else if(prefArray[i] === "price"){
  //     animalAspect = "price";
  //   }
  //   else{
  //     animalAspect = "animalGender";
  //   }
  //   while(j < relevantCards.length){
  //     let temp = new Array();
  //     temp.push(relevantCards[j]);
  //     k = j+1;
  //     counter = 0;
  //     while(k < relevantCards.length){
  //       if(relevantCards[k].animalAspect === temp[counter].animalAspect){
  //         temp.push(relevantCards[k]);
  //         counter++;
  //         k++;
  //       }
  //       else{
  //         break;
  //       }
  //     }
  //     bubbleSort(temp, animalAspect, fields["pref_" + prefArray[i]]);
  //     for(counter = j; counter < k; counter++){
  //       relevantCards[counter] = temp[counter - j];
  //     }
  //     j = k;
  //   }
  // }

  // for (let k = 0 ; k < relevantCards.length ; k++){
  //   console.log("\t(" + k + ") Age: " + relevantCards[k].animalAge + " Gender: " + relevantCards[k].animalGender + " Price: " + relevantCards[k].price);
  // }

}

//array==the array that needs to be sorted, aspect == the attribute to sort by, 
//prefAspectVal == the preferred value of the aspect
function bubbleSort(array, aspect, prefAspectVal){

  console.log("Aspect: " + aspect);

  if(aspect === "animalAge"){
    let delta = 0;
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length- i- 1; j++){
        //if the value of aspect in array[j] is further from the prefered value than array[j+1], swap
        if(Math.abs(array[j].animalAge - /*delta -*/ prefAspectVal) > Math.abs(array[j+1].animalAge /*- delta*/ - prefAspectVal)){
          swap(array, j , j+1);
        }
        delta++;
      }
    }
  }else if(aspect ==="animalGender"){
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length- i- 1; j++){
        //if the value of aspect in array[j] is further from the prefered value than array[j+1], swap
        if(array[j].animalGender === prefAspectVal && array[j+1].animalGender !== prefAspectVal){
          swap(array, j , j+1);
        }
      }
    }
  }

  else{
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length- i- 1; j++){
        //if the value of aspect in array[j] is further from the prefered value than array[j+1], swap
        if(array[j].price > array[j+1].price){
          swap(array, j , j+1);
        }
      }
    }
  }

  for (let k = 0 ; k < array.length ; k++){
    console.log("(" + k + ") Age: " + array[k].animalAge + " Gender: " + array[k].animalGender + " Price: " + array[k].price);
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

function chat(){
  // send email!
  window.open('mailto:' + relevantCards.username + '?subject=PetTinder Inquiry');
}

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
  // stuff from the clickevent function 
  document.getElementById('form').style.display='none';
  document.getElementById('match').style.display='block';
  
  fields.name = 'John Doe';
  fields.username = 'john_doe@website.com';
  fields.pref_animal = document.getElementById('pref_animal').value;
  fields.pref_age = document.getElementById('pref_age').value*12;
  fields.pref_gender = document.getElementById('pref_gender').value;
  console.log("Pref gender: " + fields.pref_gender);
  var x = document.getElementById('sortby').value;
  console.log("Recieved priority: " + x);
  if (x === "price"){
    fields.gender_weight = 1;
    fields.price_weight = 4;
    fields.age_weight = 0;
  }else if(x === 'gender'){
    fields.gender_weight = 4;
    fields.price_weight = 1;
    fields.age_weight = 0;
  }else{//Age
    fields.gender_weight = 0;
    fields.price_weight = 1;
    fields.age_weight = 4;
  }
  // fields.gender_weight = 1;
  // fields.price_weight = 0;
  // fields.age_weight = 8;
  
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
//populateUserPref();
