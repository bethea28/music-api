import React from 'react'
import $ from 'jquery'


const Song = React.createClass({
		
		// componentDidMount(){
		// 	$.ajax({
		// 		url:"/view/all-artists",
		// 		type:'GET'
		// 	})
		// 	.done((data)=>{
		// 		store.dispatch(allArtist(data))
		// 	})
		// },

		// sendForm(event){
		// 	event.preventDefault()

		// },

		// handleChange(){

		// },


	render(){
		return(
			<div>
				<form>
					<input type='text'/>
					<input type='submit'/>
					<button>song</button>

				</form>
			</div>
		)
	}
})

export default Song