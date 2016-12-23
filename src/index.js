import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './environments/HelloWorld'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciwweua9m1rdk0129bxkci4i1'})
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={HelloWorld} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
)
