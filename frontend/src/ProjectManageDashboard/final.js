import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./final.css";

import { Provider } from "react-redux";
import store from "../store";

import { Container } from "reactstrap";

import { loadUser } from "../action/AuthActions";
import AppNavbar from "./App.Navbar";
import ShoppingList from "./ShoppingList";
import ItemModal from "./ItemModal.";
import LoadingButton from "./LoadingButton";
import Footer from "./Footer";

class final extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavbar />
        <main className="main">
          <Container>
            <ShoppingList />
            <ItemModal />
            <LoadingButton />
          </Container>
        </main>
      </Provider>
    );
  }
}

export default final;
