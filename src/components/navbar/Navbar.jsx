import avatar from "../../assets/avatar.svg.png";
import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
const Navbar = ({ SidebarOpen, openSidebar }) => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ backgroundColor: "#e3f2fd", height: "80px" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <label for="containput" class="form-label">
                  Contabilidade
                </label>
                <input
                  style={{ marginTop: "-5px" }}
                  id="containput"
                  className="form-control"
                  list="datalistOptionsContabilidade"
                  placeholder="Pesquisa"
                />
                <datalist id="datalistOptionsContabilidade">
                  <option value="Fato Contabilidade" />
                  <option value="DNA Contabilidade" />
                </datalist>
              </li>
              <li className="nav-item" style={{ marginLeft: "15px" }}>
                <label for="empresainput" class="form-label">
                  Empresa
                </label>
                <input
                  style={{ marginTop: "-5px" }}
                  id="empresainput"
                  className="form-control"
                  list="datalistOptionsEmpresa"
                  placeholder="Pesquisa"
                />
                <datalist id="datalistOptionsEmpresa">
                  <option value="Empresa de Apresenta????o" />
                  <option value="Empresa de Produ????o" />
                </datalist>
              </li>

              <li className="nav-item" style={{ marginLeft: "15px" }}>
                <label for="empresainput" class="form-label">
                  M??s
                </label>
                <select className="form-control" style={{ marginTop: "-5px" }}>
                  <option>Janeiro</option>
                  <option>Fevereiro</option>
                  <option> Mar??o</option>
                  <option> Abril</option>
                  <option> Junho</option>
                  <option> Julho</option>
                </select>
              </li>

              <li className="nav-item" style={{ marginLeft: "15px" }}>
                <label for="empresainput" class="form-label">
                  Ano
                </label>
                <select className="form-control" style={{ marginTop: "-5px" }}>
                  <option>2019</option>
                  <option>2020</option>
                  <option> 2021</option>
                </select>
              </li>
            </ul>
            <form
              className="input-group float-right"
              style={{ width: "30%", marginTop: "20px" }}
            >
              <label className="input-group-text " for="inputGroupSelect01">
                <i
                  style={{ fontSize: "20px" }}
                  className="bi bi-person-circle"
                ></i>
              </label>
              <select className="form-select" id="inputGroupSelect01">
                <option selected>Jesus Falcao</option>
                <option selected>Sair</option>
              </select>
<<<<<<< HEAD
            </form>
          </div>
=======
            </li>
          </ul>
          <form
            className="input-group float-right"
            style={{ width: "25%", marginTop: "20px" }}
          >
            <label className="input-group-text " for="inputGroupSelect01">
              <i
                style={{ fontSize: "20px" }}
                className="bi bi-person-circle"
              ></i>
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Jesus Falcao</option>
              <option selected>Marcio Quiteque</option>
              <option selected>Jesus Falcao</option>
            </select>
          </form>
>>>>>>> 627449b0c1559ac742c916c52222e5da4cdfd0aa
        </div>
      </nav>
      <div style={{ marginTop: "10px" }}>
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" style={{ color: "black" }} href="#">
              RESUME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "black" }} href="#">
              RESULTADOS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "black" }} href="#">
              FOLHA
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "black" }} href="#">
              CAPITAL DE GIRO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{ color: "black" }} href="#">
              AVALIA????O
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
