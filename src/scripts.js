// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// instead of typing React.Component hust use an import from the module


// this is the parent component
class TheParent extends React.Component {
  render() {
    return (
	    <ul> 
	      <TheChild name= "ann" age="23"/> 
	      <TheChild name= "bob" age="20"/> 
	      <TheChild age="24"> Sam </TheChild>
	      <TheChild age="21">Ron</TheChild>
	    </ul>
	  )
  }
}

// this is the child component
class TheChild extends React.Component {
  render() {
    return(
	    <li>{this.props.name} + {this.props.age} 
	    {/* or can be written as  */}
	    {this.props.children} </li>
	  ) 
  }
}


ReactDOM.render(
	<TheParent/>, 
	document.getElementById('hello')
);



