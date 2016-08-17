## w5d3 review

### Object constructor functions
```js
function GameConsole(name, gen){
  this.name = name
  this.generation = gen
}

function play() {
  console.log('playing with my ' + this.name)
}

var xbox = new GameConsole('Xbox', 3)
var playXbox = play.bind(xbox)
playXbox()
```

### Object prototype
```js
function Country(name) {
  this.name = name
  this.cities = []
  this.leader = ""
}

Country.prototype.addCity = function(city) {
  this.cities.push(city)
}

Country.prototype.elect = function(person) {
  this.leader = person
}

var usa = new Country("USA")
usa.addCity('new york city')
usa.elect('hillary clinton')
```

### this and that
```js
var dog = {
  name: 'milo',
  woof: function() {
    console.log(this.name + ' says woof!')
  },
  bark: function() {
    for(var i = 0; i < 5; i++) {
      console.log('Bark!!')
    }
  }
}
```
