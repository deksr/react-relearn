// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// instead of typing React.Component hust use an import from the module

// a simple react element
// var reactelem =React.createElement('h1');

// ReactDOM.render(
//   reactelem, 
//   document.getElementById('hello')
// );


//adding a simple  props parameter
// var reactelem =React.createElement('h1', {className: 'color-class'});

// ReactDOM.render(
// 	reactelem, 
// 	document.getElementById('hello')
// );


//adding a simple  children parameter
// var reactelem =React.createElement('h1', {className: 'color-class'}, 'this is cool');

// ReactDOM.render(
//   reactelem, 
//   document.getElementById('hello')
// );



// adding fragmentnode
// var heading =React.createElement('h1', {className: 'color-class', key:
//    'header' }, 'headline');
// var para = React.createElement('p', {className: 'color-class'}, 'some text');
// var fragment = [heading, para];

// var insidesection = React.createElement('section', {className: 'color-class'},fragment);


// ReactDOM.render(
//   insidesection, 
//   document.getElementById('hello')
// );

// wriiten in es5
// var ReactClass = React.createClass({
//   render: function () {
//     return React.createElement('h1', { className: 'header' }, 'React
//    Component');
//   } 
// });

// var reactComponentElement = React.createElement(ReactClass);
// var reactComponent = ReactDOM.render(reactComponentElement, document.getElementById('react-application'));

// written in es6
// class ReactClass extends React.Component { 
//   render() {
//     var place = "Component"; 
//     return (
//       <h1>React {place}</h1> 
//     );
//   } 
// }

// ReactDOM.render(<ReactClass />, document.getElementById("root"));


// setting a state 
// ************************

// child 
var User = React.createClass({

  getInitialState: function(){
    return {
      rstatus: false
    } 
  }, 



  render: function () {
    
  }

});



// parent of User
var App = React.createClass({
  render: function () {
    return (
      <div> 
        <h1> Users List </h1>
        <User name = "Brad"/>
        <User name = "Mary"/>
      </div>
    )
  } 
});


// parent of App
ReactDOM.render(<App/>, document.getElementById("root"));







