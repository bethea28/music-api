import React from 'react'
import $ from 'jquery'

const Song = React.createClass({
	render(){
		return(
			<div>
          <form>
            Enter Movie: 
            <input id='text'  type="text"/>
            <input type="submit"/>
          </form>
        </div>
		)
	}
})

export default Song