# Table of Contents
2. [Why Redux?](#why-redux)
3. [What is Redux?](#what-is-redux?)
3. [How to use Redux](#how-to-use-redux)
  - [Store](#store)
  - [Reducers](#reducers)
  - [Actions](#actions)
3. [Putting it All Together](#putting-it-all-together)
1. [Resources](#resources)


# Why Redux?
As you've probably encountered, it gets harder and harder to keep your React code organized as your app gets bigger.
Once you start adding more and more components that need to talk to each other, your code inevitably starts turning into spaghetti. It gets harder and harder to keep track of what parts of your app and your state you need to update every time something changes, which makes it hard to build and maintain really big apps.

Redux is one of the solutions to this problem. Redux is basically a specific way for you to structure and build the architecture for your apps. Redux helps simplify your complex apps by giving you a logical way to structure the way data flows throughout your app.

Redux is an advanced topic and takes some time to learn, but once you get down the setup in terms it is amazing how dramatically Redux can help simplify your apps. that will help you become a true JavaScript master, and separate you from all of the JavaScript peasants.


# Redux Roadmap
- Overview -> Reducers, Deliverymen, Customers
- Store -> Subscribe, dispatch, getState, createStore
- Reducers
- Actions
- React-redux -> Provider, Connect

# Redux FAQs
- What can I build with Redux? Anything
- When should I use Redux? You'll know when you need it...(in complicated apps)

# What is Redux?
You can think of Redux kind of like an Amazon.com warehouse. Let me explain...

![amazon-warehouse](http://archive.boston.com/business/technology/innoeco/kiva2.jpg)

There are three main parts to an Amazon warehouse order fulfillment: the warehouse itself, customers, and robots that go and find the actual items.

Firstly there's the warehouse. There's only one warehouse (let's pretend Amazon only has one giant warehouse), and it holds everything.

Since it has everything, it would get too crazy if everyone tried to shop there at once. So customers are not allowed to directly go to the warehouse. Instead, they make their orders online.

Basically, whenever a customer places an order, the order will get processed by the warehouse, and then Amazon will dispatch one of its [Kiva robots](https://www.cnet.com/news/meet-amazons-busiest-employee-the-kiva-robot/) to go find that item in the warehouse. Once the robot locates the item and brings it back to be shipped, the warehouse inventory (and website) is officially updated.

There are many advantages of having robots as part of the process, but perhaps the biggest one is that it makes the entire process very predictable and trackable. The robots keep a record of every single thing they do, which eliminates the possibility of human error, and also makes it really easy to go back and see exactly what happened if something does end up going wrong.

Redux architecture is very similar. There are three main parts to Redux:

- Store (the warehouse)
- Actions (the customers)
- Reducers (the robots)

Basically, in Redux there is one main 'store' that holds the state of our entire application. The only way the state can get updated is through actions, which are typically triggered by the user (for example, typing text into an input box and hitting 'submit'). However actions do not directly update the store - actions are processed by 'reducer' functions, which take in the action, update the state, and return a new state to the store.

# Advantages of Redux
- State is all stored in one place
- A lot easier for sibling components to talk to each other
- State changes are a lot more predictable
- Transactional history of all state changes
- Time travel debugging


# How to Use Redux
Redux is comprised of three main parts: the store, actions, and reducers. Let's look at each piece one by one:
## Store
- [Redux Store Docs](http://redux.js.org/docs/api/Store.html)

The store is the 'single source of truth' in Redux. In other words, the store holds the entire state of our application. Holding all of our state in one place makes it a lot easier to build complex apps, because we always know where to look for any state changes.

Redux stores are immutable, which means we can't directly change store data. Instead, we need to use 'actions', which are the only things that can update our store.

### Creating a store
- [Redux createStore Docs](http://redux.js.org/docs/api/createStore.html)

`createStore` is one of the main functions included with Redux. We can import in the `createStore` function by doing the following:

```js
import {createStore} from 'redux';
```

We can then use the `createStore` function to create our store:

```js
const store = createStore(reducer);
```

The `createStore` needs to take at least one argument: a reducer.

### Store Methods
Redux stores come with three main methods, that let us interact with the store. They are:

#### 1. getState

`getState` is a method on the store, which we can use to get the current state of our store.

```js
store.getState();
//returns the current state of our store (as an object)
```
#### 2. dispatch

`dispatch` lets you send out an action. This is the only way to update state or set state within our store. `dispatch` must take one argument: an action.

```js
store.dispatch(addTodo(newTodo));
//dispatches the 'addTodo' action, which adds a 'newTodo' to the store
```

#### 3. subscribe
`subscribe` adds a change listener, which listens for any changes within our store so we know to update our view.

This is similar to using `setState`, where a change listener is automatically triggered and a new `render` occurs whenever we `setState`. However in Redux we do not use `setState`, so we need to manually tell our store to listen and update on changes.

```js
let render = () => ReactDOM.render(
  <App />
  document.getElementById('root')
);

render();
store.subscribe(render);
```

## Reducers
- [Redux Reducers Docs](http://redux.js.org/docs/basics/Reducers.html)

A `reducer` is simply a function that takes in an action and the previous state, and returns a new, updated state.

```js
//Example of a simple reducer for a todo-list app.
//The reducer function takes in two arguments: state, and an action.
//Depending on the action type it then updates the state, and returns the new updated state.
//The below reducer only really handles one type of action (adding todos) but can easily be updated to handle more action types, such as removing todos.
let todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {todos: [...state.todos, action.todo]}
    default:
      return state
  }
}
```

`reducers` should always be 'pure', which means they should never mutate their arguments or interact with outside state.

Typically, a `reducer` function contains a switch statements with different outcomes for different actions.

## Actions
- [Redux Actions Docs](http://redux.js.org/docs/basics/Actions.html)

Actions are sent from your application to the store to update or change store data. They are very similar to `setState`.

Actions are really just objects, that have at least one property: `type`. The `type` property simply lets the store know what kind of action is being dispatched.

 Actions can also contain as many other properties as you want that can hold information about what data you want to update.

```js
//Example of a simple 'ADD_TODO' action
{type: ADD_TODO, newTodo: 'Build my first Redux app'}
```
Actions can be dispatched from anywhere in your app using `store.disaptch`:

```js
store.dispatch({type: ADD_TODO, newTodo: 'Build my first Redux app'});
```

### Action creators
Typically, you'll create 'action creator' functions within your app, to make it easier and quicker to create new actions:

```js
//The following action creator function simply returns a new object:
function addTodo(text) {
  return {
    type: ADD_TODO,
    text: text
  }
}

//This makes creating new actions easier:
addTodo('Build my first Redux app'); //returns a new action object
```

# Putting it all together
- [Redux Data Flow Docs](http://redux.js.org/docs/basics/DataFlow.html)

We now have a picture of how data flows through Redux applications:

- actions are triggered by events or user interactions
- reducers take the action and update the store state, depending on what the action was
- the store updates the state throughout our application


Here is an example of a simple counter app build using Redux:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

//Actions
const incrementAction = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrementAction = () => {
  return {
    type: 'DECREMENT'
  }
}

//Reducer
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

//Store
const store = createStore(counterReducer, 0, window.devToolsExtension ? window.devToolsExtension() : undefined);

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{store.getState()}</h1>
        <button onClick={store.dispatch.bind(this, incrementAction())}>+</button>
        <button onClick={store.dispatch.bind(this, decrementAction())}>-</button>
      </div>
    )
  }
})

const render = () => ReactDOM.render(
  <App />,
  document.getElementById('root')
);

render();
store.subscribe(render);
```



## Resources
- [Redux.js.org Docs](http://redux.js.org/docs/basics/)
- [Leveling up With React: Redux](https://css-tricks.com/learning-react-redux/)
- [Getting Started With Redux: An Intro](https://scotch.io/bar-talk/getting-started-with-redux-an-intro)
- [10 Tips For Better Redux Architecutre](https://medium.com/javascript-scene/10-tips-for-better-redux-architecture-69250425af44)
- [Redux.js.org Glossary](http://redux.js.org/docs/Glossary.html)
- [A Cartoon Intro to Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6#.r7worz8yq)
- [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367#.5f6z0zolb)
