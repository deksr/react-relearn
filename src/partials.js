import React from 'react';
import {Link} from 'react-router'

var PartialLayout = React.createClass({
	render: function () {
		return (
		<div> 
			<header> 
			  <h1> Welcome from header </h1>
			  <Link to ="/blapage"> visit bla page </Link>
			  <hr/>
			</header>
			<main>
			  {this.props.children}
			</main>
			<footer> 
			  <hr/>
			  This is the footer
			</footer>
		</div>
	)


	}
	
})

export default PartialLayout


