import React from 'react'
import $ from 'jquery'

const Song = React.createClass({
	render(){
		return(
			<div>
				<form>
				  <input type="text" name="firstname"/>
				  <input type="text" name="lastname"/>
				</form>
			</div>
		)
	}
})

export default Song