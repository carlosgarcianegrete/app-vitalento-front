import React, { Component } from "react";
import Leftside from "./Leftside";
import Header from "./Header";
import Footer from "./Footer";
import CharacterCard from "../components/CharacterCard";

export class Layout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  );
  render() {
    return (
      <div>
        <div id="wrapper">
          <Leftside></Leftside>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Header />
              <div className="col px-md-5">
                <CharacterCard />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
