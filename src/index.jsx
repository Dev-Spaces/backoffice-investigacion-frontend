import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';



import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

import Proyectos from './pages/Proyectos';
import CrearProyecto from './pages/CrearProyecto';
import Menu from './pages/Menu';
import ListaUsuarios from './pages/ListaUsuarios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NoExiste from './pages/NoExiste';
import Login from './pages/Autenticar';
import EditarProyecto from './pages/EditarProyecto';
import CrearUsuario from './pages/CrearUsuario';
import Principal from './pages/Principal';


const httpLink = new HttpLink({ uri: 'https://devspace2.herokuapp.com/' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const inicio = document.getElementById("root")

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Principal} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/usuario/registro" component={CrearUsuario} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/usuario" component={ListaUsuarios} />
        <Route exact path="/proyecto" component={CrearProyecto} />
        <Route exact path="/proyecto/listar" component={Proyectos} />
        <Route exact path="/proyecto/:idProyecto" component={EditarProyecto} />
        <Route path="/" component={NoExiste} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>, inicio)