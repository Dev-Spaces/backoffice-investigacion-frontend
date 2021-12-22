import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloClient, ApolloLink, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
localStorage.setItem('auth_token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc2l0byI6IkVzdHVkaWFudGUiLCJpYXQiOjE2Mzk0MDAzNzQsImV4cCI6MTYzOTQwNzU3NH0.hbhQJNg60W8zpXCGTnWVi12woPXBO1jz8mG4dNRtNPY')

const httpLink = new HttpLink({uri:'https://devspace2.herokuapp.com/'})

const authLink = new ApolloLink((operation,forward)=>{
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers:{
      authorization: token ? `${token}`: ''
    }
  });
  return forward(operation)
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const inicio =  document.getElementById('root')



ReactDOM.render(
  <ApolloProvider client={client}>
    
    <App/>
    
  </ApolloProvider>, inicio);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
