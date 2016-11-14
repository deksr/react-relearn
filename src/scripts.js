// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// instead of typing React.Component hust use an import from the module


class Hello extends React.Component {
  render() {

	  var place = "Earth"
    return <h1>Hello {place}</h1>
  }
}

ReactDOM.render(
	<Hello/>, 
	document.getElementById('hello')
);



