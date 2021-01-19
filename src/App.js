import React from 'react'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'

import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import Posts from './Components/Posts'
import Post from './Components/Post'
import './styles/index.scss'

const App = () => {
	return (
		<div className="container">
			<Sidebar />
			<main>
				<Nav />
				<Route exact path="/" component={Posts}/>
				<Route exact path="/post/:id" component={Post} />
			</main>
		</div>
	)
}
export default hot(module)(App)