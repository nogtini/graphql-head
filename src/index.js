import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './environments/HelloWorld'
import { Router, Route, browserHistory } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import './index.css'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' })
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
