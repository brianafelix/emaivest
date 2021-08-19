import "./Sidebar.css";
import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.jpeg";
const Sidebar = (props) => {
  const [inactive, setInactive] = useState(true);

  return (
    <div className={inactive ? "sidebar-inactive" : ""} id="Sidebar">
      <div className="Sidebar__title">
        <div className="Sidebar__img">
          <img src={logo} />
          <h1>EMARPE Soluçoes</h1>
        </div>
        <i
          className="bi bi-x-square-fill"
          id="SidebarIcon"
          aria-hidden="true"
        ></i>
      </div>
      <div className="Sidebar__menu">
        <div className="Sidebar__link active_menu_link">
          <i class="bi bi-grid-1x2-fill"></i>
          <a href="#">home</a>
        </div>
        <div className="Sidebar__link">
          <i class="bi bi-clipboard"></i>
          <a href="#">Area administrativa</a>
        </div>

        <div className="Sidebar__link">
          <i className="bi bi-file-earmark-check"></i>
          <a href="#">lojas</a>
        </div>

        <div className="Sidebar__link hr">
          <hr></hr>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-info-circle"></i>
          <a href="#">categorias</a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-shop"></i>
          <a href="#">Administrador</a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-bag"></i>
          <a href="#">Usuarios</a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-collection"></i>
          <a href="#">Pagamentos E Custos </a>
        </div>

        <div className="Sidebar__link">
          <i class="bi bi-people"></i>
          <a href="#">A Plataforma </a>
        </div>

        <div className="Sidebar__link hr">
          <hr></hr>
        </div>

        <div className="Sidebar__logout">
          <i class="bi bi-power"></i>
          <a href="#"> LOG OUT</a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
