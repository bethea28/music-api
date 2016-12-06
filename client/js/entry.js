import {createStore} from 'redux'
import {Provider} from 'react-redux'
import appContainer from './appcontainer'
import React from 'react'
import {render} from 'react-dom'
import store from './store'
import {browserHistory,Link,Router,Route,IndexRoute} from 'react-router'
import App from './app'
import Song from './song'
import Artist from './artist'
import artistContainer from './artistcontainer'



		// <Display/>
        // <Route path="foo" component={Foo}/>
        // <Route path="bar" component={Bar}/>
// var Visual=

// )
const routes = (
		<Route path="/" component={appContainer}>
		    <IndexRoute component={Song}/>
		    <Route path="/artist" component={artistContainer}/>
		</Route>
)


render(
<Provider store={store}>
	<Router history={browserHistory} routes={routes}/>

</Provider>
	,document.getElementById('root')
)
