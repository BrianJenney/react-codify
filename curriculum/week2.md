

**Intro && Review of Last Week(15 mins)**

Use a student project as an example and have them walk through their code

Give the class a chance to critique and give praise

Talk about differences between this student's project and others'

What were challenging pieces? 

**Refresher of Multiple Components (20 mins)**

Students should copy another blank react project

Make 3 different components (3 different divs with a circle picture and a small blurb)

Students should be using state to populate the info and the img src attribute

**Intro to Functions and Props (45 mins)**

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

Have students create their own functions that are triggered by button clicks.

Have students create an input and attach an `onchange` event listener to pick up the value of the input. In state, add a `userInput` property and set its value to null. 

When input changes it should `setState` of `userInput` to the value of the input. 

You will likely need to explain how `this` is binding the value of the input to the state. (Remember object constructors)

On a button click -- have a function console.log the value of `userInput`

**Class Project**

Using what they now know about creating functions and passing down props, have students create a simple TODO list app:

    1. Create a component with a button and an input
    2. Create a list component
    3. When a user enters a value in the input and clicks the button, it should add that item to the list component

**BONUS**

    1. Prevent users from adding empty items by disabling the button if nothing has been entered
    2. Add functionality to allow users to delete from the list
