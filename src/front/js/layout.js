import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LogIn } from "./component/login";
import { Genero } from "./component/genero";
import Detalles from "./component/descripPoster";
import { DetallesPeli } from "./component/detallesPeli";
import Busqueda from "./component/busquedaPeli";
import Stranger from "./component/strangerFilms";
import Api from "./component/footerApi";
import Register from "./component/register";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/busqueda/:inputText">
              <Busqueda />
            </Route>
            <Route exact path="/strangerFilms">
              <Stranger />
            </Route>
            <Route exact path="/Api">
              <Api />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/genero/:theid">
              <Genero />
            </Route>
            <Route exact path="/detalles/:theid">
              <DetallesPeli />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route>
              <LogIn />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
