import {createStore} from 'redux'
import {Provider} from 'react-redux'
import AppContainer from './container'
import React from 'react'
import {render} from 'react-dom'
import store from './store'
import {browserHistory,Link,Router,Route,IndexRoute} from 'react-router'
import App from './app'
import Song from './song'
import Artist from './artist'
import ArtistContainer from './artistcontainer'



		// <Display/>
        // <Route path="foo" component={Foo}/>
        // <Route path="bar" component={Bar}/>
// var Visual=

// )
const routes = (
		<Route path="/" component={AppContainer}>
		    <IndexRoute component={Song}/>
		    <Route path="/artist" component={ArtistContainer}/>
		</Route>
)


render(
<Provider store={store}>
	<Router history={browserHistory} routes={routes}/>

</Provider>
	,document.getElementById('root')
)
