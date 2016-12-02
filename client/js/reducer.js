import react from 'react'

var defaultState={
	test:'money'
}

var reducer=(oldState=defaultState,action)=>{
	switch(action.type){
		case 'test':
			return Object.assign({},oldState,{test:action.data})
	}
}

export default reducer