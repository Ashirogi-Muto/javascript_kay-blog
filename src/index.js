import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

const appWithRouterAndAuth = (
	<Auth0Provider
		domain="javascript-kay.au.auth0.com"
		clientId="xCATdhogBRSFzpfIKY8ViJsbAUFjtmbs"
		redirectUri={`${window.location.origin}/#/1234/admin`}
	>
		<Router><App/></Router>
	</Auth0Provider>
)

ReactDom.render(appWithRouterAndAuth, document.getElementById('blog'))