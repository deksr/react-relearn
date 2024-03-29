// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import  axios from 'axios';
import Modal from 'react-modal';
import {Router, Route, browserHistory, Link, IndexRoute} from 'react-router'

import PartialLayout from './partials.js'
import UserProfile from './userprofile.js'

import {getallpeople} from './xhr/index'



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


// setting a state  + adding an event
// ************************

// // child  component
// var User = React.createClass({


// // setting the initial state of the app
//   getInitialState: function(){
//     return {
//       rstatus: false
//     } 
//   }, 



//   render: function () {
// 		var terinaryOperator = this.state.rstatus ? 'in relationship' : 'single';

// 		return (
//       <div> 
//         <p>name: {this.props.name} </p>
//         <p>status: {terinaryOperator} </p>
//         <button onClick={this.changeStatus}> click to change </button>
//       </div>
//     )  
//   },


//   // adding an event. WE can add our own event name
//   changeStatus: function() {
//     console.log("clicked");
//     this.setState({
//     	rstatus: !this.state.rstatus
//     })  
//   }


// });



// // parent of User
// var App = React.createClass({
//   render: function () {
//     return (
//       <div> 
//         <h1> Users List </h1>
//         <User name = "Brad"/>
//         <User name = "Mary"/>
//       </div>
//     )
//   } 
// });


// // parent of App
// ReactDOM.render(<App/>, document.getElementById("root"));


// // setting a component did mount 
// // ************************
// // Note that when we want to pass the information from the parent component to the child component then we have to pass the data in this.props only. These props can be used to set the state too alsongside using the this.state to set the data.But state belonsg to only that component 

// // child  component
// var User = React.createClass({


//   // setting the initial state of the app
//   getInitialState: function(){
//     return {
//       rstatus: "girl"
//     } 
//   }, 


//   //this is another component api that talks to dom.
//   // you can even set  this.props or/and this.state after the comonent has mounted. You can add ajax in comonentdidmount
//   componentDidMount: function() {
//   	this.setState({
//     	rstatus: this.props.name + "*-----*" + this.state.rstatus
//     })	

//    // you can have multiple this.setstate
//     // this.setState({
//     // 	rstatus: this.props.name + "hhjgjgjh"
//     // })	
//   },



//   render: function () {
// 		return (
//       <div> 
//         <p>name: {this.props.name} </p>
//         <p>status: {this.state.rstatus} </p>
//         <button onClick={this.changeStatus}> click to change </button>
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
//         <User name = "Harry"/>
//       </div>
//     )
//   } 
// });


// // parent of App
// ReactDOM.render(<App/>, document.getElementById("root"));


// // creating functional component
// // *****************************

// // this is one way of creating a component using createclass
// // var User = React.createClass({
// //   render: function () {
// //     return (
// //       <div>{this.props.name} </div>
// //     )
// //   }
// // })


// // another way of creating a component is by creating functions
// var User = function(props) {
//   return (
//     <div>{props.name} </div>
//   )
// }



// // parent of User
// var App = React.createClass({
//   render: function () {
//     return (
//       <div> 
//         <User name = "Harry"/>
//         <User name = "Barry"/>
//       </div>
//     )
//   } 
// });


// ReactDOM.render(<App/>, document.getElementById("root"));



// // ajax request to (http://pokeapi.co/api/v2/ability/34/) and also adding `axios npm` to make http request from the browser
// // *****************************

// var User = function(props) {
//   return (
//     <div>{props.name} </div>
//   )
// }



// var Users = React.createClass({

//   getInitialState: function() {
//     return {
//       pokies: []
//     } 
//   },

//   componentDidMount: function() {
//     var that  = this;
//     axios.get('http://pokeapi.co/api/v2/ability/34/').then(function (response) {
//     // console.log(response.data.pokemon);
//     that.setState({
//       pokies: response.data.pokemon
//     })
//   })
    
//   },

//   render: function () {

//     // console.log(this.state.pokies) //this  gives two console.logs
//     // this.state.pokies.map(function(ep){
//     // console.log(ep.pokemon.name)
//     // })

//     return (
//       <div>
//         {this.state.pokies.map(function(eachpoki){
//             return <User key={eachpoki.pokemon.id} name= {eachpoki.pokemon.name} /> 
//             })} 
        
//       </div>
//     )
//   } 
// });


// ReactDOM.render(<Users/>, document.getElementById("root"));







// // adding the router and converting it into single page
// // *****************************

// var User = function(props) {
//   return (
//     <div>{props.name} </div>
//   )
// }



// var Users = React.createClass({

//   getInitialState: function() {
//     return {
//       pokies: []
//     } 
//   },

//   componentDidMount: function() {
//     var that  = this;
//     axios.get('http://pokeapi.co/api/v2/ability/34/').then(function (response) {
//     // console.log(response.data.pokemon);
//     that.setState({
//       pokies: response.data.pokemon
//     })
//   })
    
//   },

//   render: function () {

//     // console.log(this.state.pokies) //this  gives two console.logs
//     // this.state.pokies.map(function(ep){
//     // console.log(ep.pokemon.name)
//     // })

//     return (
//       <div>
//       <Link to="/user-profile-page"> visit other page </Link>
//         {this.state.pokies.map(function(eachpoki){
//             return <User key={eachpoki.pokemon.id} name= {eachpoki.pokemon.name} /> 
//             })} 
        
//       </div>
//     )
//   } 
// });


// // create a steless component: this basically means a function without class

// var Other = function(){
//   return (
//     <div> 
//       Hello there from other page
//     </div>
//   )
// }


// ReactDOM.render((
//   <Router history={browserHistory}> 
//     <Route path="/" component={PartialLayout}>
//       <IndexRoute path="/people" component ={Users}/> 
//       <Route path="/user-profile-page" component ={UserProfile}/>
//     </Route>
 
//   </Router>), document.getElementById("root")
// );



// // creating xhr
// // *****************************

// var User = function(props) {
//   return (
//     <div>{props.name} </div>
//   )
// }



// var Users = React.createClass({

//   getInitialState: function() {
//     return {
//       pokies: []
//     } 
//   },

//   componentDidMount: function() {
//     var that  = this;
//     getallpeople().then(function (response) {
//     // console.log(response.data.pokemon);
//     that.setState({
//       pokies: response.data.pokemon
//     })
//   })
    
//   },

//   render: function () {

//     // console.log(this.state.pokies) //this  gives two console.logs
//     // this.state.pokies.map(function(ep){
//     // console.log(ep.pokemon.name)
//     // })

//     return (
//       <div>
//       <Link to="/user-profile-page"> visit other page </Link>
//         {this.state.pokies.map(function(eachpoki){
//             return <User key={eachpoki.pokemon.id} name= {eachpoki.pokemon.name} /> 
//             })} 
        
//       </div>
//     )
//   } 
// });


// // create a steless component: this basically means a function without class

// var Other = function(){
//   return (
//     <div> 
//       Hello there from other page
//     </div>
//   )
// }


// ReactDOM.render((
//   <Router history={browserHistory}> 
//     <Route path="/" component={PartialLayout}>
//       <IndexRoute path="/people" component ={Users}/> 
//       <Route path="/user-profile-page" component ={UserProfile}/>
//     </Route>
 
//   </Router>), document.getElementById("root")
// );




// creating userprofile component with param
// *****************************

var User = function(props) {
  return (
    <div><Link to ={"/user-profile-page/" + props.id} > {props.name} </Link></div>
  )
}



var Users = React.createClass({

  getInitialState: function() {
    return {
      pokies: []
    } 
  },

  componentDidMount: function() {
    var that  = this;
    getallpeople().then(function (response) {
    // console.log(response.data.pokemon);
      that.setState({
        pokies: response.data.pokemon
      })
    })  
  },

  render: function () {

    // console.log(this.state.pokies) //this  gives two console.logs
    this.state.pokies.map(function(ep){
    console.log(ep.pokemon.url)
    })

    return (
      <div>
      <Link to="/user-profile-page"> visit other page </Link>
        {this.state.pokies.map(function(eachpoki){
          var identification= eachpoki.pokemon.url.split('/')
          {/*// console.log(identification[6]  since we dont have id for this, it is a hacky way of doing things)*/}
          return <User key={eachpoki.pokemon.id} name= {eachpoki.pokemon.name}  id={identification[6]}/> 
        })} 
        
      </div>
    )
  } 
});


// create a steless component: this basically means a function without class

var Other = function(){
  return (
    <div> 
      Hello there from other page
    </div>
  )
}


ReactDOM.render((
  <Router history={browserHistory}> 
    <Route path="/" component={PartialLayout}>
      <IndexRoute path="/people" component ={Users}/> 
      <Route path="/user-profile-page/:id" component ={UserProfile}/>
    </Route>
 
  </Router>), document.getElementById("root")
);



// creating a modal (importing external library)
// *****************************


// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };


// // ***********
// var User = React.createClass ({

//   getInitialState: function() {
//     return {
//       modalIsOpen: false
//     } 
//   },

//     openModal: function() {
//     this.setState({modalIsOpen: true});
//   },

//   closeModal: function() {
//     this.setState({modalIsOpen: false});
//   },


//   render: function () {

//     return (
//       <div>
//         <button onClick={this.openModal}> {this.props.name}</button>
//           <Modal
//             isOpen={this.state.modalIsOpen}
//             onRequestClose={this.closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//           >

//           <h2 ref="subtitle">Hello</h2>
//           <button onClick={this.closeModal}>close</button>
//           <div>I am {this.props.name}. read more about me </div>
//           <form>
//             <input />
//             <button>submit</button>
//           </form>
//           </Modal>
//       </div> 
//     )
//   } 
// })



// var Users = React.createClass({

//   getInitialState: function() {
//     return {
//       pokies: [],
//       modalIsOpen: false
//     } 
//   },

//   componentDidMount: function() {
//     var that  = this;
//     axios.get('http://pokeapi.co/api/v2/ability/34/').then(function (response) {
//     // console.log(response.data.pokemon);
//       that.setState({
//         pokies: response.data.pokemon
//       })
//     })  
//   },



//   render: function () {

//     // console.log(this.state.pokies) //this  gives two console.logs
//     // this.state.pokies.map(function(ep){
//     // console.log(ep.pokemon.name)
//     // })

//     return (
//       <div>
//         {this.state.pokies.map(function(eachpoki){
//             return <User key={eachpoki.pokemon.id} name= {eachpoki.pokemon.name} /> 
//             })}  
//       </div>
//     )
//   } 
// });


// ReactDOM.render(<Users/>, document.getElementById("root"));
// {/*ReactDOM.render(<Modalstuff/>, document.getElementById('your-app-element'));*/}
