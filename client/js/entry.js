import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Display from './container'
import React from 'react'
import {render} from 'react-dom'
// import store from 'store'
import {browserHistory,Link,Router,Route} from 'react-router'
import App from './app'



		// <Display/>
        // <Route path="foo" component={Foo}/>
        // <Route path="bar" component={Bar}/>
// var Visual=()=>{
// <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={App}>
//       </Route>
//     </Router>
// </Provider>

// }



render(
	<App/>,document.getElementById('root')
)
