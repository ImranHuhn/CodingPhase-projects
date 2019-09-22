// // Characters
// // create data for all the characters, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)

//strongest to weakest Digimon: Millenniummon, Imperialdramon, Susanoomon, Apocalymon, Khaosmon
//strongest to weakest Pokemon: Rayquaza, Arceus, Giratina, Palkia, Dialga

var characters = [
  {
    name: 'Imperialdramon',
    hp: 900,
    attack: 80,
    defense: 40,
    level: '1,000,000,000',
    img: './img/strongest_digimon/1Imperialdramon_Paladin_Mode.gif'
  },
  {
    name: 'Apocalymon',
    hp: 700,
    attack: 40,
    defense: 80,
    level: '10,000,000',
    img: './img/strongest_digimon/1Apocalymon.gif'
  },
  {
    name: 'Susanoomon',
    hp: 800,
    attack: 60,
    defense: 60,
    level: '100,000,000',
    img: './img/strongest_digimon/1SUSANOOMON.gif'
  },
  {
    name: 'Khaosmon',
    hp: 600,
    attack: 20,
    defense: 100,
    level: '1,000,000',
    img: './img/strongest_digimon/1UltimateKhaosmon.gif'
  },
  {
    name: 'Millenniummon',
    hp: 1000,
    attack: 100,
    defense: 20,
    level: '10,000,000,000',
    img: './img/strongest_digimon/1ZEEDMILLENNIUMMON.gif'
  },
  {
    name: 'Arceus',
    hp: 900,
    attack: 80,
    defense: 40,
    level: '1,000,000,000',
    img: './img/strongest_pokemon/1arceus.gif'
  },
  {
    name: 'Dialga',
    hp: 600,
    attack: 20,
    defense: 100,
    level: '1,000,000',
    img: './img/strongest_pokemon/1dialga.gif'
  },
  {
    name: 'Giratina',
    hp: 800,
    attack: 60,
    defense: 60,
    level: '100,000,000',
    img: './img/strongest_pokemon/1giratina-origin.gif'
  },
  {
    name: 'Palkia',
    hp: 700,
    attack: 40,
    defense: 80,
    level: '10,000,000',
    img: './img/strongest_pokemon/1palkia.gif'
  },
  {
    name: 'Rayquaza',
    hp: 1000,
    attack: 100,
    defense: 20,
    level: '10,000,000,000',
    img: './img/strongest_pokemon/1rayquaza-mega.gif'
  },

]

var gameState = {
  userCharacter: '',
  rivalCharacter: ''
}

console.log(gameState);
var charEl = document.querySelector('.select-screen').querySelectorAll('.character');
console.log(charEl);
var battleScreenEl = document.getElementById('battle-screen');
var i = 0;

while (i < charEl.length) {
  charEl[i].onclick = function () {
    var characterName = this.dataset.character;
    gameState.userCharacter = characterName;

    computerPick()
    battleScreenEl.classList.toggle('active');
    console.log(gameState);
    // console.log('I pressed this character ' + characterName);
  };
  i++;
}


function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPick() {
  gameState.rivalCharacter = charEl[randomNumber(0, 10)].dataset.character;
}














// var attack = 20;
// var level = 10;
// var stack = 1.3;
// var defense = 39;

// // create a formula for attacks
// console.log((attack * level ) * stack / 7)



// // create a formula for health
// //HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(((0.20 * Math.sqrt(level)) * defense) * 15)




// // let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// // p1 vs p2




// // when one user loses all his health declare a winner