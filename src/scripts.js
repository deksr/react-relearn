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
// var User = React.createClass({
//   render: function () {
//     if (this.props.sd=="this is cool girl here"){
//       return  <div> {this.props.name}  has  {this.props.sd} </div>
//     }
//     else{ //2) call these methods inside of render. make sure they should be in return statement
//       return  <div> {this.renderNameFunction(this.props.name)} </div> 
//     } 
//   },

 
// //1)you can write your own methods 
//   renderNameFunction: function(somestuff){
//     if (somestuff=="Cindy"){
//       return  <div> {this.props.name}  : has so no swag  </div>
//     }
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
    if (this.state.rstatus == false){
      return  (
        <div> 
          <p>name: {this.props.name} </p>
          <p> status: single </p>
          <button> click to change </button>
        </div>
      )    
    } 
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







