// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// instead of typing React.Component hust use an import from the module


// writing a simple component in es5
// ************************
// var App = React.createClass({
//   render: function () {
//     return <h1 > hi there how cool is this </h1>
//   } 
// });
// ReactDOM.render(<App />, document.getElementById("root"));


// writing parent and child relationship
// ************************

// Child
// var User = React.createClass({
//   render: function () {
//     return (
//       <ul> 
//         <li > Brad </li>
//         <li > Mary </li>
//         <li > Ron </li>
//       </ul>
//     )
//   } 
// });


// // parent
// var App = React.createClass({
//   render: function () {
//     return (
//       <div> 
//         <h1> Users List </h1>
//         <User />
//       </div>
//     )
//   } 
// });
// ReactDOM.render(<App />, document.getElementById("root"));


// // writing props
// // ************************



// // child
// var User = React.createClass({
//   render: function () {
//     return (
//       <div> 
//       //
//       {this.props.name}:: <a href={'httpS://twitter.com/' + this.props.twitter}>Click for link to twitter </a>
//       </div>
//     )
//   } 
// });

// // parent
// var App = React.createClass({
//   render: function () {
//     return (
//       <div> 
//         <h1> Users List </h1>
//         <User name = "Brad" twitter="CNN"/>
//         <User name = "Mary" twitter="bbc"/>
//         <User name = "Ron" twitter="nyt"/>
//       </div>
//     )
//   } 
// });


// // parent of parent
// ReactDOM.render(<App />, document.getElementById("root"));


// // passing data between parents to child
// // ************************

// // child 
// var User = React.createClass({
//   render: function () {
//     return (
//       <div> 
//       //
//       {this.props.name}:: <a href={'httpS://twitter.com/' + this.props.twitter}>Click for link to twitter </a>
//       {this.props.sd}
//       </div>
//     )
//   } 
// });

// // parent of User
// var App = React.createClass({
//   render: function () {
//     return (
//       <div> 
//         <h1> Users List </h1>
//         <User name = "Brad" twitter="CNN"/>
//         <User name = "Mary" twitter="bbc"/>
//         <User name = "Ron" twitter="nyt"/>
//         {this.props.somedata}
//         <User name = "Cindy" twitter="fox" sd= {this.props.somedata}/>
//       </div>
//     )
//   } 
// });


// // parent of App
// ReactDOM.render(<App somedata = "this is cool girl here"/>, document.getElementById("root"));



// uisng conditions and adding more methods 
// ************************

// child 
var User = React.createClass({
  render: function () {

    if (this.props.sd=="this is cool girl here"){
      return  <div> {this.props.name}  has  {this.props.sd} </div>
    }
    else{
      return  <div> {this.props.name} : no extra information available </div> 
    } 
  },

  renderOtherMethod: function(){
    if (this.props.name=="cindy"){
      return  <div> {this.props.name}  : has so much swag </div>
    }
  }




});

// parent of User
var App = React.createClass({
  render: function () {
    return (
      <div> 
        <h1> Users List </h1>
        <User name = "Brad" twitter="CNN"/>
        <User name = "Mary" twitter="bbc"/>
        <User name = "Ron" twitter="nyt"/>
        {this.props.somedata}
        <User name = "Cindy" twitter="fox" sd= {this.props.somedata}/>
      </div>
    )
  } 
});


// parent of App
ReactDOM.render(<App somedata = "this is cool girl here"/>, document.getElementById("root"));





