// Dog Model

function Dog (fname, age, fleas, owner) {
  // create an id to locate the dog within array of Dogs.all
  this.id = this.constructor.all.length;
  // push instance of dog into the Dog.all array.
  this.constructor.all.push(this);
  // properties that will be different for each dog instance
  this.fname = fname;
  this.age = age;
  this.fleas = fleas;
  this.owner = owner;
  this.owner.dogs.push(this);
}
// array to store all dogs
Dog.all = [];
// properties or methods that will be the same for all dog instances.
Dog.prototype.bark = function () {
  console.log(this.fname+" bark bark!");
};

// Owner Model

function Owner(fname, dogs) {
  this.id = this.constructor.all.length;
  this.constructor.all.push(this);
  this.fname = fname;
  this.dogs = [];
}
Owner.all = [];
Owner.prototype.nameDogs = function () {
  console.log(this.fname+" dogs names are:");
  for (i=0; i < this.dogs.length; i++) {
    console.log(this.dogs[i].fname);
  }
  return this.dogs;
};

var sam = new Owner("Sam");
var fido = new Dog("Fido", 2, false, sam);
var max = new Dog("Max", 3, false, sam);

var josh = new Owner("Josh");
var annie = new Dog("Annie", 1, false, josh);


// Simplified example.
function Person(fname) {
  this.fname = fname;
}
var pete = new Person("Pete");
var mary = new Person("Mary");
