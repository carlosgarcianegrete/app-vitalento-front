import React, { Component } from "react";
import { connect } from "react-redux";
import { showCharacters } from "../actions";


export class Header extends Component {

  state = {
    isDetail : false
  };

  
  findByNameCharacter = () => {  
    var name = document.getElementById('txtName');  
    if(name.value !== '')   
      this.props.showCharacters('?name=' + name.value.trim(), false);
    else
      this.props.showCharacters('', false);        
    
  };

  render() {

    return (
      <div>
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i className="fa fa-bars"></i>
          </button>

          <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                id="txtName"               
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Burcar por..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button" onClick={this.findByNameCharacter}>
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a
                className="nav-link dropdown-toggle"
                href="index.html"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-search fa-fw"></i>
              </a>

              <div
                className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="index.html"
                id="alertsDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-bell fa-fw"></i>
                <span className="badge badge-danger badge-counter">3+</span>
              </a>

              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="alertsDropdown"
              >
                <h6 className="dropdown-header">Centro de Alertas</h6>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="index.html"
                >
                  <div className="mr-3">
                    <div className="icon-circle bg-primary">
                      <i className="fas fa-file-alt text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">
                      Septiembre 30, 2020
                    </div>
                    <span className="font-weight-bold">
                      Vamos a revisar los episodios!
                    </span>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="index.html"
                >
                  <div className="mr-3">
                    <div className="icon-circle bg-success">
                      <i className="fas fa-donate text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">
                      Septiembre 29, 2020
                    </div>
                    Se actualizaron los servicios API!
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="index.html"
                >
                  <div className="mr-3">
                    <div className="icon-circle bg-warning">
                      <i className="fas fa-exclamation-triangle text-white"></i>
                    </div>
                  </div>
                  <div>
                    <div className="small text-gray-500">
                      Septiembre 28, 2020
                    </div>
                    Se está revisando el repositorio!
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="index.html"
                >
                  Mostrar más alertas...
                </a>
              </div>
            </li>

            <li className="nav-item dropdown no-arrow mx-1">
              <a
                className="nav-link dropdown-toggle"
                href="index.html"
                id="messagesDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-envelope fa-fw"></i>

                <span className="badge badge-danger badge-counter">7</span>
              </a>

              <div
                className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="messagesDropdown"
              >
                <h6 className="dropdown-header">Centro de Mensajes</h6>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="index.html"
                >
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/fn_BT9fwg_E/60x60"
                      alt=""
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">
                      ¡Hola! Me pregunto si puedes ayudarme con un problema. He
                      estado teniendo.
                    </div>
                    <div className="small text-gray-500">
                      Carlos García, 10:00 pm
                    </div>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="index.html"
                >
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/AU4VPcFN4LE/60x60"
                      alt=""
                    />
                    <div className="status-indicator"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      Tengo las fotos que ordenó el mes pasado, ¿cómo te gusta
                      que te los envíen?
                    </div>
                    <div className="small text-gray-500">Juan Perez · 1d</div>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="index.html"
                >
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/CS2uCrpNzJY/60x60"
                      alt=""
                    />
                    <div className="status-indicator bg-warning"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      El informe del mes pasado se ve muy bien, estoy muy
                      contento con el progreso hasta ahora, ¡sigan con el buen
                      trabajo!
                    </div>
                    <div className="small text-gray-500">
                      Morgan Alvarez · 2d
                    </div>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="index.html"
                >
                  <div className="dropdown-list-image mr-3">
                    <img
                      className="rounded-circle"
                      src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                      alt=""
                    />
                    <div className="status-indicator bg-success"></div>
                  </div>
                  <div>
                    <div className="text-truncate">
                      Buenos días a todos, hoy vamos a relajarnos!!
                    </div>
                    <div className="small text-gray-500">
                      Juanito Ramos · 2d
                    </div>
                  </div>
                </a>
                <a
                  className="dropdown-item text-center small text-gray-500"
                  href="index.html"
                >
                  Leer más mensajes...
                </a>
              </div>
            </li>

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="index.html"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                  Carlos García
                </span>
                <img
                  className="img-profile rounded-circle"
                  alt=""
                  src="https://source.unsplash.com/user/erondu"
                />
              </a>

              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <a className="dropdown-item" href="index.html">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Perfil
                </a>
                <a className="dropdown-item" href="index.html">
                  <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Configuración
                </a>
                <a className="dropdown-item" href="index.html">
                  <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Actividades
                </a>
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item"
                  href="index.html"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Salir
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  
  return {
    characters: state.character.list
  };
}

export default connect(mapStateToProps, { showCharacters }) (Header);
