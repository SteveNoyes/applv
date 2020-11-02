const title = React.createElement(
  'h1',
  { id: 'main-title',  class: 'title' },
  'Hello, Steven'
);

console.log(title);


let any = document.getElementById('hello').style.color = 'white';

console.log('hello there');


function heyThere(greeting) {
  var response = prompt('what is your name');
  alert(greeting + ' , ' + response);
}

// heyThere('fuck yourself');

function add(a, b) {
  return a + b;
}

var movies = ['gone with the wind', 'groundhog day', 'what about bob', 'zombieland'];

console.log(movies[3]);
console.log(movies.length);

movies.forEach(function(movie) {
  console.log(movie);
});

let objectify = {
  name: 'steven',
  age: 34,
}

console.log(objectify.name);
console.log(objectify.age);

const array1 = ['a', 'b', 'c'];

for (i = 0; i < array1.length; i++) {
  console.log(i);
}
