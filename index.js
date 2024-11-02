const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

const animalArr = farmAnimals.split(" ")
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [ moo, neigh, baa, oink, cluck ] = animalArr
console.log(moo)

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const remainingAnimalsNoHorse = animalArr.filter(element => element !="horse")
const [ bessie, dolly, babe, little ] = remainingAnimalsNoHorse
console.log(bessie)

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const remainingAnimalsNoChicken = remainingAnimalsNoHorse.filter(element => element !="chicken")
const [ blackAndWhite, black, pink ] = remainingAnimalsNoChicken
console.log(black)

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [ red, orange, yellow, green, blue, indigo, violet ] = colors
console.log(orange)

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, v] = colors.filter(element => element != "indigo")
console.log(y)

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const indg = colors[5]
console.log(indg)

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet
console.log(song)

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

const { song2, song4 } = nestedMuppet.album.theMuppetMovie
console.log(song)
const { nestedJob, nestedPartner } = nestedMuppet
console.log(nestedPartner)