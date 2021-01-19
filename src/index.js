import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'

const appWithRouter = <Router><App/></Router>

ReactDom.render(appWithRouter, document.getElementById('blog'))