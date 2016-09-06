## Objectives
- Describe React in 2-4 sentences and be able to discuss some pros and cons
- Create a simple, stateless component

## Intro to React
- Vanilla JS and jQuery are great when we're building simple apps
- But what about more complex apps, like Facebook and instagram?
- That's where frameworks come into play
- React is halfway between a library and framework - just the 'view' part of our app
- Made by Facebook and used in some of the biggest apps
- React is focused around components ([Coomponents Mock](https://facebook.github.io/react/img/blog/thinking-in-react-components.png))
- React one way data flow - event occurs -> changes state -> filters down to components
- React is component based, immutable, and functional
- The virtual DOM - React creates a virtual DOM, and runs a 'diffing' algorithm every time an event takes place. Updates only the parts of the DOM that need updating

## First Component
```js
var HelloWorld = React.createClass({
  render: function() {
    return (
      <h1>Hello World</h1>
    )
  }
});

ReactDOM.render(
  <HelloWorld />, document.getElementById('main')
)
```

## Multiple components
```js
var GifApp = React.createClass({
  render: function() {
    return (
      <Title />
      <GifOne />
      <GifTwo />
    )
  }
})
var Title = React.createClass({
  render: function() {
    return (
      <h1>GIF Gallery</h1>
    )
  }
});

var GifOne = React.createClass({
  render: function() {
    return (
      <img src=""></img>
    )
  }
});

var GifTwo = React.createClass({
  render: function() {
    return (
      <img src=""></img>
    )
  }
});

ReactDOM.render(
  <GifApp />, document.getElementById('main')
)
```
