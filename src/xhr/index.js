import  axios from 'axios';


var getallpeople = function(){
	return axios.get('http://pokeapi.co/api/v2/ability/34/')
}


export {getallpeople}