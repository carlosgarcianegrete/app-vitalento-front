import React, { Component } from "react";

export class Leftside extends Component {
  render() {
    return (
      <div>
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="index.html"
          >
            <div className="sidebar-brand-text mx-3">The Rick and Morty</div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              <i className="fas fa-house-user"></i>
              <span>Inicio</span>
            </a>
          </li>
          <hr className="sidebar-divider" />
          <div className="sidebar-heading">Vitalento</div>
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              href="index.html"
              data-toggle="collapse"
              data-target="#collapseUtilities"
              aria-expanded="true"
              aria-controls="collapseUtilities"
            >
              <i className="fas fa-id-card"></i>
              <span>Personaje</span>
            </a>
            <div
              id="collapseUtilities"
              className="collapse"
              aria-labelledby="headingUtilities"
              data-parent="#accordionSidebar"
            >
              <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Búsqueda:</h6>
                <a className="collapse-item" href="index.html">
                  Todos
                </a>
                <a className="collapse-item" href="index.html">
                  Por Nombre
                </a>
                <a className="collapse-item" href="index.html">
                  Filtro de episodios
                </a>
              </div>
            </div>
          </li>
          <hr className="sidebar-divider d-none d-md-block" />
          <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
      </div>
    );
  }
}

export default Leftside;
