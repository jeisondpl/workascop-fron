import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes/Routes'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient, InMemoryCache } from '@apollo/client'

//cliente para el endpoint
const client = new ApolloClient({
  connectToDevTools: true,
  uri: 'http://127.0.0.1:8000/graphql/',
  //  uri: 'https://workascopback.herokuapp.com/graphql/', //-------------------------
  // uri: 'http://www.workascop.com/graphql/',

  cache: new InMemoryCache(),
})

const WithApollo = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
)

ReactDOM.render(<WithApollo />, document.getElementById('root'))
