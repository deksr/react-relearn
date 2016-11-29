import React from 'react';
import {Link} from 'react-router';
import {getallpeople} from './xhr/index'



var UserProfile = React.createClass({

	getInitialState: function() {
    return {
      name: null,
      eyecolor: null,
      height: null
    } 
  },

  componentDidMount: function() {
  	// console.log(this.props.params.id)
  	var that  = this;

    getallpeople(this.props.params.id).then(function (response) {
    	console.log(response.data);
    	console.log(response.data.name);
    	// console.log(response.data);
      console.log(response.data.pokemon);



          // response.data.pokemon.map(function(ep){
          //   console.log(ep.pokemon)
          // })


      that.setState({
        name: response.data.name,
        eyecolor: response.data.generation.name,
        height: response.data.id
      })
    })   
  },


	render: function () {
		return (
			<div> 
				This is the user profile
				<p>Persons name: {this.state.name}</p>
				<p>persons eyecolor: {this.state.eyecolor}</p>
				<p>persons height: {this.state.height}</p>
			</div>
	  )
	}	
})

export default UserProfile