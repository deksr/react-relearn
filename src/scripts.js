// import React from 'react';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';


// instead of typing React.Component hust use an import from the module


// this is the parent component
// class TheParent extends React.Component {
//   render() {
//     return (
// 	    <ul> 
// 	      <TheChild name= "ann" age="23"/> 
// 	      <TheChild name= "bob" age="20"/> 
// 	      <TheChild age="24"> Sam </TheChild>
// 	      <TheChild age="21">Ron</TheChild>
// 	    </ul>
// 	  )
//   }
// }

// // this is the child component
// class TheChild extends React.Component {
//   render() {
//     return(
// 	    <li>{this.props.name} + {this.props.age} 
// 	    {/* or can be written as  */}
// 	    {this.props.children} </li>
// 	  ) 
//   }
// }


// ReactDOM.render(
// 	<TheParent/>, 
// 	document.getElementById('hello')
// );


let plants = [{
	id: 1,
	name: "Shrub roses",
	color: "Reddish pink",
	quantity: '2'
},
{
	id: 2,
	name: "English lavander",
	color: "lavander",
	quantity: '5'
},
{
	id: 3,
	name: "Hydrangias",
	color: "blue",
	quantity: '10'
}]

class Plant extends React.Component{
  render(){
    //4
  	return (
  		<li> {this.props.plant.name}, {this.props.plant.color} 
      </li>
  	)
  }
}

class Plants extends React.Component{
  render(){
  	//5. run map/foreach plant
  	return (
  		<ul> 
	  		{this.props.plants.map((plant)=>{
	  			return <Plant key={plant.id} plant={plant} />
	  		})} 
  		</ul>
  	)
  }
}

class List extends Component{
  render(){
  	return (
  		<div> 
  		  <h4> Garden plant list </h4>
  		  <Plants plants={this.props.plants}/>
  		</div>
  	)
  }
}

ReactDOM.render( 
	<div>
	//2
		<List plants={plants}> </List>
  </div>
  , document.getElementById('content')
);

