import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {Home, Users, UserStat} from './pages/'


export const Routes = () => {	
	return (
		<Switch>
			<Route path="/" exact>
				<Home/>
			</Route>
			<Route path="/users" exact>
				<Users/>
			</Route>
			<Route path="/user/:id">
				<UserStat/>
			</Route>
			<Redirect to="/" />
		</Switch>
	)
}