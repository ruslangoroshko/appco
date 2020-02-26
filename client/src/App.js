import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import {Routes} from './routes'


import {NavBar, Footer} from './components/'

const App = () => {
  	return (
    	<Router>
      		<NavBar />
			  <Routes />
      		<Footer />
    	</Router>
  	) 
}

export default App;
