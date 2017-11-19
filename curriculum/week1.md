

**Welcome && Introductions(10 mins)**

What do you know about React? Have them search for web dev jobs online: how many ask for React?

**Slack out React Hunt(25 mins)**

Everyone share their findings.

Is React just another trend?

Well, yes && no... Sure, React will be replaced at some point by some other framework or library but component based architecture looks like it is here to stay and many other frameworks are borrowing from React. 

So what's so great about this virtual DOM?

The virtual DOM is an in-memory Javascript representation of the DOM. Usually on a DOM event, the page must re-paint itself and re-render the whole enchilada to show the changes from a button click for example. In React, the Virtual DOM saves unecessary trips to the DOM by looking at what parts of the DOM have changed through an event and then relay that info to the DOM when necessary, then only change that piece of the DOM that needs to be changed which makes for faster applications and web sites. 

Everybody loves React so much there must be some downsides, what are they?

First, React is JUST a UI library. If you want to tackle MVC using React you will need to bring in other libraries like Redux to handle large amounts of data, so React doesn't just solve complex apps out of the box.

Second, there a ton of dependencies for starting a React project. Facebook has attempted to tackle this issue by offering their official React template for a starter project called `Create-React-App`. 

Third, the learning curve can be steep! React is not a library you will learn in the next two sessions. This is meant to be an introduction into this ever-changing open source project. Take what you learn here and go out and build more things if you are serious about becoming a React pro!

**Go through webpack, babel, ES6, file structure for a react project and answer questions along the way (30 mins):**

Navigate to `webpack.config.js`. Students will likely be confused by webpack - do not spend much time on webpack. Students should understand that it is boiler plate to bundle up all their dependencies, run their server and transpile all their JSX to their `bundle.js` file. 

Point out that there actually is no `bundle.js` file in our project -- that's because babel creates this file for us from our webpack on the fly so any browser can render our jsx.

What is Babel?

Babel is a transpiler that takes our super new, cool ES6,ES7,ES8, etc and converts it to ES5 syntax so nearly all browsers can run our Javascript. Some students may remember the tower of Babel from the Bible (the origin myth of why we all speak different languages) -- this is what Babel does, unifies all of the different syntaxes or languages and pops out a uniform JS syntax all browsers are happy with. 

To show students the power of Babel, open up the code for react-starter and then run the project. First you will need to `npm install` and then `npm start`. 

***
YOU MAY ALSO NEED TO RUN THIS COMMAND:  (may need to use super user or `sudo`) -- `npm install webpack-dev-server -g`
***

Using your browser tools, inspect the first element on the page. Wait! It doesn't look anything like the code that is in the editor?! This is the power of Babel in action. It has taken our React JSX and made html components.

Start at `index.html` and have students read through the comments on the page. `App` is where our app will be rendered on the page and we reference `bundle.js` for our transpiled JSX code.

Open up `index.js` and show students how we get our JSX code to our index html file through the React DOM library, using `ReactDOM.render` to render our components. 

ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)

We use `import` to include components as well as libraries like React into our code. 

**Let's take a look at our components**

Components are the heart of a react app. These are the elements that will make up our web page. Each component is like a building block and should be as minimal as possible. For example, we wouldn't want to create a component that has our nav bar and the background layout... it's just not the React way!!!

Open `HelloWorld.js`. This is our standard 'Hello World' component, greeting you, the Codify Student in a header tag. 

**There are many things going on in this file and lots of comments to go through:** 

Class - This is the new ES6 syntax for an object constructor. We are 'extending' the React object and getting access to its properties and methods while creating a new component.

Props - Properties of the component. 

State - Data that is going to change. This is where we are going to create JS vars to use in our app. Set the state in your props constructor function.

Have students take notice of how we add inline styling in React. They should note that we use double curly brackets for styling and there are NO HYPHENS between className. We use camel case for css properties as well (eg: textAlign */Not/* text-align). This will no doubt be an error many of them have later. 

**OK, That's enough talking**

Project Time: (60 mins)

To run this app, navigate to the project and `npm start`

For students using Windows, they may need to `npm install webpack -g` in order for this project to work. 

GOTO `localhost:8080` and check out the app.

Students should add some more properties to their state like where they are from, favorite food and when they graduate. 

Add each of these pieces of state into the jumbotron element.

For the rest of class, have students create at least three more components (with State!!!) for their page: 

    1. Main section with a background image

    2. A small article section with dummy text

    3. Footer section

**Break (15mins)**

In class project: 

Create a new project by copying the one we just did.

Create a website using React that has the following: 

    1. A Header with title "My React Page"
    2. Pic of you in the middle of the main section
    3. Three sections with small blurbs about React
        a. State
        b. Props
        c. React DOM
    4. Footer section with the link to this page's github

**Extra Credit**

Create a button in the middle of the page, that when clicked, changes that button's color. 








