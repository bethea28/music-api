import {connect} from 'react-redux'
import App from './app'
import store from './store'
import Song from './song'
import Artist from './artist'


var appContainer=store=>({

})


export default connect(appContainer)(App)