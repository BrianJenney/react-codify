

**Intro && Review of Last Week(15 mins)**

Use a student project as an example and have them walk through their code

Give the class a chance to critique and give praise

Talk about differences between this student's project and others'

What were challenging pieces? 

**Refresher of Multiple Components (15-30 mins)**

Students should copy another blank react project using create-react-app

Make 3 different components (3 different divs with a circle picture and a small blurb)

Students should be using state to populate the info and the img src attribute

**Intro to Functions and Props (30-45 mins)**

**Props**

We set state in our components but we can pass it down to other components as well.

What if we wanted to share some data between two components?

Have the class think of some examples where this would be necessary.

Slack out the `react-props-unsolved` folder.

In the parent component, there is some state with information about the child. 

Have the class look up how to pass down props and receive them in the child component so the `li` elements in the list display the state from the parent.

Share answers and then slack out the solved version.

**Functions**

So far we've just made static components with no interaction.

Show students a simple example of creating a function using ES6 syntax that prints `I've been clicked` to the console log.

***Example***
 
logClick=()=>{
    console.log('Click click');
}
***End Example***

Have students create their own functions that are triggered by button clicks.

Have students create an input and attach an `onchange` event listener to pick up the value of the input. In state, add a `userInput` property and set its value to null. 

***Example***

<input onChange={this.onChange}/>

onChange =(e)=> {
    this.setState({userInput: e.target.value})
}

***End Example***

When input changes it should `setState` of `userInput` to the value of the input. 

`this` in the above function references the execution context of the function which will be the class or object where it is being called. The fat arrow function binds `this` to the scope/context where it is enclosed (the class we have made) => without using the fat arrow function `this` would be bound to the context of where the function was executed and then we would not be able to call `this.setState`...

On a button click -- have a function console.log the value of `userInput`

***Map Example***

The `map` method helps us to iterate over an array, perform a function on each item in the array and return that new array

***End Example***

Some other awesome methods to use on arrays: 
filter
reduce
forEach
https://medium.freecodecamp.org/my-giant-javascript-basics-course-is-now-live-on-youtube-and-its-100-free-9020a21bbc27

We can use `map` in React to iterate over an array and return elements

Have students create a piece of state that holds an array of objects: 

cars: [
    {
        model: 'Ford',
        year: 1983,
        color: 'red'
    },
    {
        model: 'Chevy',
        year: 1976,
        color: 'black'
    },
    {
        model: 'GM',
        year: 1969,
        color: 'brown'
    }
]

Let's show all these cars in our jsx!

<div>
{this.state.cars.map((car, idx)=>
    <p key={idx}>{car.model}</p>
)}
</div>

We pass in `idx` to our map function in order to use the index from each instance in the array which will ensure that we have a unique key for each car object (React will give us a not-so-stern warning if we do not).

**Class Project (60mins)**

Using what they now know about creating functions and passing down props, have students create a simple TODO list app using a new react template:

    1. Create a component with a button and an input
    2. Create a list component
    3. When a user enters a value in the input and clicks the button, it should add that item to the list component

**HOMEWORK**

    1. Prevent users from adding empty items by disabling the button if nothing has been entered
    2. Add functionality to allow users to delete from the list
    3. Style!!! 