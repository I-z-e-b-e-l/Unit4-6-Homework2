//Homework Part One

//Using what you did with Objects perdiod 2 from the slides, create a personal profile. Instead of Products you will need to create a personal profile. Initialize Constructors and More!

// call profile or person as an object rather than Boba, hobbies, fave food w/ different properties

//Step 1

function Cat (name, hobbies, sign, color, food){
    this.name = name;
    this.hobbies = hobbies;
    this.sign = sign;
    this.color = color;
    this.food = food;
}

//Step 2

let catProfile = new Cat('Mx. Meow', 'fucking shit up', 'Aquarius', 'purple')
console.log(catProfile)


//Step 3

let catProfile2 = new Cat('Pretty Girl', 'Being a boss bitch and snuggling', 'Virgo', 'aqua')
console.log(catProfile2)
let catProfile3 = new Cat('Buddy', 'getting that nip', 'Leo', 'Orange')
console.log(catProfile3)
let catProfile4 = new Cat('Junipurrrrr', 'sleeping', 'Libra', 'lavender')
console.log(catProfile4)


//Step 4

// function MyCat(name, isMyCat){
//     this.name = name;
//     this.isMyCat = isMyCat;
// }

function FaveFood(food, vegetarian){
    this.food=food;
    this.vegetarian = vegetarian;
}

let food1 = new FaveFood ('Cheetos', false);
let food2 = new FaveFood ('Catnip', true);
let food3 = new FaveFood ('Wet food or death', false)

console.log(food1, food2, food3)


//Step 5

//see step 1


//Step 6 - check this

// function Cat (name, hobbies, sign, color, food)

// let cat1 = new Cat ('Pretty Girl', 'Being a boss bitch and snuggling', 'Virgo', 'aqua', food1)
// let cat2 = new Cat ('Buddy', 'getting that nip', 'Leo', 'Orange', food2)
// let cat3 = new Cat ('Junipurrrrr', 'sleeping', 'Libra', 'lavender', food3)

// console.log(cat3)

// Step 7

// cat1.lovePets = 'I love me some snuggles';
// console.log(cat1)

// Step 8


//.Create

//Step 1


//Step 2


//Step 3



//Array vs Objects

//Objects: Create a hobby object with properties with name, descriptions and boolean of a property name of supplies needed.

let hobby = {
    name: 'trapeze',
    description: 'A short horizontal bar hung by ropes or metal straps from a support. It is an aerial apparatus commonly found in circus performances. Trapeze acts may be static, spinning (rigged from a single point), swinging or flying, and may be performed solo, double, triple or as a group act.',
    hardPointneeded: true,
};

//Use dot notation to return hobby description

console.log(hobby.description)

//Use bracket notation to return name

console.log(hobby['name']);

//Arrays: Create an array with 4 different hobbies

let hobbies = ['partner acro', 'hand balancing', 'lyra', 'pole']

//access second item in the array

console.log(hobbies[1])

//Objects
//Change the value of the boolean of the object we created.

hobby.hardPointneeded = false;
console.log(hobby.hardPointneeded)


//Add a new property to our person object such as supplies with multiple values in the property.

hobby.supplies = ['trapeze', 'hard point', 'chalk'];

console.log(hobby.supplies);

//remove the hobby description property from the person object

delete hobby.description;

console.log(hobby);

//Arrays
//Use push to add another hobby to your array of hobbies

hobbies.push('cyr wheel')

console.log(hobbies)

//use pop to remove the last item from an hobby array

hobbies.pop();
console.log(hobbies);


//use unshift to add more values to the beginning of the hobby array.

hobbies.unshift('wire', 'cube', 'fabric');
console.log(hobbies);


// use shift to remove the item from the hobby of the array

hobbies.shift();
console.log(hobbies)


//Object
//Write a for in loop for the person object you created -- check this

for (let name in hobby){
    console.log(hobby['name'])
}

//Write a for each loop for your person Object -don't understand this

Object.keys(hobby).forEach(function(key){
    console.log(key);
    console.log(hobby[key]);
});

//Arrays
//Write a for loop for your hobby array

for (let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i])
}

//Write a for of loop for your hobby array

for (let item of hobbies){
    console.log(item)
}

//write a for each loop for your hobby array

hobbies.forEach(i => console.log(i));




